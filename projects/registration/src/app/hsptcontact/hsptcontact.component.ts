import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HsptContactModel } from '../models/HsptContactModel';
@Component({
  selector: 'app-hsptcontact',
  templateUrl: './hsptcontact.component.html',
  styleUrls: ['./hsptcontact.component.less'],
})
export class HsptcontactComponent implements OnInit {
  @Input() hsptContactModel: HsptContactModel = new HsptContactModel();

  constructor() {}

  ngOnInit(): void {}
}
