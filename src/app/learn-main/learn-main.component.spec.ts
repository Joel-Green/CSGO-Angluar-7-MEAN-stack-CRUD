import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMainComponent } from './learn-main.component';

describe('LearnMainComponent', () => {
  let component: LearnMainComponent;
  let fixture: ComponentFixture<LearnMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
