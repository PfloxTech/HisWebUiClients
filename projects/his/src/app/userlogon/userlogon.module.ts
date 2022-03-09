import { NgModule } from '@angular/core';
import { UserLogonRoutingModule } from './userlogon-routing.module';
import { LogonComponent } from './logon/logon.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LogonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserLogonRoutingModule    
  ],
  providers: [],
  bootstrap: [LogonComponent]
})
export class UserlogonModule { }
