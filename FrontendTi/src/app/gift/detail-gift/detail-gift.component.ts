import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Gift } from 'src/app/model/gift';

@Component({
  selector: 'app-detail-gift',
  templateUrl: './detail-gift.component.html',
  styleUrls: ['./detail-gift.component.css'],
})
export class DetailGiftComponent implements OnInit {
  @Input()
  gift: Gift = new Gift();
  @Output()
  deletedGift: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  emitDeletedGift(event: Event) {
    event.stopPropagation();
    this.deletedGift.next(this.gift.giftID);
  }

  navigateToSingleGift() {
    this.router.navigate([`gift/${this.gift.giftID}`]);
  }
}
