/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoteContentComponent } from './vote-content.component';

describe('VoteContentComponent', () => {
  let component: VoteContentComponent;
  let fixture: ComponentFixture<VoteContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
