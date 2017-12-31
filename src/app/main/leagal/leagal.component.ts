import { Component, OnInit } from '@angular/core';

import { Contact } from '../../share/contact';
import { ContactDataService } from '../../share/contactdata.service';

@Component({
  selector: 'app-leagal',
  templateUrl: './leagal.component.html',
  styleUrls: ['./leagal.component.sass'],
  providers: [ContactDataService]
})
export class LeagalComponent implements OnInit {

  contact: Contact;

  constructor(private contactDataService: ContactDataService) { }

  getContactData(): void {
    this.contactDataService.getContactData().then(contact => this.contact = contact);
  }

  ngOnInit() {
    this.getContactData();
  }

}
