import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-hero></app-hero>
    <app-featured></app-featured>
    <app-class-grid></app-class-grid>
    <app-banner 
    bgImage="../../../assets/img/banner-bg.jpg" 
    title="register now to get more deals" 
    statement="Where health, beauty and fitness meet." 
    btnText="Register"></app-banner>
    <app-pricing-cards></app-pricing-cards>
    <app-bmi></app-bmi>
    <app-team></app-team>
    <app-contact-info></app-contact-info>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
