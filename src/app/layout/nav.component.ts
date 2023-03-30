import { Component, HostListener } from '@angular/core';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  template: `
  <app-mobile-nav [show]="show" (btnClick)="show = !show"></app-mobile-nav>
  <header [class.sticky]="setSticky" class="header-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="logo">
                        <a routerLink="/">
                            <img src="../../../assets/img/logo.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="nav-menu">
                        <ul>
                            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
                            <li><a routerLink="/about" routerLinkActive="active">About Us</a></li>
                            <li><a routerLink="/gallery" routerLinkActive="active">Gallery</a></li>
                            <li><a routerLink="/class" routerLinkActive="active">Classes</a></li>
                            <li><a routerLink="/pricing" routerLinkActive="active">Pricing</a></li>
                            <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="top-option">
                        <div class="to-social">
                            <a routerLink="#"><fa-icon [icon]="faFacebook"></fa-icon></a>
                            <a routerLink="#"><fa-icon [icon]="faTwitter" ></fa-icon></a>
                            <a routerLink="#"><fa-icon [icon]="faYoutube"></fa-icon></a>
                            <a routerLink="#"><fa-icon [icon]="faInstagram" ></fa-icon></a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="canvas-open" (click)="show = !show">
                <fa-icon [icon]="faBars"></fa-icon>
            </button>
        </div>
    </header>
  `,
  styles: [`
 .nav-menu ul li a {
    text-decoration: none;
 } 

 .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: #363636;
 }
  `
  ]
})
export class NavComponent {
  faFacebook = faFacebook
  faTwitter = faTwitter
  faYoutube = faYoutube
  faInstagram = faInstagram
  faSearch = faSearch
  faBars = faBars

  show: boolean = false 
  setSticky: boolean = false

   
//    handleScroll(){
//     if (window.scrollY > 10) {
//       this.setSticky = true;
//     } else {
//       this.setSticky = false;
//     }
//   };
@HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.setSticky = scrollOffset > 10;
  }
  
}
