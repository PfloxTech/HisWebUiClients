import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FetaureModel } from '../models/FeatureModel';

@Component({
  selector: 'app-hsptinsurance',
  templateUrl: './hsptinsurance.component.html',
  styleUrls: ['./hsptinsurance.component.less']
})
export class HsptinsuranceComponent implements OnInit {
  methodName = "GetInsurance";
  @Input()
  HsptInsurances: Array<FetaureModel> = new Array<FetaureModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
