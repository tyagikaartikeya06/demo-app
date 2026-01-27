import { Component } from '@angular/core';
import { count } from 'rxjs';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-item-card',
  imports: [Counter],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  addToCart() {
    alert('Item added to cart!');
  }

}
