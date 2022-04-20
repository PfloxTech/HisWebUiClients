import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../AppConfig';
import { HsptModel } from '../models/hsptmodel';
import { BillingModel } from '../models/BillingModel';
import { Observable } from 'rxjs';
import { OtpModel } from '../models/OtpModel';
import { HsptUserModel } from '../models/hsptUserModel';

@Injectable({
  providedIn: 'root'
})
export class HsptregisterService {

  hsptModel: HsptModel = new HsptModel();
  _hsptUserModel: HsptUserModel = new HsptUserModel();

  constructor(private httpClient: HttpClient, private config: AppConfig) { }

  register(model: HsptModel) {
    return this.httpClient.post(`${this.config.baseUrl}api/Registration/RegisterHospital`, model)
  }

  getBilling(): Observable<Array<BillingModel>> {
    return this.httpClient.get<Array<BillingModel>>(`${this.config.baseUrl}api/Registration/getBilling`);
  }

  setRegisterModel(_hsptModel: HsptModel) {
    this.hsptModel = _hsptModel;
  }

  getRegisterModel(): HsptModel {
    return this.hsptModel;
  }

  setUserModel(userModel: HsptUserModel) {
    this._hsptUserModel = userModel;
  }

  getUserModel(userModel: HsptUserModel) {
    return this._hsptUserModel;
  }

  getHospital(hospitalPk: number): Observable<HsptModel> {
    return this.httpClient.get<HsptModel>(`${this.config.baseUrl}api/Registration/GetHospital/${hospitalPk}`);
  }

  sendOtp(toMail: string): Observable<boolean> {
    var otpModel = new OtpModel();
    otpModel.Recipient = toMail;
    return this.httpClient.post<boolean>(`${this.config.baseUrl}api/Registration/SentOtp`, otpModel);
  }

}