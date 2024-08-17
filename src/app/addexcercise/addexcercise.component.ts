import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IExcercise } from '../app.component';
import { ExcercisesService } from '../excercises.service';
import { Router } from '@angular/router';
import { Newout } from '../../../excercise';
@Component({
  selector: 'app-addexcercise',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './addexcercise.component.html',
  styleUrl: './addexcercise.component.scss',
})
export class AddexcerciseComponent {
  excerciseList: Array<IExcercise> = [];
  excerciseForm!: FormGroup;

  constructor(
    public excercisesService: ExcercisesService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // formGroup -> formControlName
    this.excerciseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      type: ['', [Validators.required, Validators.minLength(2)]],
      preferredTime: ['', [Validators.required, Validators.minLength(5)]],
      bodyPartAffected: ['', [Validators.required, Validators.minLength(2)]],
      moreInfo: ['', [Validators.required, Validators.minLength(2)]],
      image: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^https:.*/),
        ],
      ],
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      description: ['', [Validators.required]],
      cautionAge: ['', [Validators.required]],
    });
  }

  get name() {
    return this.excerciseForm.get('name');
  }

  get rating() {
    return this.excerciseForm.get('rating');
  }
  get time() {
    return this.excerciseForm.get('time');
  }
  addexcercise() {
    console.log(this.excerciseForm.value);
    //valid is true if all the validations are passed.
    if (this.excerciseForm.valid) {
      let newexe: Newout = this.excerciseForm.value;

      this.excercisesService.addMovie(newexe).then(() => {
        // Move to movies page
        this.router.navigate(['excercises']);
      });
    }
  }
}
