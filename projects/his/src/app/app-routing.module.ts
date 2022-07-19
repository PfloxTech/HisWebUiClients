import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace/workspace.component';
import { OpdRoutingModule } from './opd/opd-routing.module';
import { UserLogonRoutingModule } from './userlogon/userlogon-routing.module';
import { IpdRoutingModule } from './ipd/ipd-routing.module';
import { AppointmentRoutingModule } from './appointment/appointment-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

const routes: Routes = [
 // { path: '', component: DashboardComponent },
  //{ path: 'ipd', component: WorkspaceComponent,loadChildren:()=>IpdRoutingModule},
  //{ path: 'opd', component: WorkspaceComponent, loadChildren:()=>OpdRoutingModule },
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'appointment', component: WorkspaceComponent,loadChildren:()=>AppointmentRoutingModule},
  { path: 'hspt', component:WorkspaceComponent, children:[
    {path:'ipd', loadChildren:()=>IpdRoutingModule},
    {path:'opd', loadChildren:()=>OpdRoutingModule},
    {path:'appointment', loadChildren:()=>AppointmentRoutingModule},
    { path: 'dashboard', loadChildren:()=>DashboardRoutingModule }
  ]},
  { path:' ',loadChildren:()=>UserLogonRoutingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
