import { Component, OnInit } from '@angular/core';
import { SpecialityService } from '../services/speciality.service';

@Component({
  selector: 'app-hsptspeciality',
  templateUrl: './hsptspeciality.component.html',
  styleUrls: ['./hsptspeciality.component.less']
})
export class HsptspecialityComponent implements OnInit {

  constructor(private specialityService: SpecialityService) { }
  specialities: any;
  methodName = "GetSpeciality";
  ngOnInit(): void {
    
  }

}
