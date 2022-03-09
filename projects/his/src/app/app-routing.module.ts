import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IpdComponent } from './ipd/ipd.component';
import { OpdComponent } from './opd/opd.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'ipd', component: IpdComponent },
  { path: 'opd', component: OpdComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appointment', component: AppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
