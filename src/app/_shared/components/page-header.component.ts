import { Component, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'page-header',
  template: `
    <section class="breadcrumb-section set-bg" style="background-image: url('{{ image }}');">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb-text">
                        <h2>{{ title }}</h2>
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
  @Input() title!: string
  @Input() image!: string
  faChevronRight = faChevronRight

}
