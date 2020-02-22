import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentiComponent } from './contenti.component';

describe('ContentiComponent', () => {
  let component: ContentiComponent;
  let fixture: ComponentFixture<ContentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
