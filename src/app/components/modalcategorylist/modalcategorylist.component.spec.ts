import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcategorylistComponent } from './modalcategorylist.component';

describe('ModalcategorylistComponent', () => {
  let component: ModalcategorylistComponent;
  let fixture: ComponentFixture<ModalcategorylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalcategorylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
