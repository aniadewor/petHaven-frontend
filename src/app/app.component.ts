import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BanersComponent } from './baners/baners.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, NavbarComponent,BanersComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petHaven';
}
