import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogonService } from '../../services/logon.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserLogonModel } from '../../services/UserLogonModel';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.less']
})
export class LogonComponent implements OnInit {

  logonForm = this.fb.group({
    loginId: [null, Validators.required],
    password: [null, Validators.required],
  });
  Error:any;

  constructor(private readonly router: Router, private logonService: LogonService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLogon(): void {

    if(this.logonForm.valid){
      var userModel=new UserLogonModel();
      userModel.LogonId=this.logonForm.value.loginId;
      userModel.Password=this.logonForm.value.password;
      var data = this.logonService.logonUser(userModel).subscribe(
        (response)=>{
          if(response==null){
            this.Error="Credentials are invalid";
            return;
          }
       this.router.navigate(['home']);
      },
      (error)=>{
        this.Error=error.error;
      }
      );
      
    }

  }

}