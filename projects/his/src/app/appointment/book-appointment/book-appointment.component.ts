import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../../models/user/userinfomodel';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.less']
})
export class BookAppointmentComponent implements OnInit {

  constructor(private appointmentService:AppointmentService) { }

  ngOnInit(): void {
  }

  scheduleAppointment():void{
    var userInfo=new UserInfoModel();
    this.appointmentService.schedule(userInfo).subscribe(data=>{
      alert(data);
    });
  }

}
