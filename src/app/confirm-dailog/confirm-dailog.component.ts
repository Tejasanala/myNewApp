import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dailog',
  standalone: true,
  imports: [MatDialogActions, MatDialogModule, MatButtonModule],
  templateUrl: './confirm-dailog.component.html',
  styleUrl: './confirm-dailog.component.scss',
})
export class ConfirmDailogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDailogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }
  onCancel(): void {
    this.dialogRef.close(false);
  }
}
