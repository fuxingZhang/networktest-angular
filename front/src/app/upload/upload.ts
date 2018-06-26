import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.html',
  styleUrls: [ './upload.css' ]
})
export class upload implements OnInit {

  initOption: any;
  iterations: number;
  duration: number;
  value: string;
  button: string;
  remain: number;
  uploadData: string;
  running: boolean;
  userCancel: boolean;
  now: number;
  start: number;
  average: number;
  length: number;
  tableData: [object];
  updateOption: any;
  options: {
    label: string,
    value: string
  }[];

  constructor(private http: HttpClient) {
    this.iterations = 1;
    this.duration = 1;
    this.value = '1024';
    this.remain = 0;
    this.uploadData = '';
    this.button = "开始";
    this.tableData = [
      {
        now: "0kb/s",
        average: "0kb/s"
      }
    ];
    this.now = 0;
    this.start = 0;
    this.average = 0;
    this.length = 0;
    this.running = false;
    this.userCancel = false;
    this.options = [
      {
        value: '10',
        label: '10kb'
      },{
        value: '100',
        label: '100kb'
      }, {
        value: '1024',
        label: '1mb'
      }, {
        value: '10240',
        label: '10mb'
      }, {
        value: '102400',
        label: '100mb'
      }
    ];
  }

  ngOnInit() {
    if (!Date.now) {
      Date.now = function now() {
        return new Date().getTime();
      };
    }
    const data = []
    const now = []
    const average = []
    for(let i=0;i<10;i++){
      data.push(' ')
      now.push(0)
      average.push(0)
    }
    this.initOption = {
      title: {
        text: 'Upload Test',
        subtext: '上传测试'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['实时值','平均值']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
              yAxisIndex: 'none'
          },
          dataView: {readOnly: false},
          magicType: {type: ['line', 'bar']},
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data,
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}kb/s'
        }
      },
      series: [
        {
          data: now,
          type: 'line',
          smooth: true,
          name:'实时值',
          label: {
            normal: {
              show: false,
              position: 'top',
              formatter: '{c}kb/s'
            }
          }
        },
        {
          data: average,
          type: 'line',
          smooth: true,
          name:'平均值',
          label: {
            normal: {
              show: false,
              position: 'bottom',
              formatter: '{c}kb/s'
            }
          }
        }
      ],
      // animationDuration: 1000,
      // animationDurationUpdate: 1000,
      animationEasing:'cubicIn'
    }
    this.updateOption = JSON.parse(JSON.stringify(this.initOption))
    this.http.get("http://localhost:8200/api/upload", {responseType: 'text'})
    .subscribe(res => {
      console.log(res)
      this.uploadData = res
    })
  }

  change(): void{
    if (this.running) {
      this.userCancel = true;
      this.button = "开始";
      this.running = false;
      return;
    }
    this.userCancel = false;
    this.running = true;
    this.button = "停止";
    this.remain = this.iterations;
    this.run();
  }

  run(): void{
    if(!this.running) return
    let duration = this.duration
    const start = Date.now();
    this.start = start
    let postData = []
    let n = parseInt(this.value)
    for(let i=0;i < n; i++){
      postData.push(this.uploadData)
    }
    let data = new FormData()
    let blob = new Blob(postData,{
      type:'application/octet-stream'
    }) //var aBlob = new Blob( array, options );
    // let file = new File([this.uploadData], "file.bin", {
    //   type: 'application/octet-stream',
    // });
    /**
     * The filename reported to the server (a USVString), when a Blob or File is passed as the second parameter. 
     * The default filename for Blob objects is "blob". 
     * The default filename for File objects is the file's filename.
     */
    // data.append('file', blob) 
    data.append('file', blob,'upload.bin') 
    // data.append('file',file) 
    // data.append('file',file,'appendFileName.bin') 
    this.upload(data)
    .subscribe(res => {
      console.log('subscribe', res)   // res == undefined
      if(this.userCancel) {
        throw Error('Operation canceled by the user.');
      }
      this.length = 0;
      this.remain--
      if(this.remain == 0) {
        this.button = "开始";
        this.running = false
        return
      }
      setTimeout( () => {
        this.run()
      }, duration*1000)
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
    this.length = 0;
    this.running = false;
    const data = [];
    const now = [];
    const average = [];
    for(let i=0;i<10;i++){
      data.push(' ')
      now.push(0)
      average.push(0)
    }
    this.updateOption.xAxis.data = data
    this.updateOption.series[0].data = now
    this.updateOption.series[1].data = average
    this.updateOption =  {
      xAxis: this.updateOption.xAxis,
      series: this.updateOption.series
    };
  }
  upload (data): Observable<any> {
    const req = new HttpRequest('post', 'http://localhost:8200/api/upload', data, {
      reportProgress: true,
      responseType: 'text'
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
    if(event.type == HttpEventType.UploadProgress) {
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
      this.updateOption.xAxis.data.shift()
      const date = new Date()
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      this.updateOption.xAxis.data.push(time)
      this.updateOption.series[0].data.shift()
      this.updateOption.series[1].data.shift()
      this.updateOption.series[0].data.push(this.now)
      this.updateOption.series[1].data.push(this.average)
      this.updateOption =  {
        xAxis: this.updateOption.xAxis,
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