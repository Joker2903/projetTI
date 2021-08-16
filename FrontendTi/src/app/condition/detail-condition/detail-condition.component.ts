import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Condition } from 'src/app/model/condition';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-detail-condition',
  templateUrl: './detail-condition.component.html',
  styleUrls: ['./detail-condition.component.css'],
})
export class DetailConditionComponent implements OnInit, OnDestroy {
  @Input()
  condition: Condition = new Condition();
  subscription: Subscription = null
  giftContent: string = ""

  constructor(private router: Router, private giftService: GiftService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.getGift()
  }
  getGift() {
    this.subscription = this.giftService.get(this.condition.conditionID)
      .subscribe(gift => this.giftContent = gift.description)
  }
}
