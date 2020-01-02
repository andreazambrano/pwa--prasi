import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalingresoComponent } from './modalingreso.component';

describe('ModalingresoComponent', () => {
  let component: ModalingresoComponent;
  let fixture: ComponentFixture<ModalingresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalingresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
