import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FetaureModel } from '../models/FeatureModel';
@Component({
  selector: 'app-hsptspeciality',
  templateUrl: './hsptspeciality.component.html',
  styleUrls: ['./hsptspeciality.component.less']
})
export class HsptspecialityComponent implements OnInit {

  @Input()
  HsptSpecialities: Array<FetaureModel> = new Array<FetaureModel>();
  constructor() { }
  methodName = "GetSpeciality";
  ngOnInit(): void {

  }

}
