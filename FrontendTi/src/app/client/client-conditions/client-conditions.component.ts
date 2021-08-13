import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Condition } from 'src/app/model/condition';
import { ConditionGift } from 'src/app/model/conditionGift';
import { ClientService } from 'src/app/services/client.service';
import { ConditionsService } from 'src/app/services/conditions.service';

@Component({
  selector: 'app-client-conditions',
  templateUrl: './client-conditions.component.html',
  styleUrls: ['./client-conditions.component.css']
})
export class ClientConditionsComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  @Input()
  public clientID: number;
  public sponsoredCount: number;
  public conditionsGifts: ConditionGift[] = [];

  constructor(private conditionService: ConditionsService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.getConditionsGifts();
    this.getSponsoredCount();
  }

  ngOnDestroy(): void {
    for (let i = this.subscriptions.length - 1; i >= 0; i--) {
      const subscription = this.subscriptions[i];
      subscription && subscription.unsubscribe();
      this.subscriptions.pop();
    }
  }

  getConditionsGifts() {
    const sub = this.conditionService.queryGiftCondition().subscribe((conditionGiftDto) => {
      this.conditionsGifts = conditionGiftDto.map((conditionGiftDTO) =>
        new ConditionGift().fromConditionGiftDTO(conditionGiftDTO)
      );

      console.log(this.conditionsGifts);
    });
    this.subscriptions.push(sub);
  }
  getSponsoredCount() {
    console.log("SponsoredCount : " + this.clientID);

    const sub = this.clientService
      .getSponsoredClientByID(this.clientID)
      .subscribe(sponsoredCount => this.sponsoredCount = sponsoredCount)
    this.subscriptions.push(sub)
  }

}
