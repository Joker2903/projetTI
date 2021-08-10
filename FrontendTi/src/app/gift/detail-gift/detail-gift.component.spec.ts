import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGiftComponent } from './detail-gift.component';

describe('DetailGiftComponent', () => {
  let component: DetailGiftComponent;
  let fixture: ComponentFixture<DetailGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
