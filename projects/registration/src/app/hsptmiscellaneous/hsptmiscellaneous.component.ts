import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HsptMiscellaneousModel } from '../models/HsptMiscellaneousModel';

@Component({
  selector: 'app-hsptmiscellaneous',
  templateUrl: './hsptmiscellaneous.component.html',
  styleUrls: ['./hsptmiscellaneous.component.less']
})
export class HsptmiscellaneousComponent implements OnInit {

  @Input()
  hsptMiscellaneousModel: HsptMiscellaneousModel = new HsptMiscellaneousModel();

  constructor() { }

  ngOnInit(): void {
  }

}
