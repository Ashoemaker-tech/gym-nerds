import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  template: `
    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="canvas-close">
            <i class="fa fa-close"></i>
        </div>
        <div class="canvas-search search-switch">
            <i class="fa fa-search"></i>
        </div>
        <nav class="canvas-menu mobile-menu">
            <ul>
                <li><a routerLink="/">Home</a></li>
                <li><a routerLink="/about">About Us</a></li>
                <li><a routerLink="/classes">Classes</a></li>
                <li><a routerLink="/services">Services</a></li>
                <li><a routerLink="/team">Our Team</a></li>
                <li><a routerLink="#">Pages</a>
                    <ul class="dropdown">
                        <li><a routerLink="/about">About us</a></li>
                        <li><a routerLink="/class-timetable">Classes timetable</a></li>
                        <li><a routerLink="/bmi-calculator">Bmi calculate</a></li>
                        <li><a routerLink="/team">Our team</a></li>
                        <li><a routerLink="/gallery">Gallery</a></li>
                        <li><a routerLink="/blog">Our blog</a></li>
                        <li><a routerLink="/404">404</a></li>
                    </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="canvas-social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-youtube-play"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class MobileNavComponent {

}
