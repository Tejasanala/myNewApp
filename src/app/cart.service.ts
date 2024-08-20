import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];

  constructor() {}

  addtocart(exercise: any) {
    this.items.push(exercise);
  }

  getitems() {
    return this.items;
  }
}
