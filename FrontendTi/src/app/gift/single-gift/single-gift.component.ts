import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Gift } from 'src/app/model/gift';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-single-gift',
  templateUrl: './single-gift.component.html',
  styleUrls: ['./single-gift.component.css'],
})
export class SingleGiftComponent implements OnInit {
  private subscriptionsGifts: Subscription[] = [];
  gift: Gift = new Gift();
  updateGiftForm: FormGroup = this.initForm();
  giftID = +this.route.snapshot.params['id'];
  gifts: Gift[] = [];

  constructor(
    private giftService: GiftService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getGifts();
  }

  ngOnDestroy(): void {
    for (let i = this.subscriptionsGifts.length - 1; i >= 0; i--) {
      const subscription = this.subscriptionsGifts[i];
      subscription && subscription.unsubscribe();
      this.subscriptionsGifts.pop();
    }
  }

  initForm(): FormGroup {
    return (this.updateGiftForm = this.formBuilder.group({
      Description: [this.gift.description, Validators.required],
    }));
  }

  getSingleGift() {
    const sub = this.giftService.get(this.giftID).subscribe((gift) => {
      this.gift = new Gift().fromGiftDTO(gift);
      this.initForm();
    });
    this.subscriptionsGifts.push(sub);
  }

  getGifts() {
    const sub = this.giftService.query().subscribe((giftsDTO) => {
      this.gifts = giftsDTO.map((giftDTO) => new Gift().fromGiftDTO(giftDTO));
      console.log(this.gifts);
      this.getSingleGift();
    });
    this.subscriptionsGifts.push(sub);
  }

  onSubmit() {
    console.log(this.updateGiftForm.controls);
    this.gift.description = this.updateGiftForm.get('Description').value;
    console.log(this.gift);
    const sub = this.giftService
      .put(this.gift.toGiftDTO())
      .subscribe((giftDTO) => console.log(giftDTO));
    this.subscriptionsGifts.push(sub);
  }
}
