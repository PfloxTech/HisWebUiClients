import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HsptUserModel } from '../models/hsptUserModel';
import { HsptregisterService } from '../services/hsptregister.service';
import { HsptModel } from '../models/hsptmodel';
import { HsptContactModel } from '../models/hsptcontactmodel';
import { HsptMiscellaneousModel } from '../models/HsptMiscellaneousModel';

@Component({
  selector: 'app-hsptuserdetail',
  templateUrl: './hsptuserdetail.component.html',
  styleUrls: ['./hsptuserdetail.component.less']
})
export class HsptuserdetailComponent implements OnInit {

  hsptModel: HsptModel = new HsptModel();
  UserModel: HsptUserModel = new HsptUserModel();

  constructor(private router: Router, private hsptRgisterService: HsptregisterService) { }

  ngOnInit(): void {
    this.hsptModel = this.hsptRgisterService.getRegisterModel();
  }

  back(): void {
    var priceModelId = this.hsptModel.billingFk;
    this.router.navigate(["hospital-registration", priceModelId]);
  }

  next(): void {
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
