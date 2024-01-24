import { Component } from '@angular/core';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  faSearch = faSearch;
  faPlus = faPlus;
}
