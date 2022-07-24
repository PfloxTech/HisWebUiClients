import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../../models/user/userinfomodel';
import { AppointmentService } from '../../services/appointment.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.less']
})
export class BookAppointmentComponent implements OnInit {

  constructor(private appointmentService:AppointmentService,private toasterService:ToasterService) { }

  ngOnInit(): void {
  }

  scheduleAppointment():void{
    var userInfo=new UserInfoModel();
    this.appointmentService.schedule(userInfo).subscribe(data=>{
      var msgArray= new Array<string>();
      if(data.trackingId==null|| data.trackingId==undefined || data.trackingId.trim().length==0)
      {
        msgArray.push(`Something went wrong, Please try after sometime`);
        this.toasterService.error("Error",msgArray);
        return;
      }
      msgArray.push(`Appointment scheduled successfuly and traking id is${data.trackingId}`);
      this.toasterService.success("Successful",msgArray);
   });
  }

}
