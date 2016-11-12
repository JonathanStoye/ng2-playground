import { Injectable } from '@angular/core';
import { Wish } from '../wish/wish.class';

@Injectable()
export class WishService {

  private wishes: Array<Wish>

  constructor() {
    this.wishes = [
      new Wish('Bred', 'some link to rewe', 4),
      new Wish('Apple', 'some link to rewe', 2),
      new Wish('Sausage', 'some link to rewe', 3),
      new Wish('Cheese', 'some link to rewe', 6),
    ]
  }

  getWishes(): Array<Wish> {
    return this.wishes
  }

  addWish(wish: Wish): void {
    this.wishes.push(wish)
  }

  removeWish(wish: Wish): Wish {
    const index = this.wishes.indexOf(wish)
    return this.wishes.splice(index, 1)[0]
  }
}
