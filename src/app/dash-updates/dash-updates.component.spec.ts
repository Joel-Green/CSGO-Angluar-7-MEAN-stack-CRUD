import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashUpdatesComponent } from './dash-updates.component';

describe('DashUpdatesComponent', () => {
  let component: DashUpdatesComponent;
  let fixture: ComponentFixture<DashUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
