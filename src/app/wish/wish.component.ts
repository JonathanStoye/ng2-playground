import { Component, OnInit, Input } from '@angular/core';
import { Wish } from './wish.class';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
  
export class WishComponent implements OnInit {
  @Input() wish: Wish

  constructor(public wishService: WishService) {
    this.wishService = wishService
  }

  ngOnInit() {
  }

  remove(): void {
    this.wishService.removeWish(this.wish)
  }
}
