import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-mobile-nav",
  template: `
    <div *ngIf="show" class="offcanvas-menu-overlay active"></div>
    <div
      [ngClass]="show ? 'show' : ''"
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvas"
      aria-labelledby="offcanvas"
      style="width: 300px !important;"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          (click)="show = !show"
        ></button>
      </div>
      <div class="offcanvas-body">
      <div class="container-fluid">
            <ul class="nav flex-column justify-items-center">
            <li class="nav-item"><a class="nav-link" routerLink="/">Home</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/about">About Us</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/classes">Classes</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/services">Services</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/team">Our Team</a></li>
            <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
            </ul>
        <div id="mobile-menu-wrap"></div>
        <div class="canvas-social">
          <a routerLink="#"><fa-icon [icon]="faFacebook"></fa-icon></a>
          <a routerLink="#"><fa-icon [icon]="faTwitter"></fa-icon></a>
          <a routerLink="#"><fa-icon [icon]="faYoutube"></fa-icon></a>
          <a routerLink="#"><fa-icon [icon]="faInstagram"></fa-icon></a>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .nav-link {
    padding: 10px 0;
    margin: 0;
    color: #151515;
    border-bottom: 1px solid #151515;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    font-size: 15px;
  }
  .nav-link:hover {
    border-radius: 0;
    background: transparent;
    color: #f36100;
  }
  `],
})
export class MobileNavComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  @Input() show: boolean = false;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
