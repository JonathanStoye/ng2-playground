import { Injectable } from '@angular/core';
import { Wish } from '../wish/wish.class';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WishService {

  private wishes: Array<Wish>
  private url: string = 'http://dinoipsum.herokuapp.com/api/?format=json'

  constructor(private http: Http) {
    this.loadWishes()
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

  loadWishes(): Observable<Response> {
    return this.http.get(this.url)
  }
}
