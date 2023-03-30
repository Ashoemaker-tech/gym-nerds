import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-cards',
  template: `
    <section class="pricing-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Plan</span>
                        <h2>Choose your pricing plan</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>Class drop-in</h3>
                        <div class="pi-price">
                            <h2>$ 39.99</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free sauna</li>
                            <li>Unlimited equipment</li>
                            <li>Personal trainer</li>
                            <li>Weight loss plans</li>
                            <li>Month to month</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                        <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>6 Month unlimited</h3>
                        <div class="pi-price">
                            <h2>$ 99.99</h2>
                            <span>Weekly Classes</span>
                        </div>
                        <ul>
                            <li>Free sauna</li>
                            <li>Unlimited equipment</li>
                            <li>Personal trainer</li>
                            <li>Weight loss plans</li>
                            <li>Save 20% bi annual</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>12 Month unlimited</h3>
                        <div class="pi-price">
                            <h2>$ 299.99</h2>
                            <span>Weekly Classes</span>
                        </div>
                        <ul>
                            <li>Free sauna</li>
                            <li>Unlimited equipment</li>
                            <li>Personal trainer</li>
                            <li>Weight loss plans</li>
                            <li>Save 40% annual</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                        <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,
  styles: [
  ]
})
export class PricingCardsComponent {

}
