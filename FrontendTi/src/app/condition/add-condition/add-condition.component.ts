import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Condition } from 'src/app/model/condition';

@Component({
  selector: 'app-add-condition',
  templateUrl: './add-condition.component.html',
  styleUrls: ['./add-condition.component.css'],
})
export class AddConditionComponent implements OnInit {
  addConditionForm: FormGroup = this.initForm();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): FormGroup {
    this.addConditionForm = this.formBuilder.group({
      numberOfClient: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      expiration: [''],
      giftId: [''],
    });
    return this.addConditionForm;
  }
  onSubmit() {
    console.log(this.addConditionForm.controls);
    const condition = new Condition();
    condition.numberOfClient =
      +this.addConditionForm.get('numberOfClient')?.value;
    condition.startDate = this.addConditionForm.get('startDate')?.value;
    condition.endDate = this.addConditionForm.get('endDate')?.value;
    condition.expiration = +this.addConditionForm.get('expiration')?.value;
    condition.giftId = +this.addConditionForm.get('giftId')?.value;
    console.log(condition);
  }
}
