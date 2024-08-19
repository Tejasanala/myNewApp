import { Component } from '@angular/core';
import { IExcercise } from '../app.component';
import { ExcerciseComponent } from '../excercise/excercise.component';
import { ExcercisesService } from '../excercises.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excercises',
  standalone: true,
  imports: [
    ExcerciseComponent,
    FormsModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './excercises.component.html',
  styleUrl: './excercises.component.scss',
})
export class ExcercisesComponent {
  excerciseList: Array<IExcercise> = [];
  isLoading: boolean = true;
  msg = '';
  searchTerm: string = '';

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
    this.router.navigate(['excercises', 'edit', exe.ValueId]);
  }

  onSearch() {
    // this.excerciseList = this..filter(
    //   (recipe: any) =>
    //     recipe.title
    //       .toLowerCase()
    //       .includes(this.searchTerm.toLocaleLowerCase()) ||
    //     recipe.type
    //       .toLowerCase()
    //       .includes(this.searchTerm.toLocaleLowerCase()) ||
    //     recipe.category
    //       .toLowerCase()
    //       .includes(this.searchTerm.toLocaleLowerCase())
    // );
  }
}
