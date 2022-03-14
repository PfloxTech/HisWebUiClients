import { Component, OnInit, Input } from '@angular/core';
import { FeatureService } from '../../services/feature.service';
import { FetaureModel } from '../../models/FeatureModel';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.less']
})
export class ChecklistComponent implements OnInit {

  checklist: Array<FetaureModel> = new Array<FetaureModel>();
  @Input() method = '';
  @Input() featureParentList: Array<FetaureModel> = new Array<FetaureModel>();

  constructor(private featureService: FeatureService) { }

  //featureList: any;
  ngOnInit(): void {
    this.featureService.getFeature(this.method)
      .subscribe((data: any) => {
        this.checklist = data;
        this.checklist.forEach(item => {
          var feature = new FetaureModel();
          feature.pk = item.pk;
          feature.displayText = item.displayText;
          feature.isSelected=false;
          this.featureParentList.push(feature);
        });
      });
  }

}
