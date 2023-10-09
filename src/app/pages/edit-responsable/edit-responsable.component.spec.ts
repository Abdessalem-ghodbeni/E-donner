import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResponsableComponent } from './edit-responsable.component';

describe('EditResponsableComponent', () => {
  let component: EditResponsableComponent;
  let fixture: ComponentFixture<EditResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
