import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-toastmessage',
  templateUrl: './toastmessage.component.html',
  styleUrls: ['./toastmessage.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastmessageComponent implements OnInit {

  constructor(public dialogRef: MatSnackBarRef<ToastmessageComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: Array<string>) { }

  errorsList: Array<string> = new Array<string>();
  ngOnInit(): void {
    this.errorsList = this.data;
  }

  close() {
    this.dialogRef.dismiss();
  }

}
