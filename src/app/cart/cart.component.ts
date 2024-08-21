import { Component } from '@angular/core';
import { ExcercisesComponent } from '../excercises/excercises.component';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ExcercisesComponent, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  excercise: any = {};
  CartData: any = {};

  constructor(
    private cartservice: CartService,
    private route: ActivatedRoute, // DI
    private router: Router
  ) {}

  ngOnInit() {
    this.CartData = this.cartservice.gettingCart();

    console.log(this.CartData);
    //this.excercise.patchValue(this.ProductsList[0]);
    //this.excercise = this.cartservice.gettingCart();
  }
  deleteProduct() {
    console.log('deleting..');
  }
}
