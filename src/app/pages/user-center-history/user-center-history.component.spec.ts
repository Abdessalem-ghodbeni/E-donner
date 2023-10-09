import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCenterHistoryComponent } from './user-center-history.component';

describe('UserCenterHistoryComponent', () => {
  let component: UserCenterHistoryComponent;
  let fixture: ComponentFixture<UserCenterHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCenterHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCenterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
