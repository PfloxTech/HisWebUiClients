import { Injectable } from '@angular/core';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { SnackbarmsgComponent } from '../message/snackbarmsg/snackbarmsg.component';
import { tosterMsgModel } from '../models/toatser/tosterMsgModel';
import { toasterType } from '../models/toatser/toasterType';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  durationInSeconds:number=500;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  msgModel!:tosterMsgModel;
  constructor(private _snackBar: MatSnackBar) { }

  public success(title:string, messages:Array<string>):void{
    this.msgModel=new tosterMsgModel();
    this.msgModel.Type=toasterType.Success;
    this.msgModel.Title=title;
    this.msgModel.Messages=messages;
    this.msgModel.ClassName=this.getClassName(toasterType.Success);
    this.openSnackBar(this.msgModel)
  }

  public error(title:string, messages:Array<string>):void{
    this.msgModel=new tosterMsgModel();
    this.msgModel.Type=toasterType.Error;
    this.msgModel.Title=title;
    this.msgModel.Messages=messages;
    this.msgModel.ClassName=this.getClassName(toasterType.Error);
    this.openSnackBar(this.msgModel)
  }

  private getClassName(type:toasterType):string{
    switch(type){
      case toasterType.Error:
      return "bg-danger";
      case toasterType.Warning:
      return "bg-warning";
      case toasterType.Info:
      return "bg-info";
      default:
        return "bg-success"
    }
  }

  private openSnackBar(msgModel:tosterMsgModel):void{
    this._snackBar.openFromComponent(SnackbarmsgComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data:msgModel,
      panelClass: [this.getClassName(msgModel.Type)]
    });
  }
}
