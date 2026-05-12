import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodEditComponent } from './period-edit.component';

describe('PeriodEditComponent', () => {
  let component: PeriodEditComponent;
  let fixture: ComponentFixture<PeriodEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodEditComponent]
    });
    fixture = TestBed.createComponent(PeriodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
