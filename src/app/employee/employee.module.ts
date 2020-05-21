import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routingComponents, EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [routingComponents],
  imports: [
   SharedModule,
   EmployeeRoutingModule,
  ],
  exports:[
    RouterModule
  ]
})
export class EmployeeModule { }
