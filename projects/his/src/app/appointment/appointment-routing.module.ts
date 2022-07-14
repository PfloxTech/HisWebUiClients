import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CancleAppointmentComponent } from './cancle-appointment/cancle-appointment.component';
import { SearchAppointmentComponent } from './search-appointment/search-appointment.component';

const routes: Routes = [
 /* {path:'',component:BookAppointmentComponent},*/
  {path:'book',component:BookAppointmentComponent,outlet:'workspace'},
  {path:'cancle',component:CancleAppointmentComponent,outlet:'workspace'},
  {path:'search',component:SearchAppointmentComponent,outlet:'workspace'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
