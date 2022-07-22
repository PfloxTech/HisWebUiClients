import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogonModel } from '../models/user/UserLogonModel';
import { UserInfoModel } from '../models/user/userinfomodel';
import { AppConfig } from '../AppConfig';

@Injectable({
  providedIn: 'root'
})
export class LogonService {

  private _userInfo:UserInfoModel=new UserInfoModel();

  constructor(private httpClient: HttpClient, private appConfig:AppConfig) {

  }

  getUserState(): UserInfoModel {
    return this._userInfo;
}

setToken(token:string): UserInfoModel {
  this._userInfo.token=token;
  return this._userInfo;
}

  getUser(userId:string): Observable<UserInfoModel> {
    return this.httpClient.get<UserInfoModel>(`${this.appConfig.baseUrl}api/User/GetUser/${userId}`);
  }

  logonUser(usermodel:UserLogonModel) {
    this._userInfo.loginId=usermodel.LogonId;
    return this.httpClient.post(`${this.appConfig.baseUrl}api/User/Logon`,usermodel);
  }

}