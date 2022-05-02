import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HsptModel } from '../models/hsptmodel';
import { HsptregisterService } from '../services/hsptregister.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../validaters/CustomValidator';
import { ValidationService } from '../validaters/validation.service';

@Component({
  selector: 'app-hsptregistration',
  templateUrl: './hsptregistration.component.html',
  styleUrls: ['./hsptregistration.component.less'],
})
export class HsptregistrationComponent implements OnInit {
  hospitalModel: HsptModel = new HsptModel();
  priceModelId: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hsptRgisterService: HsptregisterService,
    private fb: FormBuilder,
    private validationService: ValidationService
  ) {}

  hsptRegFrm = this.fb.group({
    generalInfo: this.fb.group({
      name: [null, CustomValidator.Required],
      registerDate: [null, CustomValidator.DateLessThanToday],
    }),
  });

  ngOnInit(): void {}

  next(): void {
    var frmValidation = this.validationService.validateForm(this.hsptRegFrm);
    if (!frmValidation.IsValid) {
      return;
    }
    //assign from form control
    var generalInfo = this.hsptRegFrm.controls['generalInfo'].value;
    this.hospitalModel.name = generalInfo.name;
    this.hospitalModel.registerDate = generalInfo.registerDate;

    this.hsptRgisterService.setRegisterModel(this.hospitalModel);
    this.priceModelId = this.route.snapshot.paramMap.get('priceModelId')!;
    this.hospitalModel.billingFk = parseInt(this.priceModelId);
    this.router.navigate(['hospital-user']);
  }

  back(): void {
    this.router.navigate(['']);
  }
}
