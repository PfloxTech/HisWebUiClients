import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../AppConfig';
import { UserInfoModel } from '../models/user/userinfomodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient,private appConfig:AppConfig) { }

public schedule(userModel:UserInfoModel): Observable<boolean> {
  return this.httpClient.post<boolean>(`${this.appConfig.baseUrl}api/appointment/schedule`,userModel);
}

}
