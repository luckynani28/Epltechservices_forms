import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorspageComponent } from './errorspage.component';

describe('ErrorspageComponent', () => {
  let component: ErrorspageComponent;
  let fixture: ComponentFixture<ErrorspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
