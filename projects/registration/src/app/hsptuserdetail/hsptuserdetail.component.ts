import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HsptUserModel } from '../models/hsptUserModel';
import { HsptregisterService } from '../services/hsptregister.service';
import { HsptModel } from '../models/hsptmodel';
import { HsptContactModel } from '../models/hsptcontactmodel';
import { HsptMiscellaneousModel } from '../models/HsptMiscellaneousModel';
import { EmailValidator, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomValidator } from '../validaters/CustomValidator';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hsptuserdetail',
  templateUrl: './hsptuserdetail.component.html',
  styleUrls: ['./hsptuserdetail.component.less']
})
export class HsptuserdetailComponent implements OnInit {

  hsptModel: HsptModel = new HsptModel();
  UserModel: HsptUserModel = new HsptUserModel();
  frm = new FormControl();

  userDetailsForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
    emailId: ['', [CustomValidator.Required, CustomValidator.Email]]
  });

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
    alert(this.userDetailsForm.valid);
    debugger;
    this.UserModel = this.userDetailsForm.value;

    if (this.userDetailsForm.valid) {
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
  }
}
