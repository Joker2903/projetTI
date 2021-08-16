import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Condition } from 'src/app/model/condition';
import { Gift } from 'src/app/model/gift';
import { ConditionsService } from 'src/app/services/conditions.service';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-add-condition',
  templateUrl: './add-condition.component.html',
  styleUrls: ['./add-condition.component.css'],
})
export class AddConditionComponent implements OnInit, OnDestroy {
  addConditionForm: FormGroup = this.initForm();
  gifts: Gift[] = [];
  private subscriptionPostGift: Subscription = new Subscription();
  private subscriptionsQueryGifts: Subscription[] = [];
  @Output()
  emitAddedCondition: EventEmitter<Condition> = new EventEmitter<Condition>();
  constructor(
    private formBuilder: FormBuilder,
    private conditionService: ConditionsService,
    private giftService: GiftService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getGifts();
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
  getGifts() {
    const sub = this.giftService.query().subscribe((GiftDto) => {
      this.gifts = GiftDto.map((GiftDto) => new Gift().fromGiftDTO(GiftDto));
      console.log(this.gifts);
    });
    this.subscriptionsQueryGifts.push(sub);
  }
  ngOnDestroy(): void {
    for (let i = this.subscriptionsQueryGifts.length - 1; i >= 0; i--) {
      const subscription = this.subscriptionsQueryGifts[i];
      subscription && subscription.unsubscribe();
      this.subscriptionsQueryGifts.pop();
    }
    this.subscriptionPostGift.unsubscribe();
  }

  onSubmit() {
    console.log(this.addConditionForm.controls);
    const condition = new Condition();
    condition.numberOfClient =
      +this.addConditionForm.get('numberOfClient')?.value;
    condition.startDate = this.addConditionForm.get('startDate')?.value;
    condition.endDate = this.addConditionForm.get('endDate')?.value;
    condition.expiration = +this.addConditionForm.get('expiration')?.value;
    condition.giftId = +this.addConditionForm.get('giftId')?.value;
    console.log(condition);
    this.conditionService.post(condition.toConditionDTO()).subscribe();
  }
}
