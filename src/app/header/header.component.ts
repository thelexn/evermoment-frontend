import { Component, OnInit } from '@angular/core';

import { LinkService } from '../share/link.service';
import { Link } from '../share/links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  providers: [LinkService]
})
export class HeaderComponent implements OnInit {

  links: Link[];

  constructor(private linkservice: LinkService) { }

  getLinks(): void {
    this.linkservice.getLinks().then(links => this.links = links);
  }

  ngOnInit() {
    this.getLinks();
  }

}
