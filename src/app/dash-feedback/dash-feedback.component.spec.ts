import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFeedbackComponent } from './dash-feedback.component';

describe('DashFeedbackComponent', () => {
  let component: DashFeedbackComponent;
  let fixture: ComponentFixture<DashFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
