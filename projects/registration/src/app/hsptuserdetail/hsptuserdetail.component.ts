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
    var priceModelId = this.hsptModel.BillingFk;
    this.router.navigate(["hospital-registration", priceModelId]);
  }

  next(): void {
    this.hsptModel = this.hsptRgisterService.getRegisterModel();
    this.hsptModel.HsptUsers = new Array<HsptUserModel>();
    this.hsptModel.HsptUsers.push(this.UserModel);
    this.hsptModel.HsptContacts = new Array<HsptContactModel>();
    this.hsptModel.HsptContacts.push(this.hsptModel.HsptContact);
    this.hsptModel.HsptMiscellaneousList = new Array<HsptMiscellaneousModel>();
    this.hsptModel.HsptMiscellaneousList.push(this.hsptModel.HsptMiscellaneous);
    this.hsptRgisterService.register(this.hsptModel).subscribe(data => {
      var hospitalPk = data;
      this.router.navigate(["hospital-welcome", hospitalPk]);
    });
  }
}
