import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { HsptModel } from '../models/hsptmodel';

@Component({
  selector: 'app-hsptgeneralinfo',
  templateUrl: './hsptgeneralinfo.component.html',
  styleUrls: ['./hsptgeneralinfo.component.less']
})
export class HsptgeneralinfoComponent implements OnInit {
  @Input() formGroupName: string='';
  form: FormGroup=null!;
  @Input()
  hsptModel: HsptModel = new HsptModel();

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

}
