import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HsptUserModel } from '../models/hsptUserModel';
import { HsptregisterService } from '../services/hsptregister.service';
import { HsptModel } from '../models/hsptmodel';
import { HsptContactModel } from '../models/hsptcontactmodel';
import { HsptMiscellaneousModel } from '../models/HsptMiscellaneousModel';
import { CustomValidator } from '../validaters/CustomValidator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../validaters/validation.service';

@Component({
  selector: 'app-hsptuserdetail',
  templateUrl: './hsptuserdetail.component.html',
  styleUrls: ['./hsptuserdetail.component.less']
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
    phone: [null],
    password: [null, [CustomValidator.Required, CustomValidator.Password]],
    confirmPassword: [null, { validators: [CustomValidator.Required, CustomValidator.Password] }],
    otp: [null, [CustomValidator.Required]],
  }, { validators: CustomValidator.PasswordMatch, updateOn: "blur" });
  constructor(private router: Router, private hsptRgisterService: HsptregisterService,
    private fb: FormBuilder, private validationService: ValidationService) { }

  ngOnInit(): void {
    this.hsptModel = this.hsptRgisterService.getRegisterModel();
  }

  back(): void {
    var priceModelId = this.hsptModel.billingFk;
    this.router.navigate(["hospital-registration", priceModelId]);
  }


  next(): void {

    var frmValidation = this.validationService.validateForm(this.userDetailsForm);
    if (!frmValidation.IsValid) {
        return;
    }

    this.UserModel = this.userDetailsForm.value;
    this.hsptModel = this.hsptRgisterService.getRegisterModel();
    this.hsptModel.hsptUsers = new Array<HsptUserModel>();
    this.hsptModel.hsptUsers.push(this.UserModel);
    this.hsptModel.hsptContacts = new Array<HsptContactModel>();
    this.hsptModel.hsptContacts.push(this.hsptModel.hsptContact);
    this.hsptModel.hsptMiscellaneousList = new Array<HsptMiscellaneousModel>();
    this.hsptModel.hsptMiscellaneousList.push(this.hsptModel.hsptMiscellaneous);
    this.hsptRgisterService.register(this.hsptModel).subscribe(data => {
      var hsptSysRegNum = data;
      this.router.navigate(["hospital-welcome", hsptSysRegNum]);
    });
  }

  close(): void {
    this.errorsList = new Array<string>();
  }
}
