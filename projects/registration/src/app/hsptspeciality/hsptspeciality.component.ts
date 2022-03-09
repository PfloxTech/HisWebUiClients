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

  ngOnInit(): void {
    this.specialityService.getSpeciality().subscribe((data: any) => {
      this.specialities = data;
    });
  }

}
