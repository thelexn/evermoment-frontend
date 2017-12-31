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

  quote = 'Ich denke, also bin ich';
  author = 'René Decartes';
  article = `
    <p>
    Haben Sie sich schon einmal gefragt....was macht einen strahlenden Sieger bei einem Wettkampf, einen erfolgreichen Unternehmer,
    eine glückliche und zufriedene Mutter aus? Ist es ein angeborenes "Erfolgs-" oder "Glücks-Gen", das diese Menschen
    haben, oder können diese Fähigkeiten Erfolg und Zufriedenheit erlernt werden? Meiner Meinung nach haben diese Menschen
    eines gemeinsam: Sie vertrauen sich selbst und haben gelernt, ihre Einstellung zu sich selbst und ihre Ziele so auszurichten,
    dass sich diese förderlich auf ihr Leben auswirken. Und genau hier setzt mentales Training an.
    </p>
    <p>
    Ich begleite Menschen, die mentale Stärke durch Erkennen und Auflösen von festgefahrene Denk-, Verhaltens- und Emotionsmustern
    erreichen möchten. Ich gebe sowohl im Einzel-Training als auch in Seminaren und Lehrgängen das Wissen zu mentalen Techniken
    weiter.
    </p>
    `;

  cards: Card[];

  constructor(private cardservice: CardService) { }

  getCards(): void {
    this.cardservice.getCards().then(cards => this.cards = cards);
  }

  ngOnInit() {
    this.getCards();
  }

}
