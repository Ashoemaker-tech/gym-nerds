import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <section class="banner-section" style="background-image: url('{{ bgImage }}');">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="bs-text">
                        <h2>{{ title }}</h2>
                        <div class="bt-tips">{{ statement }}</div>
                        <a href="#" class="primary-btn  btn-normal">{{ btnText }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,
  styles: [
  ]
})
export class BannerComponent {
  @Input() bgImage: string = ''
  @Input() title: string = ''
  @Input() statement: string = ''
  @Input() btnText: string = ''


}
