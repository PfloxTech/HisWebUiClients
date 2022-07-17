import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogonService } from '../services/logon.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  userId!:string;
  constructor(private logonService :LogonService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //user id from logon service
      this.userId = this.logonService.getUserId()
      if(this.userId!=null && 
      this.userId!=undefined && 
      this.userId.length>0){
          return true;
      }
    return false;
  }
  
}
