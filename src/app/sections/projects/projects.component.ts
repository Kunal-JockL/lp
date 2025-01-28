import { Component } from '@angular/core';
import { DisplayComponent } from './display/display.component';
import { MetricComponent } from './metric/metric.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DisplayComponent, MetricComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
