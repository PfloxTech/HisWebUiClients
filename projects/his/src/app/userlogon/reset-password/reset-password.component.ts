import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.less']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ResetPasswordComponent>) { }

  ngOnInit(): void {
  }

  close():void{
    this.dialogRef.close();
  }

}
