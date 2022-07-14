import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogonComponent } from './logon/logon.component';

const routes: Routes = [
  { path: '', component: LogonComponent },
  //{ path: '/', component: LogonComponent },
  { path: 'logon', component: LogonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UserLogonRoutingModule { }