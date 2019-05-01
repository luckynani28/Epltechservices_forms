import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutheniationComponent } from './autheniation.component';

describe('AutheniationComponent', () => {
  let component: AutheniationComponent;
  let fixture: ComponentFixture<AutheniationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutheniationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutheniationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
