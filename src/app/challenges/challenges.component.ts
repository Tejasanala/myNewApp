import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { challenges } from '../app.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChallengesService } from '../challenges.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDailogComponent } from '../confirm-dailog/confirm-dailog.component';
import { debounceTime, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [MatButtonModule, MatBadgeModule, MatIconModule, MatCardModule],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.scss',
})
export class ChallengesComponent {
  @Input() c = {
    heading: 'Daily Meditation and Stretching',
    name: 'Daily Meditation and Stretching',
    description:
      'Incorporate 10 minutes of meditation and 10 minutes of stretching into your daily routine for a month.',
    duration_days: 30,
    goal: '10 minutes of meditation + 10 minutes of stretching per day',
    unit: 'minutes',
    difficulty: 'low',
    exercises: [
      'Meditation',
      'Forward Bend Stretch',
      'Side Stretch',
      'Neck Stretch',
    ],
    image:
      'https://cdn.pixabay.com/photo/2024/06/21/07/46/yoga-8843808_1280.jpg',
    cost: '₹999.00',
  };

  excerciseList: any;
  isLoading: boolean = true;
  msg = '';
  searchingForm!: FormGroup;

  searchTerm: string = '';
  filteredexcercises: any;

  constructor(
    public challengesService: ChallengesService,
    private router: Router,
    private fb: FormBuilder,
    public loginService: LoginService,
    private dialog: MatDialog
  ) {
    this.searchingForm = this.fb.group({ search: '' });
  }

  openConfirmDialog(message: string): Promise<boolean> {
    const dialogRef = this.dialog.open(ConfirmDailogComponent, {
      width: '250px',
      data: { message },
    });

    return dialogRef.afterClosed().toPromise();
  }

  ngOnInit() {
    this.searchingForm
      .get('search')
      ?.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        switchMap((searchingTerm) =>
          this.challengesService.searchUser(searchingTerm)
        )
      )
      .subscribe((data) => {
        console.log(data);
        this.excerciseList = data;
        this.filteredexcercises = this.excerciseList;
        this.isLoading = false;
      });
  }

  loadMovies() {
    this.challengesService
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

  async deleteMovieP(exe: challenges) {
    const confirmed = await this.openConfirmDialog(
      'Are you sure you want to logout?'
    );
    if (confirmed) {
      console.log('Deleting  out...');
      // localStorage.setItem("token",'');
      // localStorage.setItem("roleId",'');
      // this.loginService.loginSuccess = false;

      this.challengesService.deleteMovie(exe).then(() => this.loadMovies());
      // localStorage.clear();
      // this.router.navigate([`/`]);
    } else {
      this.router.navigate(['/challenges']);
    }
  }

  editMovieP(exe: challenges) {
    this.router.navigate(['excercises', 'edit', exe.challengeId]);
  }
}
