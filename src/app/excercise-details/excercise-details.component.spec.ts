import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseDetailsComponent } from './excercise-details.component';

describe('ExcerciseDetailsComponent', () => {
  let component: ExcerciseDetailsComponent;
  let fixture: ComponentFixture<ExcerciseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcerciseDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcerciseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
