import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  standalone: true,
  imports: [],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.scss',
})
export class BannersComponent implements OnInit {
  banners: string[] = [
    'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg',
    'https://img.freepik.com/premium-photo/close-up-shot-male-cyclist-legs-man-cycling-outdoors-summer-day_386167-5838.jpg?w=740',
    'assets/images/Pulse Forge — Go-to app for easy workouts and better fitness.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-lakescape-landscape-nature-scenery-hd-image_2950137.jpg',
    'https://wallpapers.com/images/hd/nature-landscape-pictures-ifqj8gxs5r49lqv7.jpg',
    'https://wallpapers.com/images/hd/nature-landscape-pictures-69siuyypm1xg7ogz.jpg',
    'https://www.landscapephotographyiq.com/wp-content/uploads/2017/07/soft-light-early.jpg',
    'https://i.pinimg.com/originals/46/cd/e1/46cde1793ed0e7727ffbf6dc7a7ea189.jpg',
  ];
  currentBanner: string = this.banners[0];
  position: number = 0;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  prevSlide(): void {
    this.position =
      this.position === 0 ? this.banners.length - 1 : this.position - 1;
    this.currentBanner = this.banners[this.position];
  }

  nextSlide(): void {
    this.position =
      this.position === this.banners.length - 1 ? 0 : this.position + 1;
    this.currentBanner = this.banners[this.position];
  }
}
