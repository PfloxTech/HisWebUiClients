import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidateModel } from '../validaters/validatemodel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastmessageComponent } from '../shared/toastmessage/toastmessage.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  errorsList: Array<string> = new Array<string>();

  constructor(private snakBar: MatSnackBar, public dialog: MatDialog) { }

  validateForm(frmGroup: FormGroup): ValidateModel {
    var validateModel = new ValidateModel();
    validateModel.IsValid = frmGroup.valid;
    this.errorsList = new Array<string>();
    validateModel.Erroos = this.getErrors(frmGroup);
    if (!validateModel.IsValid) {
      //this.snakBar.openFromComponent(ToastmessageComponent, {data: validateModel.Erroos, panelClass: "snackbar", verticalPosition: "top" });
      this.dialog.open(ToastmessageComponent, { data: validateModel.Erroos, maxHeight: '220px', width: '600px', disableClose:true });
    }
    return validateModel;
  }

  getErrors(frmGroup: FormGroup): Array<string> {
    if (!frmGroup.valid) {
      Object.keys(frmGroup.controls).forEach(ctrlKey => {
        var ctrl = frmGroup.controls[ctrlKey];
        if (ctrl instanceof FormGroup) {
          this.getErrors(ctrl as FormGroup)
        }
        var errors: any = ctrl.errors;
        if (errors) {
          Object.keys(errors).forEach(errrorKey => {
            if (this.errorsList.indexOf(errors[errrorKey]) < 0) {
              this.errorsList.push(errors[errrorKey]);
            }
          });
        }
      });

      var error: any = frmGroup.errors;
      if (error) {
        Object.keys(error).forEach(er => {
          var frmEr = error[er];
          this.errorsList.push(frmEr);
        });
      }
    }
    return this.errorsList;
  }
}