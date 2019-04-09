import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashUtilityComponent } from './dash-utility.component';

describe('DashUtilityComponent', () => {
  let component: DashUtilityComponent;
  let fixture: ComponentFixture<DashUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
