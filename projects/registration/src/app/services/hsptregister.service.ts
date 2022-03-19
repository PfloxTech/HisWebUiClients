import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../AppConfig';
import { HsptModel } from '../models/hsptmodel';
import { CountryModel } from '../models/CountryModel';

@Injectable({
  providedIn: 'root',
})
export class HsptregisterService {
  hsptModel: HsptModel = new HsptModel();

  constructor(private httpClient: HttpClient, private config: AppConfig) {}

  register(model: HsptModel) {
    return this.httpClient.post(
      `${this.config.baseUrl}api/Registration/RegisterHospital`,
      model
    );
  }

  getBilling() {
    return this.httpClient.get(
      `${this.config.baseUrl}api/Registration/getBilling`
    );
  }
  //
  getCountry() {
    return this.httpClient.get(
      `${this.config.baseUrl}api/Registration/getCountries`
    );
  }

  getState() {
    return this.httpClient.get(
      `${this.config.baseUrl}api/Registration/getStates`
    );
  }
  //

  setRegisterModel(_hsptModel: HsptModel) {
    this.hsptModel = _hsptModel;
  }

  getRegisterModel(): HsptModel {
    return this.hsptModel;
  }
}
