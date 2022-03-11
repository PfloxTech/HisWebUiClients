import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../AppConfig';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private readonly httpClient: HttpClient, private appConfig: AppConfig) { }

  getFeature(method: string) {

    return this.httpClient.get(`${this.appConfig.baseUrl}api/Registration/${method}`);
  }
}