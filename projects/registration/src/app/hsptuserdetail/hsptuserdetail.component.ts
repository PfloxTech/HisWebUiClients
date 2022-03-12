import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HsptUserModel } from '../models/hsptUserModel';
import { HsptregisterService } from '../services/hsptregister.service';
import { HsptModel } from '../models/hsptmodel';

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
  }

  back(): void {
    this.router.navigate(["hospital-registration"]);
  }

  next(): void {
    this.hsptModel = this.hsptRgisterService.getRegisterModel();
    this.hsptModel.HsptUser = this.UserModel;
    this.hsptRgisterService.register(this.hsptModel);
    this.router.navigate(["hospital-welcome"]);
  }
}
