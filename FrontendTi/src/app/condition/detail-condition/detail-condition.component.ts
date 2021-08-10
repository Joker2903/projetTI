import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condition } from 'src/app/model/condition';

@Component({
  selector: 'app-detail-condition',
  templateUrl: './detail-condition.component.html',
  styleUrls: ['./detail-condition.component.css'],
})
export class DetailConditionComponent implements OnInit {
  @Input()
  condition: Condition = new Condition();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToSingleCondition() {
    this.router.navigate([`condition/${this.condition.ConditionID}`]);
  }
}
