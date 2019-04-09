import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashWeaponComponent } from './dash-weapon.component';

describe('DashWeaponComponent', () => {
  let component: DashWeaponComponent;
  let fixture: ComponentFixture<DashWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
