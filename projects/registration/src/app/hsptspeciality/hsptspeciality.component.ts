import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FetaureModel } from '../models/FeatureModel';
import { PostFeatureModel } from '../models/PostFeatureModel';
@Component({
  selector: 'app-hsptspeciality',
  templateUrl: './hsptspeciality.component.html',
  styleUrls: ['./hsptspeciality.component.less']
})
export class HsptspecialityComponent implements OnInit {

  @Input()
  HsptSpecialities: Array<PostFeatureModel> = new Array<PostFeatureModel>();
  constructor() { }
  methodName = "GetSpeciality";
  ngOnInit(): void {

  }

}
