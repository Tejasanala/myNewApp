import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexcerciseComponent } from './addexcercise.component';

describe('AddexcerciseComponent', () => {
  let component: AddexcerciseComponent;
  let fixture: ComponentFixture<AddexcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddexcerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddexcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
