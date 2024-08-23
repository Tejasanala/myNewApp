import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { AddexcerciseComponent } from './addexcercise/addexcercise.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

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

  constructor(
    public loginService: LoginService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  value = localStorage.getItem('roleId');

  tokenPresence: boolean = this.checkTokenPresence();
  refreshView() {
    this.cdr.detectChanges();
  }
  onLogout() {
    localStorage.removeItem('token');
    this.tokenPresence = this.checkTokenPresence();
  }

  private checkTokenPresence(): boolean {
    return !!localStorage.getItem('token');
  }
  refreshComponent(category: string) {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/categories', category]);
    });
  }
}
