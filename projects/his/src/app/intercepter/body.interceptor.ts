import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../AppConfig';
import { LogonService } from '../services/logon.service';

@Injectable()
export class BodyInterceptor implements HttpInterceptor {
  cloneRreq!:any;

  constructor(private appCofig:AppConfig, private logonService:LogonService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger;
    if(request.method.toLowerCase()!='get'){
       this.cloneRreq=request.clone({body:request.body});
       this.cloneRreq.body.loginId=this.logonService.getUserId();
       return next.handle(this.cloneRreq);
    }
    return next.handle(request);
  }
}
