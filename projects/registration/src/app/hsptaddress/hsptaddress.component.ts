import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { HsptregisterService } from '../services/hsptregister.service';
import { HsptAddressModel } from '../models/HsptAddressModel';
import { CountryModel } from '../models/CountryModel';
import { StateModel } from '../models/StateModel';

@Component({
  selector: 'app-hsptaddress',
  templateUrl: './hsptaddress.component.html',
  styleUrls: ['./hsptaddress.component.less'],
})
export class HsptaddressComponent implements OnInit {
  countryList: Array<CountryModel> = new Array<CountryModel>();
  stateList: Array<StateModel> = new Array<StateModel>();
  @Input() hsptAddressModel: HsptAddressModel = new HsptAddressModel();

  constructor(
    private router: Router,
    private registerService: HsptregisterService
  ) {}

  ngOnInit(): void {
    this.registerService.getCountry().subscribe((data: any) => {
      this.countryList = data;
    });
  }
}
