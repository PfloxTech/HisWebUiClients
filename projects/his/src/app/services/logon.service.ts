import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogonService {

  constructor(private httpClient: HttpClient) {

  }

  getUser() {
    return this.httpClient.get("https://localhost:44391/api/User/GetUser/1");
  }
}