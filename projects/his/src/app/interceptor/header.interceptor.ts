import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogonService } from '../services/logon.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private logonService:LogonService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger;
    var userInfoModel= this.logonService.getUserState();
    if(userInfoModel!=null && userInfoModel!=undefined){
      request=request.clone({setHeaders:{
        "Authorization":`Bearer ${userInfoModel.token}`
      }});
    }
    return next.handle(request);
  }
}
