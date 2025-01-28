import { Component } from '@angular/core';
import { IntroComponent } from "./sections/intro/intro.component";
import { NavbarComponent } from "./sections/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lp';
}
