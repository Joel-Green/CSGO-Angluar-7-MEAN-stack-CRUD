import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepageimguploadComponent } from './updatepageimgupload.component';

describe('UpdatepageimguploadComponent', () => {
  let component: UpdatepageimguploadComponent;
  let fixture: ComponentFixture<UpdatepageimguploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepageimguploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepageimguploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
