import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

import { LinkService } from '../share/link.service';
import { Link } from '../share/links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  providers: [LinkService]
})

export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('mtb') mtb: ElementRef;

  links: Link[];

  constructor(private linkservice: LinkService, private rd: Renderer2) { }

  getLinks(): void {
    this.linkservice.getLinks().then(links => this.links = links);
  }

  ngOnInit() {
    this.getLinks();
  }

  ngAfterViewInit(){
    // console.log(this.mtb.nativeElement.offsetTop);
    console.log(this.rd);
  }

}
