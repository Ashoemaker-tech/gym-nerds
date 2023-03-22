import { Component, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-header',
  template: `
    <section class="breadcrumb-section" style="background-image: url('{{ image }}');">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb-text">
                        <h2>{{ title }}</h2>
                        <div class="bt-option">
                            <a [routerLink]="path">Home</a>
                            <fa-icon class="mx-1 text-white" [icon]="faChevronRight"></fa-icon>
                            <span>{{route}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,
  styles: [
  ]
})
export class PageHeaderComponent {
  @Input() path!: string
  @Input() route!: string
  @Input() title!: string
  @Input() image!: string
  faChevronRight = faChevronRight

}
