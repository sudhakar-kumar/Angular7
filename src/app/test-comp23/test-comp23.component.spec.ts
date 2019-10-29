import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComp23Component } from './test-comp23.component';

describe('TestComp23Component', () => {
  let component: TestComp23Component;
  let fixture: ComponentFixture<TestComp23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComp23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComp23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
