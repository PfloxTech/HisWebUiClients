import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  getErrors(frmGroup: FormGroup): Array<string> {
    var errorsList: Array<string> = new Array<string>();
    if (!frmGroup.valid) {
      Object.keys(frmGroup.controls).forEach(ctrlKey => {
        var ctrl = frmGroup.controls[ctrlKey];
        var errors: any = ctrl.errors;
        if (errors) {
          Object.keys(errors).forEach(errrorKey => {
            if (errorsList.indexOf(errors[errrorKey]) < 0) {
              errorsList.push(errors[errrorKey]);
            }
          });
        }
      });

      var error: any = frmGroup.errors;
      if (error) {
        Object.keys(error).forEach(er => {
          var frmEr = error[er];
          errorsList.push(frmEr);
        });
      }
    }
    return errorsList;
  }
}