import { Component } from '@angular/core';
import { IntroComponent } from "./sections/intro/intro.component";
import { NavbarComponent } from "./sections/navbar/navbar.component";
import { ClientsComponent } from "./sections/clients/clients.component";
import { ProjectsComponent } from './sections/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, NavbarComponent, ClientsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lp';
}
