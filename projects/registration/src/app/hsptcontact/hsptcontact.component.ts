import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hsptcontact',
  templateUrl: './hsptcontact.component.html',
  styleUrls: ['./hsptcontact.component.less']
})
export class HsptcontactComponent implements OnInit {

  methodName: string = "GetFacility";
  constructor() { }

  ngOnInit(): void {
  }

}
