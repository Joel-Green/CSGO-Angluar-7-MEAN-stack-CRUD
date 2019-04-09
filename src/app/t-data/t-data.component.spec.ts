import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDataComponent } from './t-data.component';

describe('TDataComponent', () => {
  let component: TDataComponent;
  let fixture: ComponentFixture<TDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
