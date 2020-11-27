import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollManagementComponent } from './enroll-management.component';

describe('EnrollManagementComponent', () => {
  let component: EnrollManagementComponent;
  let fixture: ComponentFixture<EnrollManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
