import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HsptUserModel } from '../models/hsptUserModel';
import { HsptregisterService } from '../services/hsptregister.service';
import { HsptModel } from '../models/hsptmodel';
import { HsptContactModel } from '../models/HsptContactModel';
import { HsptMiscellaneousModel } from '../models/HsptMiscellaneousModel';
import { CustomValidator } from '../validaters/CustomValidator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../validaters/validation.service';
import { HsptAddressModel } from '../models/HsptAddressModel';

@Component({
  selector: 'app-hsptuserdetail',
  templateUrl: './hsptuserdetail.component.html',
  styleUrls: ['./hsptuserdetail.component.less'],
})
export class HsptuserdetailComponent implements OnInit {
  hsptModel: HsptModel = new HsptModel();
  UserModel: HsptUserModel = new HsptUserModel();
  errorsList: Array<string> = new Array<string>();
  userDetailsForm: FormGroup = this.fb.group({
    firstName: [null, CustomValidator.Required],
    lastName: [null],
    middleName: [null],
    emailId: [null, [CustomValidator.Required, CustomValidator.Email]],
    loginId: [null, [CustomValidator.Required]],
    phone: [null, CustomValidator.IsMobileNumber],
    password: [null, [CustomValidator.Required, CustomValidator.Password]],
    confirmPassword: [null, { validators: [CustomValidator.Required, CustomValidator.Password] }],
    otp: [null, [CustomValidator.Required]],
  }, { validators: CustomValidator.PasswordMatch, updateOn: "blur" });
  constructor(private router: Router, private hsptRgisterService: HsptregisterService,
    private fb: FormBuilder, private validationService: ValidationService) { }

  ngOnInit(): void {
    this.hsptModel = this.hsptRgisterService.getRegisterModel();
    this.UserModel = this.hsptRgisterService.getUserModel();
  }

  back(): void {
    this.hsptRgisterService.setUserModel(this.UserModel);
    this.router.navigate(["hospital-registration"]);
  }

  next(): void {
    this.hsptRgisterService.setUserModel(this.UserModel);
    var frmValidation = this.validationService.validateForm(this.userDetailsForm);
    if (!frmValidation.IsValid) {
      return;
    }

    this.UserModel = this.userDetailsForm.value;
    this.hsptModel.hsptUsers = new Array<HsptUserModel>();
    this.hsptModel.hsptUsers.push(this.UserModel);
    this.hsptModel.hsptContacts = new Array<HsptContactModel>();
    this.hsptModel.hsptContacts.push(this.hsptModel.hsptContact);
    this.hsptModel.hsptMiscellaneousList = new Array<HsptMiscellaneousModel>();
    this.hsptModel.hsptMiscellaneousList.push(this.hsptModel.hsptMiscellaneous);
    this.hsptModel.hsptAddresses = new Array<HsptAddressModel>();
    this.hsptModel.hsptAddresses.push(this.hsptModel.hsptAddress);
    this.hsptRgisterService.register(this.hsptModel).subscribe((data) => {
      var hsptSysRegNum = data;
      this.router.navigate(['hospital-welcome', hsptSysRegNum]);
    });
  }

  close(): void {
    this.errorsList = new Array<string>();
  }

  sendOtp(): void {
    var ctrl = this.userDetailsForm.controls;
    if (ctrl['emailId'].errors?.['email']) {
      return;
    }
    this.hsptRgisterService.sendOtp(this.userDetailsForm.value.emailId).subscribe(data => {
      if (data === true) {

      }
    });
  }

}