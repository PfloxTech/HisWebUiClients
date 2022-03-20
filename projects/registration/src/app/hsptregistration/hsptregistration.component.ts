import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HsptModel } from '../models/hsptmodel';
import { HsptregisterService } from '../services/hsptregister.service';

@Component({
  selector: 'app-hsptregistration',
  templateUrl: './hsptregistration.component.html',
  styleUrls: ['./hsptregistration.component.less']
})
export class HsptregistrationComponent implements OnInit {
  hospitalModel: HsptModel = new HsptModel();
  priceModelId: string = '';
  constructor(private router: Router, private route: ActivatedRoute, private hsptRgisterService: HsptregisterService) {

  }

  ngOnInit(): void {
  }

  next(): void {
    this.hsptRgisterService.setRegisterModel(this.hospitalModel);
    this.priceModelId = this.route.snapshot.paramMap.get("priceModelId")!;
    this.hospitalModel.BillingFk = parseInt(this.priceModelId);
    this.router.navigate(["hospital-user"]);
  }

  back(): void {
    this.router.navigate([""]);
  }

}
