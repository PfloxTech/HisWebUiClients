import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../AppConfig';
import { HsptModel } from '../models/hsptmodel';
import { BillingModel } from '../models/BillingModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HsptregisterService {

  hsptModel: HsptModel = new HsptModel();

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
}