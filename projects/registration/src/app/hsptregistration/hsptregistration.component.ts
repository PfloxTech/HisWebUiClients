import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HsptModel } from '../models/hsptmodel';
import { HsptregisterService } from '../services/hsptregister.service';

@Component({
  selector: 'app-hsptregistration',
  templateUrl: './hsptregistration.component.html',
  styleUrls: ['./hsptregistration.component.less']
})
export class HsptregistrationComponent implements OnInit {
  hospitalModel: HsptModel = new HsptModel();

  constructor(private router: Router, private hsptRgisterService: HsptregisterService) {

  }

  ngOnInit(): void {
  }

  next(): void {
    this.hsptRgisterService.setRegisterModel(this.hospitalModel);
    this.router.navigate(["hospital-user"]);
  }

  back(): void {
    this.router.navigate([""]);
  }

}
