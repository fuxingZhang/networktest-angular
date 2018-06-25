import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { latency }  from './latency/latency';
import { download }  from './download/download';
import { upload }  from './upload/upload';

import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule
  ],
  declarations: [
    AppComponent,
    latency,
    download,
    upload
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
