import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ConfirmDailogComponent } from '../confirm-dailog/confirm-dailog.component';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    public loginService: LoginService
  ) {}
  openConfirmDialog(message: string): Promise<boolean> {
    const dialogRef = this.dialog.open(ConfirmDailogComponent, {
      width: '250px',
      data: { message },
    });

    return dialogRef.afterClosed().toPromise();
  }
  async ngOnInit() {
    const confirmed = await this.openConfirmDialog(
      'Are you sure you want to logout?'
    );
    if (confirmed) {
      console.log('logging out...');

      this.loginService.loginok = !this.loginService.loginok;

      localStorage.clear();
      this.router.navigate([`/home`]);
    } else {
      this.router.navigate(['/excercises']);
    }
  }
}
