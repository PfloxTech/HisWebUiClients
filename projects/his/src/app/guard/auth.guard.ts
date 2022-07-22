import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserInfoModel } from '../models/user/userinfomodel';
import { LogonService } from '../services/logon.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  userInfoModel!:UserInfoModel;
  constructor(private logonService :LogonService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkUserInformation(route,state);
     
  }


checkUserInformation(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  //user id from logon service
  return this.logonService.getUser(this.logonService.getUserState().loginId).pipe(map((userInfoModel)=>{
    this.userInfoModel =  userInfoModel;
    return this.userInfoModel!=null && this.userInfoModel.loginId.trim().length>0;
  }));
}
 
}