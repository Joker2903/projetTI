import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConditionsComponent } from './client-conditions.component';

describe('ClientConditionsComponent', () => {
  let component: ClientConditionsComponent;
  let fixture: ComponentFixture<ClientConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
