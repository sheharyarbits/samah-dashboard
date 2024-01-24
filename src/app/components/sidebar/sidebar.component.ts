import { Component } from '@angular/core';
import {
  faUser,
  faReceipt,
  faPlus,
  faPalette,
  faPencil,
  faEllipsis,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  faUser = faUser;
  faReceipt = faReceipt;
  faPlus = faPlus;
  faPalette = faPalette;
  faPencil = faPencil;
  faEllipsis = faEllipsis;
  faRightFromBracket = faRightFromBracket;
}
