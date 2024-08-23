import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { ExcerciseDetailsComponent } from './excercise-details/excercise-details.component';
import { combineLatest } from 'rxjs';
import { AddexcerciseComponent } from './addexcercise/addexcercise.component';
import { EditexcerciseComponent } from './editexcercise/editexcercise.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { authGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'excercises',
    children: [
      { path: '', component: ExcercisesComponent },
      { path: 'cart', component: CartComponent },
      { path: 'add', component: AddexcerciseComponent },
      { path: 'edit/:id', component: EditexcerciseComponent },
      { path: ':id', component: ExcerciseDetailsComponent },
    ],
    canActivate: [authGuard],
  },

  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
