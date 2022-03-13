import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FetaureModel } from '../models/FeatureModel';

@Component({
  selector: 'app-hsptprovider',
  templateUrl: './hsptprovider.component.html',
  styleUrls: ['./hsptprovider.component.less']
})
export class HsptproviderComponent implements OnInit {
  methodName = "GetProvider";
  constructor() { }

  @Input()
  HsptProvider: Array<FetaureModel> = new Array<FetaureModel>();

  ngOnInit(): void {
  }

}
