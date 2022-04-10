import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidateModel } from '../validaters/validatemodel';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  errorsList: Array<string> = new Array<string>();

  constructor() { }

  validateForm(frmGroup: FormGroup): ValidateModel {
    var validateModel = new ValidateModel();
    validateModel.IsValid = frmGroup.valid;
    this.errorsList = new Array<string>();
    validateModel.Erroos = this.getErrors(frmGroup);
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