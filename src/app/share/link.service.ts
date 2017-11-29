import { Injectable } from '@angular/core';

import { Link } from './links';
import { LINKS } from './links-mock';

@Injectable()

export class LinkService {

  getLinks(): Promise<Link[]> {
    return Promise.resolve(LINKS);
  }

}
