/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NextSevenDaysComponent } from './next-seven-days.component';

describe('NextSevenDaysComponent', () => {
  let component: NextSevenDaysComponent;
  let fixture: ComponentFixture<NextSevenDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextSevenDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextSevenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
