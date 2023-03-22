import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-hero></app-hero>
    <app-featured></app-featured>
    <app-classes></app-classes>
    <app-banner 
    bgImage="../../../assets/img/banner-bg.jpg" 
    title="register now to get more deals" 
    statement="Where health, beauty and fitness meet." 
    btnText="Appointment"></app-banner>
    <app-pricing></app-pricing>
    <app-team></app-team>
    <app-contact-info></app-contact-info>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
