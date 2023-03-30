import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero-section">
        <div class="hs-slider owl-carousel">
            <div class="hs-item set-bg" style="background-image: url('../../../assets/img/hero/hero-2.jpg');">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-6">
                            <div class="hi-text">
                                <span>Shape your body</span>
                                <h1>Be <strong>strong</strong> train hard</h1>
                                <a href="#" class="primary-btn">Get info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="hs-item set-bg" data-setbg="./img/hero/hero-2.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-6">
                            <div class="hi-text">
                                <span>Shape your body</span>
                                <h1>Be <strong>strong</strong> traning hard</h1>
                                <a href="#" class="primary-btn">Get info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </section>
  `,
  styles: [
  ]
})
export class HeroComponent {

}
