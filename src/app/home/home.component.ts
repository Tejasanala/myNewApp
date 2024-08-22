import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BannersComponent } from '../banners/banners.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}
  startExercise() {
    this.router.navigate(['/excercises']);
  }
}
