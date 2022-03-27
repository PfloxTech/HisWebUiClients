import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HsptUserModel } from '../models/hsptUserModel';
import { HsptregisterService } from '../services/hsptregister.service';
import { HsptModel } from '../models/hsptmodel';
import { HsptContactModel } from '../models/hsptcontactmodel';
import { HsptMiscellaneousModel } from '../models/HsptMiscellaneousModel';
import { CustomValidator } from '../validaters/CustomValidator';
import { FormBuilder } from '@angular/forms';
import { AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-hsptuserdetail',
  templateUrl: './hsptuserdetail.component.html',
  styleUrls: ['./hsptuserdetail.component.less']
})
export class HsptuserdetailComponent implements OnInit {

  hsptModel: HsptModel = new HsptModel();
  UserModel: HsptUserModel = new HsptUserModel();
  errorsList: Array<string> = new Array<string>();
  userDetailsForm = this.fb.group({
    firstName: [this.UserModel.firstName, CustomValidator.Required],
    lastName: [null],
    middleName: [null],
    emailId: [null, [CustomValidator.Required, CustomValidator.Email]],
    loginId: [null, [CustomValidator.Required]],
    phone: [null],
    password: [null, [CustomValidator.Required, CustomValidator.Password]],
    confirmPassword: [null, { validators: [CustomValidator.Required, CustomValidator.Password] }],
    otp: [null, [CustomValidator.Required]],
  }, { validators: CustomValidator.PasswordMatch, updateOn: "blur" });

  constructor(private router: Router, private hsptRgisterService: HsptregisterService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.hsptModel = this.hsptRgisterService.getRegisterModel();
  }

  back(): void {
    var priceModelId = this.hsptModel.billingFk;
    this.router.navigate(["hospital-registration", priceModelId]);
  }


  next(): void {
    this.UserModel = this.userDetailsForm.value;
    this.errorsList = new Array<string>();
    if (!this.userDetailsForm.valid) {
      Object.keys(this.userDetailsForm.controls).forEach(ctrlKey => {
        var ctrl = this.userDetailsForm.controls[ctrlKey];
        var errors: any = ctrl.errors;
        if (errors) {
          Object.keys(errors).forEach(errrorKey => {
            if(this.errorsList.indexOf(errors[errrorKey])<0){
            this.errorsList.push(errors[errrorKey]);
            }
          });
        }
      });

      var error: any = this.userDetailsForm.errors;
      Object.keys(error).forEach(er => {
        var frmEr = error[er];
        this.errorsList.push(frmEr);
      });

      return;
    }

    this.hsptModel = this.hsptRgisterService.getRegisterModel();
    this.hsptModel.hsptUsers = new Array<HsptUserModel>();
    this.hsptModel.hsptUsers.push(this.UserModel);
    this.hsptModel.hsptContacts = new Array<HsptContactModel>();
    this.hsptModel.hsptContacts.push(this.hsptModel.hsptContact);
    this.hsptModel.hsptMiscellaneousList = new Array<HsptMiscellaneousModel>();
    this.hsptModel.hsptMiscellaneousList.push(this.hsptModel.hsptMiscellaneous);
    this.hsptRgisterService.register(this.hsptModel).subscribe(data => {
      var hospitalPk = data;
      this.router.navigate(["hospital-welcome", hospitalPk]);
    });
  }

  close(): void {
    this.errorsList = new Array<string>();
  }
}
