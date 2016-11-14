import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Wish } from './wish/wish.class';
import { WishService } from './services/wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  private title = 'Rewe Wishlist'
  private wishes: Array<Wish>
  private wishForm
  private newWish: Wish = new Wish('', '', 1)
  private dinos: Array<any> = []

  constructor(public wishService: WishService) {
    this.wishes = wishService.getWishes()
    this.wishForm = new FormGroup({
      title: new FormControl('title'),
      link: new FormControl('link'),
      count: new FormControl('count'),
    })
    this.wishService.loadWishes().subscribe((res) => { this.dinos = res.json() || {} })
  }

  add(): void {
    this.wishService.addWish(this.newWish)
    this.newWish = new Wish('', '', 1)
  }
}
