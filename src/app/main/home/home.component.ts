import { Component, OnInit } from '@angular/core';

import { CardService } from '../../share/card.service';
import { Card } from '../../share/cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [CardService]
})
export class HomeComponent implements OnInit {

  cards: Card[];

  constructor(private cardservice: CardService) { }

  getCards(): void {
    this.cardservice.getCards().then(cards => this.cards = cards);
  }

  ngOnInit() {
    this.getCards();
  }

}
