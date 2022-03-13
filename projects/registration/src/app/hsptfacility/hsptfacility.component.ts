import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FetaureModel } from '../models/FeatureModel';

@Component({
  selector: 'app-hsptfacility',
  templateUrl: './hsptfacility.component.html',
  styleUrls: ['./hsptfacility.component.less']
})
export class HsptfacilityComponent implements OnInit {

  methodName = "GetFacility"
  @Input()
  HsptFacilities: Array<FetaureModel> = new Array<FetaureModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
