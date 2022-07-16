import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpdRoutingModule } from './ipd-routing.module';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';


@NgModule({
  declarations: [
    PatientRegistrationComponent
  ],
  imports: [
    CommonModule,
    IpdRoutingModule
  ]
})
export class IpdModule { }
