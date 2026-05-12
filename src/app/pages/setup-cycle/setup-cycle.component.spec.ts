import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCycleComponent } from './setup-cycle.component';

describe('SetupCycleComponent', () => {
  let component: SetupCycleComponent;
  let fixture: ComponentFixture<SetupCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetupCycleComponent]
    });
    fixture = TestBed.createComponent(SetupCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
