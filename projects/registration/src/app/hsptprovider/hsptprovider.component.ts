import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hsptprovider',
  templateUrl: './hsptprovider.component.html',
  styleUrls: ['./hsptprovider.component.less']
})
export class HsptproviderComponent implements OnInit {
  methodName = "GetProvider";
  constructor() { }

  ngOnInit(): void {
  }

}
