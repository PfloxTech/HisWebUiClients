import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FetaureModel } from '../models/FeatureModel';
import { HsptAddressModel } from '../models/HsptAddressModel';
import { HsptregisterService } from '../services/hsptregister.service';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { HsptModel } from '../models/hsptmodel';

@Component({
  selector: 'app-hsptaddress',
  templateUrl: './hsptaddress.component.html',
  styleUrls: ['./hsptaddress.component.less'],
})
export class HsptaddressComponent implements OnInit {
  countryList: Array<FetaureModel> = new Array<FetaureModel>();
  stateList: Array<FetaureModel> = new Array<FetaureModel>();
  districtList: Array<FetaureModel> = new Array<FetaureModel>();
  // @Input() formGroupName: string = '';
  // form: FormGroup = null!;
  @Input()
  //hsptAddressModel: HsptAddressModel = new HsptAddressModel();
  hsptModel: HsptModel = new HsptModel();

  constructor(
    private registerService: HsptregisterService //,private rootFormGroup: FormGroupDirective
  ) {}

  ngOnInit(): void {
    //this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    this.getCountry();
    this.getStates(1);
  }

  getCountry(): void {
    this.registerService.getCountry().subscribe((data: any) => {
      this.countryList = data;
    });
  }

  getStates(countryId: number) {
    this.registerService.getState(countryId).subscribe((data: any) => {
      this.stateList = data;
    });
  }

  getDistrict(stateId: string) {
    var id = parseInt(stateId);
    this.registerService.getDistrict(id).subscribe((data: any) => {
      this.districtList = data;
    });
  }
}
