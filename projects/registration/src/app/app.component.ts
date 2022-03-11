import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  hideRegistration: boolean = true;
  title = 'Hospital Information System';

  constructor() { }

  priceModel(modelId: number): void {
    this.hideRegistration = false;
  }

}
