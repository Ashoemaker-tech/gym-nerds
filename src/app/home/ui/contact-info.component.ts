import { Component } from '@angular/core';
import { faMapMarker, faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-info',
  template: `
    <div class="gettouch-section">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="gt-text">
                    <fa-icon [icon]="faMapMarker"></fa-icon>
                        <p>333 Middle Winchendon Rd, Rindge,<br/> NH 03461</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="gt-text">
                    <fa-icon [icon]="faMobile"></fa-icon>
                        <ul>
                            <li>125-711-811</li>
                            <li>125-668-886</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="gt-text email">
                        <fa-icon [icon]="faEnvelope"></fa-icon>
                        <p>Support.gymcenter@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class ContactInfoComponent {
faMapMarker = faMapMarker
faMobile = faMobile
faEnvelope = faEnvelope
}
