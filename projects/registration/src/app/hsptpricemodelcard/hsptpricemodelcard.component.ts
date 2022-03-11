import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hsptpricemodelcard',
  templateUrl: './hsptpricemodelcard.component.html',
  styleUrls: ['./hsptpricemodelcard.component.less']
})
export class HsptpricemodelcardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  priceModel(modelId: number): void {
    this.router.navigate(["registration"]);
  }

}
