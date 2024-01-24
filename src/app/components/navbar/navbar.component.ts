import { Component } from '@angular/core';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  faBars = faBars;
  faArrowLeft = faArrowLeft;
}
