import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CheifsComponent } from './cheifs/cheifs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { EventsComponent } from './events/events.component';
import { StatesComponent } from './states/states.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WhyUsComponent } from './why-us/why-us.component';

const routes: Routes = [
  {path : "" , component : HeroComponent} ,
  {path : "home" , component : HeroComponent} ,
  {path : "about" , component : AboutComponent} ,
  {path : "menu" , component : MenuComponent} ,
  {path : "chefs" , component : CheifsComponent} ,
  {path : "gallery" , component : GalleryComponent} ,
  {path : "events" , component : EventsComponent} ,
  {path : "contact" , component : ContactComponent} ,
  {path : "states" , component : StatesComponent} ,
  {path : "testm" , component : TestimonialsComponent} ,
  {path : "whyUs" , component : WhyUsComponent} ,
  {path : "**" , component : Error404Component} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
