import { Component, OnInit,Inject } from '@angular/core';
import { tosterMsgModel } from '../../models/toatser/tosterMsgModel';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-snackbarmsg',
  templateUrl: './snackbarmsg.component.html',
  styleUrls: ['./snackbarmsg.component.less']
})
export class SnackbarmsgComponent implements OnInit {

  msgModel!:tosterMsgModel;
  isCallBack:boolean=false;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public modelData: tosterMsgModel, private toasterService:ToasterService) { }

  ngOnInit(): void {
    this.msgModel=this.modelData;
    this.isCallBack=(this.msgModel.CallBack!=null || this.msgModel.CallBack!=undefined) &&
                     typeof(this.msgModel.CallBack)=="function";
  }

  public close():void{
    this.toasterService.close();
  }

}
