import { Component, OnInit } from '@angular/core';

import { Contact } from '../../share/contact';
import { ContactDataService } from '../../share/contactdata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  providers: [ContactDataService]
})
export class ContactComponent implements OnInit {

  contact: Contact;

  constructor(private contactDataService: ContactDataService) { }

  getContactData(): void {
    this.contactDataService.getContactData().then(contact => this.contact = contact);
  }

  ngOnInit() {
    this.getContactData();
  }

}
