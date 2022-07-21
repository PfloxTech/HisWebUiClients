import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './AppConfig';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { UserlogonModule } from './userlogon/userlogon.module';
import { OpdModule } from './opd/opd.module';
import { IpdModule } from './ipd/ipd.module';
import { AppointmentModule } from './appointment/appointment.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import{MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { BodyInterceptor } from './intercepter/body.interceptor';


function initializeAppFactory(
  httpClient: HttpClient,
  config: AppConfig
): () => Promise<boolean> {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
      httpClient.get('assets/data/appConfig.json').subscribe((data: any) => {
        config.baseUrl = data.baseUrl;
        resolve(true);
      });
    });
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserlogonModule,
    OpdModule,
    IpdModule,
    AppointmentModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient, AppConfig],
      multi: true,
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:BodyInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }