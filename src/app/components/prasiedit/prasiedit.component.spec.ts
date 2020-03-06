import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasieditComponent } from './prasiedit.component';

describe('PrasieditComponent', () => {
  let component: PrasieditComponent;
  let fixture: ComponentFixture<PrasieditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasieditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
