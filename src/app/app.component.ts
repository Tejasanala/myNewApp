import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ExcercisesComponent } from './excercises/excercises.component';

export interface IExcercise {
  id: string;
  name: string;
  type: string;
  preferredTime: string;
  bodyPartAffected: string;
  moreInfo: string;
  image: string;
  rating: number;
  description: string;
  cautionAge: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CounterComponent, ExcercisesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myNewApp';
}
