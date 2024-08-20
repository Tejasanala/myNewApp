import { Component } from '@angular/core';
import { ExcercisesComponent } from '../excercises/excercises.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ExcercisesComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {}
