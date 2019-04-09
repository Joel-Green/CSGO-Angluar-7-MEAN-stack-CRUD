import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnUtilityComponent } from './learn-utility.component';

describe('LearnUtilityComponent', () => {
  let component: LearnUtilityComponent;
  let fixture: ComponentFixture<LearnUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
