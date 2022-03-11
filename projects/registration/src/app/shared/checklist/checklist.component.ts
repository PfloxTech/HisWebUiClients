import { Component, OnInit, Input } from '@angular/core';
import { SpecialityService } from '../../services/speciality.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.less']
})
export class ChecklistComponent implements OnInit {

  checklist: any = [];
  @Input() method = '';

  constructor(private specialityService: SpecialityService) { }

  featureList: any;
  ngOnInit(): void {
    this.featureList = this.specialityService.getFeature(this.method)
      .subscribe((data: any) => {
        this.featureList = data;
      });
  }

}
