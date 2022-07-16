import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CancleAppointmentComponent } from './cancle-appointment/cancle-appointment.component';
import { SearchAppointmentComponent } from './search-appointment/search-appointment.component';


@NgModule({
  declarations: [
    BookAppointmentComponent,
    CancleAppointmentComponent,
    SearchAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
