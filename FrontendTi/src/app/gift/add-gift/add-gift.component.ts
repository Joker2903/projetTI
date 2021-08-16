import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Condition } from 'src/app/model/condition';
import { Gift } from 'src/app/model/gift';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css'],
})
export class AddGiftComponent implements OnInit, OnDestroy {
  addGiftForm: FormGroup = this.initForm();
  @Output()
  emitAddedGift: EventEmitter<Gift> = new EventEmitter<Gift>()
  subscription: Subscription = null

  constructor(private formBuilder: FormBuilder, private giftService: GiftService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

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
    gift.description = this.addGiftForm.get('description')?.value;
    console.log(gift);
    this.subscription = this.giftService.post(gift.toGiftDTO())
      .subscribe(gift => this.emitAddedGift.next(new Gift().fromGiftDTO(gift)))
  }
}
