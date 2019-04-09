import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtDataComponent } from './ct-data.component';

describe('CtDataComponent', () => {
  let component: CtDataComponent;
  let fixture: ComponentFixture<CtDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
