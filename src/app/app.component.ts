import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { AddexcerciseComponent } from './addexcercise/addexcercise.component';
import { CartComponent } from './cart/cart.component';

export interface IExcercise {
  ValueId: string;
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
  imports: [
    RouterOutlet,
    RouterLink,
    CounterComponent,
    ExcercisesComponent,
    AddexcerciseComponent,
    CartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myNewApp';
}
