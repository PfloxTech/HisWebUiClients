import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HsptModel } from '../models/hsptmodel';

@Component({
  selector: 'app-hsptgeneralinfo',
  templateUrl: './hsptgeneralinfo.component.html',
  styleUrls: ['./hsptgeneralinfo.component.less']
})
export class HsptgeneralinfoComponent implements OnInit {

  @Input()
  hsptModel: HsptModel = new HsptModel();

  constructor() { }

  ngOnInit(): void {

  }

}