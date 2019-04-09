import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnWeaponsComponent } from './learn-weapons.component';

describe('LearnWeaponsComponent', () => {
  let component: LearnWeaponsComponent;
  let fixture: ComponentFixture<LearnWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
