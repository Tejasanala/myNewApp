import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CounterComponent } from '../counter/counter.component';
import { IExcercise } from '../app.component';

@Component({
  selector: 'app-excercise',
  standalone: true,
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
    CounterComponent,
  ],
  templateUrl: './excercise.component.html',
  styleUrl: './excercise.component.scss',
})
export class ExcerciseComponent {
  @Input() excercise = {
    id: '14',
    name: 'Tricep Dip',
    type: 'Strength',
    preferredTime: 'Morning/Evening',
    bodyPartAffected: 'Triceps, Shoulders',
    moreInfo: 'Strengthens triceps and shoulders.',
    image: 'https://media1.tenor.com/m/Pvlmd3Y97goAAAAC/dips-tricep.gif',
    rating: 4.3,
    description:
      'Tricep dips are done using parallel bars or a bench to lower and raise your body, focusing on the triceps and shoulders.',
    cautionAge:
      'Recommended for ages 15 and up; ensure proper technique to avoid shoulder strain.',
  };

  @Output() deleteMovieEvent = new EventEmitter<IExcercise>();
  @Output() editMovieEvent = new EventEmitter<IExcercise>();

  deleteMovie() {
    this.deleteMovieEvent.emit(this.excercise);
  }
  editMovie() {
    this.editMovieEvent.emit(this.excercise);
  }
}
