import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { IndividualColumnFilteringComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FiltersComponent,
    IndividualColumnFilteringComponent,
  ],
  imports: [BrowserModule, DataTablesModule, FontAwesomeModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
