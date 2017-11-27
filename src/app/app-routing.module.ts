import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './main/home/home.component';
import { MentaltrainingComponent } from './main/mentaltraining/mentaltraining.component';
import { OffersComponent } from './main/offers/offers.component';
import { AboutmeComponent } from './main/aboutme/aboutme.component';
import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mentaltraining', component: MentaltrainingComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
