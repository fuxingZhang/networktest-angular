import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-latency',
  templateUrl: './latency.html',
  styleUrls: [ './latency.css' ]
})
export class latency implements OnInit {

  initOption: any;
  timer: any;
  button: string;
  stop: boolean;
  now: number;
  average: number;
  length: number;
  tableData: [object];
  updateOption: any;

  constructor(private appService: AppService) {
    this.button = "开始";
    this.timer = "";
    this.stop = false;
    this.now = 0;
    this.average = 0;
    this.length = 0;
    this.tableData = [
      {
        now: "0ms",
        average: "0ms"
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
        text: 'Latency Test',
        subtext: '延迟测试'
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
          formatter: '{value}ms'
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
              show: true,
              position: 'outside',
              formatter: '{c}ms'
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
              show: true,
              position: 'outside',
              formatter: '{c}ms'
            }
          }
        }
      ],
      animationDuration: 1000,
      animationDurationUpdate: 1000,
      animationEasing:'cubicIn'
    }
    this.updateOption = JSON.parse(JSON.stringify(this.initOption))
  }

  change(): void{
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = "";
      this.button = "开始";
      this.stop = true;
      return;
    }
    this.stop = false;
    this.button = "停止";
    this.run();
  }

  run(): void{
    if(this.stop) return;
    const start = Date.now();
    this.appService.getLatency()
      .subscribe(res => {
        if(res.length == 0) {
          alert('发送错误')
          this.button = "开始";
          this.stop = true;
          return
        }
        console.log('in latency: ', res)
        const end = Date.now();
        this.now = end - start;
        this.average = Math.floor((this.average*this.length + this.now) / (++this.length));
        const now = this.now + "ms";
        const average = this.average + "ms";
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
        if (!this.stop) {
          this.timer = setTimeout(()=> {
            this.run()
          }, 1000);
        }
      });
  }

  clear(): void{
    this.stop = true;
    this.tableData = [
      {
        now: 0,
        average: 0
      }
    ];
    this.now = 0;
    this.average = 0;
    this.length = 0;
    this.button = "开始";
    this.updateOption = JSON.parse(JSON.stringify(this.initOption))
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = "";
    }
  }

}