import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-input',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './filter-input.component.html',
  styleUrl: './filter-input.component.css',
})
export class FilterInputComponent {
  faSearch = faSearch;
}
