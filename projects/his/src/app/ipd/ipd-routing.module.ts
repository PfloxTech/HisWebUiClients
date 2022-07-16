import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
const routes: Routes = [{path:'',component:PatientRegistrationComponent},
{path:'patientregistration',component:PatientRegistrationComponent, outlet:'workspace'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpdRoutingModule { }
