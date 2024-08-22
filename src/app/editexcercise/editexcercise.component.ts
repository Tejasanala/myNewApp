import { Component } from '@angular/core';
import { IExcercise } from '../app.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ExcercisesService } from '../excercises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ConfirmDailogComponent } from '../confirm-dailog/confirm-dailog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editexcercise',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './editexcercise.component.html',
  styleUrl: './editexcercise.component.scss',
})
export class EditexcerciseComponent {
  excerciseList: Array<IExcercise> = [];
  excerciseForm!: FormGroup;

  constructor(
    public excercisesService: ExcercisesService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    // formGroup -> formControlName
    this.excerciseForm = this.fb.group({
      ValueId: this.route.snapshot.paramMap.get('id') as string,
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

  openConfirmDialog(message: string): Promise<boolean> {
    const dialogRef = this.dialog.open(ConfirmDailogComponent, {
      width: '250px',
      data: { message },
    });

    return dialogRef.afterClosed().toPromise();
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

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL
    console.log(id);
    this.excercisesService.getMovieByIdP(id).then((data) => {
      console.log(data); // Ensure data is what you expect
      this.excerciseForm.patchValue(data);
    });
  }

  async editexcercise() {
    // Todo: Fix Add - Technical Debt

    if (this.excerciseForm.valid) {
      let updatedMovie: IExcercise = this.excerciseForm.value;
      console.log(this.excerciseForm.value);

      const confirmed = await this.openConfirmDialog(
        'Are you sure you want to logout?'
      );
      if (confirmed) {
        console.log('Editing the value...');
        this.excercisesService.editMovie(updatedMovie).then(() => {
          this.router.navigate(['excercises']);
        });
      } else {
        this.router.navigate(['/excercises']);
      }
    }
  }
}
