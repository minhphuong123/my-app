import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDay6Component } from './add-day6.component';

describe('AddDay6Component', () => {
  let component: AddDay6Component;
  let fixture: ComponentFixture<AddDay6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDay6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDay6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
