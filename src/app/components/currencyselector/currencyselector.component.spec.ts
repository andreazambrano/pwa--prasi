import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyselectorComponent } from './currencyselector.component';

describe('CurrencyselectorComponent', () => {
  let component: CurrencyselectorComponent;
  let fixture: ComponentFixture<CurrencyselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
