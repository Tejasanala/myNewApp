import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexcerciseComponent } from './editexcercise.component';

describe('EditexcerciseComponent', () => {
  let component: EditexcerciseComponent;
  let fixture: ComponentFixture<EditexcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditexcerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditexcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
