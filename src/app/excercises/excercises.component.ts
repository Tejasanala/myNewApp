import { Component, inject } from '@angular/core';
import { IExcercise } from '../app.component';
import { ExcerciseComponent } from '../excercise/excercise.component';
import { ExcercisesService } from '../excercises.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { debounceTime, switchMap, catchError, of, startWith } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDailogComponent } from '../confirm-dailog/confirm-dailog.component';

@Component({
  selector: 'app-excercises',
  standalone: true,
  imports: [
    ExcerciseComponent,
    FormsModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    RouterLink,
  ],
  templateUrl: './excercises.component.html',
  styleUrl: './excercises.component.scss',
})
export class ExcercisesComponent {
  excerciseList: any;
  isLoading: boolean = true;
  msg = '';
  searchForm!: FormGroup;

  searchTerm: string = '';
  filteredexcercises: any;

  constructor(
    public excercisesService: ExcercisesService,
    public cartservice: CartService,
    private router: Router,
    private fb: FormBuilder,
    public loginService: LoginService,
    private dialog: MatDialog
  ) {
    this.searchForm = this.fb.group({ search: '' });
  }

  openConfirmDialog(message: string): Promise<boolean> {
    const dialogRef = this.dialog.open(ConfirmDailogComponent, {
      width: '250px',
      data: { message },
    });

    return dialogRef.afterClosed().toPromise();
  }

  ngOnInit() {
    //this.loadMovies();
    localStorage.setItem('token', ' ');
    localStorage.setItem('username', ' ');
    localStorage.setItem('roleId', ' ');
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        switchMap((searchTerm) => this.excercisesService.searchUser(searchTerm))
      )
      .subscribe((data) => {
        console.log(data);
        this.excerciseList = data;
        this.filteredexcercises = this.excerciseList;
        this.isLoading = false;
      });
  }

  loadMovies() {
    this.excercisesService
      .getAllMoviesP()
      .then((data) => {
        this.excerciseList = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }

  async deleteMovieP(exe: IExcercise) {
    const confirmed = await this.openConfirmDialog(
      'Are you sure you want to logout?'
    );
    if (confirmed) {
      console.log('Deleting  out...');
      // localStorage.setItem("token",'');
      // localStorage.setItem("roleId",'');
      // this.loginService.loginSuccess = false;

      this.excercisesService.deleteMovie(exe).then(() => this.loadMovies());
      // localStorage.clear();
      // this.router.navigate([`/`]);
    } else {
      this.router.navigate(['/excercises']);
    }
  }

  editMovieP(exe: IExcercise) {
    this.router.navigate(['excercises', 'edit', exe.ValueId]);
  }
  cart(product: any) {
    console.log(product);
    this.cartservice.addingCart(product);
    //    this.route.navigate([`cart/${product.id}`]);
  }
}
