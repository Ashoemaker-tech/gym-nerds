import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  template: `
    <page-header [title]="title" image="../../assets/img/breadcrumb-bg.jpg"></page-header>
    <app-pricing-cards></app-pricing-cards>
    <app-contact-info></app-contact-info>
  `,
  styles: [
  ]
})
export class PricingComponent {
title: string = 'Our Pricing'
}
