import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashUpdateContentComponent } from './dash-update-content.component';

describe('DashUpdateContentComponent', () => {
  let component: DashUpdateContentComponent;
  let fixture: ComponentFixture<DashUpdateContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashUpdateContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashUpdateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
