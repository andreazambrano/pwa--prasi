import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalwelcomeComponent } from './modalwelcome.component';

describe('ModalwelcomeComponent', () => {
  let component: ModalwelcomeComponent;
  let fixture: ComponentFixture<ModalwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
