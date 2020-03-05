import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfieldComponent } from './editfield.component';

describe('EditfieldComponent', () => {
  let component: EditfieldComponent;
  let fixture: ComponentFixture<EditfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
