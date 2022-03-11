import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    HsptmiscellaneousComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
