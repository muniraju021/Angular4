import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBaiscsComponent } from './template-baiscs.component';

describe('TemplateBaiscsComponent', () => {
  let component: TemplateBaiscsComponent;
  let fixture: ComponentFixture<TemplateBaiscsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateBaiscsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBaiscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
