import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HspthomeComponent } from './hspthome/hspthome.component';
import { HsptregistrationComponent } from './hsptregistration/hsptregistration.component';
import { HsptuserdetailComponent } from './hsptuserdetail/hsptuserdetail.component';
import { HsptwelcomeComponent } from './hsptwelcome/hsptwelcome.component';

const routes: Routes = [{ path: '', component: HspthomeComponent },
{ path: 'hospital-registration/:priceModelId', component: HsptregistrationComponent },
{ path: 'hospital-user', component: HsptuserdetailComponent },
{ path: 'hospital-welcome/:hospitalPk', component: HsptwelcomeComponent }];

const routesConfig: ExtraOptions = { scrollPositionRestoration: 'enabled' };

@NgModule({
  imports: [RouterModule.forRoot(routes, routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
