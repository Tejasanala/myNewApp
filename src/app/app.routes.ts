import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { ExcerciseDetailsComponent } from './excercise-details/excercise-details.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'excercises',
    children: [
      { path: '', component: ExcercisesComponent },
      { path: ':id', component: ExcerciseDetailsComponent },
    ],
  },
];
