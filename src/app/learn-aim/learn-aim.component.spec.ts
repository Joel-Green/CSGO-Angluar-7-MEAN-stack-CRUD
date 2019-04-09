import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAimComponent } from './learn-aim.component';

describe('LearnAimComponent', () => {
  let component: LearnAimComponent;
  let fixture: ComponentFixture<LearnAimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnAimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnAimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
