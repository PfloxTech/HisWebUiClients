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

  private _logonId:string='';

  constructor(private httpClient: HttpClient, private appConfig:AppConfig) {

  }

  getUserId(): string {
    return this._logonId;
}

  getUser(userId:string): Observable<UserInfoModel> {
    return this.httpClient.get<UserInfoModel>(`${this.appConfig.baseUrl}api/User/GetUser/${userId}`);
  }

  logonUser(usermodel:UserLogonModel) {
    this._logonId=usermodel.LogonId
    return this.httpClient.post(`${this.appConfig.baseUrl}api/User/Logon`,usermodel);
  }

}