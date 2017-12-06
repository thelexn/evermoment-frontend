import { Injectable } from '@angular/core';

import { Card } from './cards';
import { CARDS } from './cards-mock';

@Injectable()

export class CardService {

  getCards(): Promise<Card[]> {
    return Promise.resolve(CARDS);
  }

}
