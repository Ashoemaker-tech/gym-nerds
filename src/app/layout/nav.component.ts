import { Component } from '@angular/core';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  template: `
  <app-mobile-nav></app-mobile-nav>
  <header class="header-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="logo">
                        <a routerLink="./index.html">
                            <img src="../../../assets/img/logo.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="nav-menu">
                        <ul>
                            <li class="active"><a routerLink="/index">Home</a></li>
                            <li><a routerLink="/about">About Us</a></li>
                            <li><a routerLink="/class-details">Classes</a></li>
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
                            <li><a routerLink="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="top-option">
                        <div class="to-search search-switch">
                            <fa-icon [icon]="faSearch"></fa-icon>
                        </div>
                        <div class="to-social">
                            <a routerLink="#"><fa-icon [icon]="faFacebook"></fa-icon></a>
                            <a routerLink="#"><fa-icon [icon]="faTwitter" ></fa-icon></a>
                            <a routerLink="#"><fa-icon [icon]="faYoutube"></fa-icon></a>
                            <a routerLink="#"><fa-icon [icon]="faInstagram" ></fa-icon></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="canvas-open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
  `,
  styles: [
  ]
})
export class NavComponent {
  faFacebook = faFacebook
  faTwitter = faTwitter
  faYoutube = faYoutube
  faInstagram = faInstagram
  faSearch = faSearch
}
