import { Component, OnInit } from '@angular/core';
import { LogonService } from '../services/logon.service';
import { UserInfoModel } from '../models/user/userinfomodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  userInfoModel!:UserInfoModel;

  constructor(private logonService:LogonService, private router :Router) { }

  ngOnInit(): void {
     this.getUserDetails(this.logonService.getUserId());
  }

  public getUserDetails(userId:string) :void {
    this.logonService.getUser(userId).subscribe(data=>{
      this.userInfoModel=data;
      if(data==null){
      this.router.navigate(['logon']);
      }
    });
  }

}
