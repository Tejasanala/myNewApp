import { Injectable } from '@angular/core';
import { IExcercise } from './app.component';
import { Newout } from '../../excercise';
import { API } from '../../global';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  CartData: any = [];
  Products: any;

  constructor() {
    fetch(`${API}/Excercise`)
      .then((res) => res.json())
      .then((data) => (this.Products = data));
  }
  getProducts() {
    return fetch(`${API}/Excercise`).then((res) => res.json());
  }
  getProductsById(id: any) {
    return fetch(`${API}/Excercise/${id}`).then((res) => res.json());
  }
  deleteProduct(id: any) {
    return fetch(`${API}/Excercise/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }

  addingCart(product: any) {
    // this.movies.push(newMovie);
    // this.CartData.push(product);
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex(
      (item: { id: any }) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      // Product already in cart, increment quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // Add new product to cart
      product.quantity = 1; // Initialize quantity
      console.log(product);
      this.CartData.push(product);
    }
  }

  gettingCart() {
    console.log(this.CartData);
    return this.CartData;
  }
}
