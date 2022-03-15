import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HsptregisterService } from '../services/hsptregister.service';
import { BillingModel } from '../models/BillingModel';

@Component({
  selector: 'app-hsptpricemodelcard',
  templateUrl: './hsptpricemodelcard.component.html',
  styleUrls: ['./hsptpricemodelcard.component.less']
})
export class HsptpricemodelcardComponent implements OnInit {

  priceList: Array<BillingModel> = new Array<BillingModel>();
  constructor(private router: Router, private registerService: HsptregisterService) { }

  ngOnInit(): void {
    this.registerService.getBilling().subscribe(data => { this.priceList = data });
  }

  priceModel(modelId: number): void {
    this.router.navigate(["hospital-registration"]);
  }

}
