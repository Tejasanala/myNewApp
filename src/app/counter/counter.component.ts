import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  like = 0;
  disLike = 0;

  incrementLike() {
    this.like++;
  }

  incrementDisLike() {
    this.disLike++;
  }
}
