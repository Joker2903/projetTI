import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConditionComponent } from './detail-condition.component';

describe('DetailConditionComponent', () => {
  let component: DetailConditionComponent;
  let fixture: ComponentFixture<DetailConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
