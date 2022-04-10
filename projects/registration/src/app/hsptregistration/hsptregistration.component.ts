import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HsptModel } from '../models/hsptmodel';
import { HsptregisterService } from '../services/hsptregister.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../validaters/CustomValidator';
import { ValidationService } from '../validaters/validation.service';
import { ToastmessageComponent } from '../shared/toastmessage/toastmessage.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hsptregistration',
  templateUrl: './hsptregistration.component.html',
  styleUrls: ['./hsptregistration.component.less']
})
export class HsptregistrationComponent implements OnInit {
  hospitalModel: HsptModel = new HsptModel();
  priceModelId: string = '';

  constructor(private router: Router, private route: ActivatedRoute,
    private hsptRgisterService: HsptregisterService, private fb: FormBuilder,
    private validationService: ValidationService, private snakBar: MatSnackBar) {

  }

  hsptRegFrm = this.fb.group({
    generalInfo: this.fb.group(
      { name: ['', CustomValidator.Required] })
  });

  ngOnInit(): void {
  }

  next(): void {

    var frmValidation = this.validationService.validateForm(this.hsptRegFrm);
    if (!frmValidation.IsValid) {
      this.snakBar.openFromComponent(ToastmessageComponent, { duration: 5 * 1000, data: frmValidation.Erroos, panelClass: "snackbar", verticalPosition: "top" });
      return;
    }
    this.hsptRgisterService.setRegisterModel(this.hospitalModel);
    this.priceModelId = this.route.snapshot.paramMap.get("priceModelId")!;
    this.hospitalModel.billingFk = parseInt(this.priceModelId);
    this.router.navigate(["hospital-user"]);
  }

  back(): void {
    this.router.navigate([""]);
  }

}
