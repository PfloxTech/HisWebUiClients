import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HspthomeComponent } from './hspthome/hspthome.component';
import { HsptregistrationComponent } from './hsptregistration/hsptregistration.component';

const routes: Routes = [{ path: '', component: HspthomeComponent },
{ path: 'hospital-registration', component: HsptregistrationComponent }];

const routesConfig: ExtraOptions = { scrollPositionRestoration: 'enabled' };

@NgModule({
  imports: [RouterModule.forRoot(routes, routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
