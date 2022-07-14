import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { OpdRoutingModule } from './opd/opd-routing.module';
import { UserLogonRoutingModule } from './userlogon/userlogon-routing.module';
import { IpdRoutingModule } from './ipd/ipd-routing.module';

const routes: Routes = [
 // { path: '', component: DashboardComponent },
  { path: 'ipd', component: WorkspaceComponent,loadChildren:()=>IpdRoutingModule },
  { path: 'opd', component: WorkspaceComponent, loadChildren:()=>OpdRoutingModule },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appointment', component: AppointmentComponent},
  { path: 'home', component: WorkspaceComponent },
  { path:' ',loadChildren:()=>UserLogonRoutingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
