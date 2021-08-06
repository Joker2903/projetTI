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
  constructor(private formBuilder: FormBuilder) {}

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
    condition.NumberOfClient =
      +this.addConditionForm.get('numberOfClient')?.value;
    condition.StartDate = this.addConditionForm.get('startDate')?.value;
    condition.EndDate = this.addConditionForm.get('endDate')?.value;
    condition.Expiration = +this.addConditionForm.get('expiration')?.value;
    condition.GiftId = +this.addConditionForm.get('giftId')?.value;
    console.log(condition);
  }
}
