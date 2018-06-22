import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { latency }  from './latency/latency';

const routes: Routes = [
  // { path: '', redirectTo: '/latency', pathMatch: 'full' },
  { path: 'latency', component: latency }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }






