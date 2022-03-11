import { Component, OnInit, Input } from '@angular/core';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.less']
})
export class ChecklistComponent implements OnInit {

  checklist: any = [];
  @Input() method = '';

  constructor(private featureService: FeatureService) { }

  featureList: any;
  ngOnInit(): void {
    this.featureList = this.featureService.getFeature(this.method)
      .subscribe((data: any) => {
        this.featureList = data;
      });
  }

}
