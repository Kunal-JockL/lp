import { Component } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@Component({
  selector: 'app-metric',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './metric.component.html',
  styleUrl: './metric.component.css'
})
export class MetricComponent {

}
