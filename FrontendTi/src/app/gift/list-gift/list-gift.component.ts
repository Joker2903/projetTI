import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gift } from 'src/app/model/gift';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-list-gift',
  templateUrl: './list-gift.component.html',
  styleUrls: ['./list-gift.component.css'],
})
export class ListGiftComponent implements OnInit {
  private subscriptionsGifts: Subscription[] = [];
  public gifts: Gift[] = [];

  constructor(private giftServices: GiftService) {}

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

  getGifts() {
    const sub = this.giftServices.query().subscribe((giftDTO) => {
      this.gifts = giftDTO.map((giftDTO) => new Gift().fromGiftDTO(giftDTO));
      console.log(this.gifts);
    });
    this.subscriptionsGifts.push(sub);
  }

  deleteQuestion(idEmitted: number) {
    const sub = this.giftServices.delete(idEmitted).subscribe(() => {
      this.gifts = this.gifts.filter((gift) => gift.GiftID !== idEmitted);
    });
    console.log(this.gifts);

    this.subscriptionsGifts.push(sub);
  }
}
