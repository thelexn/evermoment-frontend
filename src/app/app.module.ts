import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { MentaltrainingComponent } from './main/mentaltraining/mentaltraining.component';
import { OffersComponent } from './main/offers/offers.component';
import { AboutmeComponent } from './main/aboutme/aboutme.component';
import { ContactComponent } from './main/contact/contact.component';
import { LeagalComponent } from './main/leagal/leagal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MentaltrainingComponent,
    OffersComponent,
    AboutmeComponent,
    ContactComponent,
    LeagalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
