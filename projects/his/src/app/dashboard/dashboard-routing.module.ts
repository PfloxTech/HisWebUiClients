import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurgeryComponent } from './surgery/surgery.component';

const routes: Routes = [
  {path:'dashboard',component:SurgeryComponent,outlet:'workspace'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
