import { Component } from '@angular/core';

@Component({
  selector: 'app-about-card',
  template: `
    <section class="aboutus-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 p-0">
                    <div class="about-video set-bg" style="background-image: url('../../assets/img/about-us.jpg');"></div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="about-text">
                        <div class="section-title">
                            <span>About Us</span>
                            <h2>What we do</h2>
                        </div>
                        <div class="at-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor.</p>
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
export class AboutCardComponent {

}
