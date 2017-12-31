import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { CONTACTDATA } from './contact-mock';

@Injectable()

export class ContactDataService {

  getContactData(): Promise<Contact> {
    return Promise.resolve(CONTACTDATA);
  }

}
