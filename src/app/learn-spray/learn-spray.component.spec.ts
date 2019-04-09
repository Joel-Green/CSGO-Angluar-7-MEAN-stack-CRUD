import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSprayComponent } from './learn-spray.component';

describe('LearnSprayComponent', () => {
  let component: LearnSprayComponent;
  let fixture: ComponentFixture<LearnSprayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnSprayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnSprayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
