import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HsptModel } from '../models/hsptmodel';
import { HsptregisterService } from '../services/hsptregister.service';

@Component({
  selector: 'app-hsptwelcome',
  templateUrl: './hsptwelcome.component.html',
  styleUrls: ['./hsptwelcome.component.less']
})
export class HsptwelcomeComponent implements OnInit {
  hsptModel: HsptModel = new HsptModel();
  constructor(private route: ActivatedRoute, private registerService: HsptregisterService) { }

  ngOnInit(): void {
    this.getHospital();
  }

  getHospital(): void {
    var hospitalPk = parseInt(this.route.snapshot.paramMap.get("hospitalPk")!);
    this.registerService.getHospital(hospitalPk).subscribe(data => {
      this.hsptModel = data;
    });
  }

}
