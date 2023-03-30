import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <page-header
    image="../../../assets/img/breadcrumb-bg.jpg"
    title="About us"
    ></page-header>
    <app-featured></app-featured>
    <app-about-card></app-about-card>
    <app-team></app-team>
    <app-banner
    bgImage="../../../assets/img/hero/hero-1.jpg" 
    title="register now to get more deals" 
    statement="Where health, beauty and fitness meet." 
    btnText="Register"></app-banner>
    <app-contact-info></app-contact-info>
  `,
  styles: [
  ]
})
export class AboutComponent {

}
