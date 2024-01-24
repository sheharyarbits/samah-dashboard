import { Component } from '@angular/core';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  faBars = faBars;
  faArrowLeft = faArrowLeft;
}
