import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMapsComponent } from './learn-maps.component';

describe('LearnMapsComponent', () => {
  let component: LearnMapsComponent;
  let fixture: ComponentFixture<LearnMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
