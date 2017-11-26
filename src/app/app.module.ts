import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule, MatIconModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { MentaltrainingComponent } from './main/mentaltraining/mentaltraining.component';
import { OffersComponent } from './main/offers/offers.component';
import { AboutmeComponent } from './main/aboutme/aboutme.component';
import { ContactComponent } from './main/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    MentaltrainingComponent,
    OffersComponent,
    AboutmeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
