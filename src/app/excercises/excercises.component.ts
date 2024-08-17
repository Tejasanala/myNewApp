import { Component } from '@angular/core';
import { IExcercise } from '../app.component';
import { ExcerciseComponent } from '../excercise/excercise.component';
import { ExcercisesService } from '../excercises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excercises',
  standalone: true,
  imports: [ExcerciseComponent],
  templateUrl: './excercises.component.html',
  styleUrl: './excercises.component.scss',
})
export class ExcercisesComponent {
  excerciseList: Array<IExcercise> = [];
  isLoading: boolean = true;
  msg = '';

  constructor(
    public excercisesService: ExcercisesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadMovies();
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

  deleteMovieP(exe: IExcercise) {
    this.excercisesService.deleteMovie(exe).then(() => this.loadMovies());
  }

  editMovieP(exe: IExcercise) {
    this.router.navigate(['excercises', 'edit', exe.id]);
  }
}
