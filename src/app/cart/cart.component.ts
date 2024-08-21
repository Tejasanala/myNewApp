import { Component } from '@angular/core';
import { ExcercisesComponent } from '../excercises/excercises.component';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ExcercisesComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  excercise: any = {};
  ProductsList: any = [];

  constructor(
    private cartservice: CartService,
    private route: ActivatedRoute, // DI
    private router: Router
  ) {}

  ngOnInit() {
    this.ProductsList = this.cartservice.gettingCart();

    this.excercise.patchValue(this.ProductsList[0]);
    // this.Products = this.productsService.gettingCart();
  }
  deleteProduct() {
    console.log('deleting..');
  }
  orders() {
    this.router.navigate([`orders`]);
  }
}
