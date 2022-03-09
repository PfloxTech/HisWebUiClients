import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(private readonly httpClient: HttpClient) { }

  getSpeciality() {
    return this.httpClient.get("https://localhost:44391/api/Registration/GetSpeciality");
  }
}