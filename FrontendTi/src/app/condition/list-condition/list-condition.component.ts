import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Condition } from 'src/app/model/condition';
import { ConditionsService } from 'src/app/services/conditions.service';

@Component({
  selector: 'app-list-condition',
  templateUrl: './list-condition.component.html',
  styleUrls: ['./list-condition.component.css'],
})
export class ListConditionComponent implements OnInit {
  private subscriptionsCondition: Subscription[] = [];
  public conditions: Condition[] = [];

  constructor(private Conditionservice: ConditionsService) {}

  ngOnInit(): void {
    this.getConditions();
  }

  ngOnDestroy(): void {
    for (let i = this.subscriptionsCondition.length - 1; i >= 0; i--) {
      const subscription = this.subscriptionsCondition[i];
      subscription && subscription.unsubscribe();
      this.subscriptionsCondition.pop();
    }
  }

  getConditions() {
    const sub = this.Conditionservice.query().subscribe((conditionDto) => {
      this.conditions = conditionDto.map((conditionDTO) =>
        new Condition().fromConditionDTO(conditionDTO)
      );
      console.log(this.conditions);
    });
    this.subscriptionsCondition.push(sub);
  }
}
