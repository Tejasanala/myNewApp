import { Component } from '@angular/core';
import { ExcercisesService } from '../excercises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IExcercise } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-excercise-details',
  standalone: true,
  imports: [MatButtonModule, MatBadgeModule, MatIconModule, MatCardModule],
  templateUrl: './excercise-details.component.html',
  styleUrl: './excercise-details.component.scss',
})
export class ExcerciseDetailsComponent {
  excerciseList: Array<IExcercise> = [];
  excercise!: IExcercise;
  isLoading: boolean = true;
  msg = '';

  constructor(
    public excercisesService: ExcercisesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; //  it gets the id from URL

    this.excercisesService
      .getMovieByIdP(id)
      .then((data) => {
        this.excercise = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
