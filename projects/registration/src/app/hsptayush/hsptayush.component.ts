import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FetaureModel } from '../models/FeatureModel';

@Component({
  selector: 'app-hsptayush',
  templateUrl: './hsptayush.component.html',
  styleUrls: ['./hsptayush.component.less']
})
export class HsptayushComponent implements OnInit {
  methodName = "GetAyush";
  @Input()
  hsptAyushModel: Array<FetaureModel> = new Array<FetaureModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
