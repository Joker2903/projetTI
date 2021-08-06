import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gift } from 'src/app/model/gift';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css'],
})
export class AddGiftComponent implements OnInit {
  addGiftForm: FormGroup = this.initForm();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): FormGroup {
    this.addGiftForm = this.formBuilder.group({
      description: ['', Validators.required],
    });
    return this.addGiftForm;
  }
  onSubmit() {
    console.log(this.addGiftForm.controls);
    const gift = new Gift();
    gift.Description = this.addGiftForm.get('description')?.value;
    console.log(gift);
  }
}
