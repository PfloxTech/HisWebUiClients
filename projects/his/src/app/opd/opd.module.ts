import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpdRoutingModule } from './opd-routing.module';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';


@NgModule({
  declarations: [
    PatientRegistrationComponent
  ],
  imports: [
    CommonModule,
    OpdRoutingModule
  ],
  bootstrap:[PatientRegistrationComponent]
})
export class OpdModule { }
