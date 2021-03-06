import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppConfig } from './AppConfig';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HsptregistrationComponent } from './hsptregistration/hsptregistration.component';
import { HsptgeneralinfoComponent } from './hsptgeneralinfo/hsptgeneralinfo.component';
import { HsptaddressComponent } from './hsptaddress/hsptaddress.component';
import { HsptcontactComponent } from './hsptcontact/hsptcontact.component';
import { HsptfacilityComponent } from './hsptfacility/hsptfacility.component';
import { HsptspecialityComponent } from './hsptspeciality/hsptspeciality.component';
import { ChecklistComponent } from './shared/checklist/checklist.component';
import { HsptproviderComponent } from './hsptprovider/hsptprovider.component';
import { HsptinsuranceComponent } from './hsptinsurance/hsptinsurance.component';
import { HsptayushComponent } from './hsptayush/hsptayush.component';
import { HsptmiscellaneousComponent } from './hsptmiscellaneous/hsptmiscellaneous.component';
import { HsptpricemodelcardComponent } from './hsptpricemodelcard/hsptpricemodelcard.component';
import { HsptcarouselComponent } from './hsptcarousel/hsptcarousel.component';
import { HspthomeComponent } from './hspthome/hspthome.component';
import { HsptuserdetailComponent } from './hsptuserdetail/hsptuserdetail.component';
import { HsptwelcomeComponent } from './hsptwelcome/hsptwelcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastmessageComponent } from './shared/toastmessage/toastmessage.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatSelectModule } from '@angular/material/select';

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
    HsptregistrationComponent,
    HsptgeneralinfoComponent,
    HsptaddressComponent,
    HsptcontactComponent,
    HsptfacilityComponent,
    HsptspecialityComponent,
    ChecklistComponent,
    HsptproviderComponent,
    HsptinsuranceComponent,
    HsptayushComponent,
    HsptmiscellaneousComponent,
    HsptpricemodelcardComponent,
    HsptcarouselComponent,
    HspthomeComponent,
    HsptuserdetailComponent,
    HsptwelcomeComponent,
    ToastmessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    // ,
    // MatSelectModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient, AppConfig],
      multi: true,
    },
    MatDatepickerModule,
    // ,
    // MatSelectModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
