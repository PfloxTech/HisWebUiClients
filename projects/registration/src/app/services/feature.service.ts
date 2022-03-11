import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private readonly httpClient: HttpClient) { }

  getFeature(method: string) {
    return this.httpClient.get(`https://localhost:44391/api/Registration/${method}`);
  }
}