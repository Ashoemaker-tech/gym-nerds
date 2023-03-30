import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  template: `
    <page-header [title]="title" image="../../assets/img/breadcrumb-bg.jpg"></page-header>
    <app-classes-table></app-classes-table>  
    <app-contact-info></app-contact-info>
  `,
  styles: [
  ]
})
export class ClassesComponent {
title :string = 'Classes'
}
