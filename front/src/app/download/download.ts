import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-download',
  templateUrl: './download.html',
  styleUrls: [ './download.css' ]
})
export class download implements OnInit {

  initOption: any;
  button: string;
  running: boolean;
  start: number;
  now: number;
  average: number;
  length: number;
  tableData: [object];
  updateOption: any;
  userCancal: boolean;
  Event:{
    loaded: string
  }

  constructor(private http: HttpClient) {
    this.button = "开始";
    this.running = false;
    this.userCancal = false;
    this.now = 0;
    this.start = 0;
    this.average = 0;
    this.length = 0;
    this.tableData = [
      {
        now: "0kb/s",
        average: "0kb/s"
      }
    ];
  }

  ngOnInit() {
    if (!Date.now) {
      Date.now = function now() {
        return new Date().getTime();
      };
    }
    this.initOption = {
      title: {
        text: 'DownLoad Test',
        subtext: '下载测试'
      },
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          feature: {
              restore: {},
              saveAsImage: {}
          }
      },
      series: [
        {
          name: '实时速率',
          type: 'gauge',
          z: 3,
          min: 0,
          max: 2000,
          center: ['25%', '55%'],    // 默认全局居中
          detail: {formatter:'{value}kb/s'},
          data: [{value: 0, name: '实时速率'}]
        },
        {
          name: '平均速率',
          type: 'gauge',
          z: 3,
          min: 0,
          max: 2000,
          center: ['75%', '55%'],    // 默认全局居中
          detail: {formatter:'{value}kb/s'},
          data: [{value: 0, name: '平均速率'}]
        }
      ]
    }
    this.updateOption = JSON.parse(JSON.stringify(this.initOption))
  }

  change(): void{
    if (this.running) {
      this.userCancal = true;
      this.button = "开始";
      this.running = false;
      return;
    }
    this.running = true;
    this.button = "停止";
    this.userCancal = false;
    this.run();
  }

  run(): void{
    const start = Date.now();
    this.start = start
    this.download()
    .subscribe(res => {
      console.log('subscribe')
      if(this.userCancal) {
        throw Error('Operation canceled by the user.');
      }
    })
  }

  clear(): void{
    this.tableData = [
      {
        now: 0,
        average: 0
      }
    ];
    this.now = 0;
    this.average = 0;
    this.button = "开始";
    this.running = false;
    this.length = 0;
    this.updateOption.series[0].data[0].value = 0
    this.updateOption.series[1].data[0].value = 0
    this.updateOption =  {
      series: this.updateOption.series
    };
  }

  download (): Observable<any> {
    const req = new HttpRequest('get', 'http://localhost:8200/api/download', {
      responseType: 'text',
      reportProgress: true
    });

    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event)),
      tap(res => this.onProgress(res)),
      catchError(this.handleError('download', []))
    );
  }

  onProgress (res: any): void{
    console.log('downloading') 
  }
  
  getEventMessage(event: HttpEvent<any>): void{
    if(event.type == 0) {
      console.log(HttpEventType)
    }
    console.log(event)
    if(event.type == HttpEventType.DownloadProgress) {
      const end = Date.now();
      const ms = end - this.start;
      this.now = Math.floor(event['loaded']*1000/1024/ms);
      this.average = Math.floor((this.average*this.length + this.now) / ++this.length);
      const now = this.now + "kb/s";
      const average = this.average + "kb/s";
      this.tableData = [
        {
          now,
          average
        }
      ];
      this.updateOption.series[0].data[0].value = this.now
      this.updateOption.series[1].data[0].value = this.average
      this.updateOption =  {
        series: this.updateOption.series
      };
    }

    if(event.type == HttpEventType.Response) {
      this.button = "开始";
      this.running = false;
    }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    console.log(`handleError operation: ${operation}`);

    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}