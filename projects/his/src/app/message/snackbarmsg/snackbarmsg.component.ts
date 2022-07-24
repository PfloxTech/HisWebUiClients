import { Component, OnInit,Inject } from '@angular/core';
import { tosterMsgModel } from '../../models/toatser/tosterMsgModel';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbarmsg',
  templateUrl: './snackbarmsg.component.html',
  styleUrls: ['./snackbarmsg.component.less']
})
export class SnackbarmsgComponent implements OnInit {

  msgModel!:tosterMsgModel;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public modelData: tosterMsgModel) { }

  ngOnInit(): void {
    this.msgModel=this.modelData;
  }

}
