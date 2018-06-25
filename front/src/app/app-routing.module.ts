import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { latency }  from './latency/latency';
import { download }  from './download/download';
import { upload }  from './upload/upload';

const routes: Routes = [
  { path: '', redirectTo: '/latency', pathMatch: 'full' },
  { path: 'latency', component: latency },
  { path: 'download', component: download },
  { path: 'upload', component: upload },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }






