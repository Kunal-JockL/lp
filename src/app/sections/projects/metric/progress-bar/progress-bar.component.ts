import { Component, Input, OnInit  } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [ NgStyle ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number = 100; // Default to 100 if no value is passed
  currentValue: number = 0;

  ngOnInit(): void {
    this.animateProgress();
  }

  animateProgress(): void {
    const duration = 2000; // Duration of the animation in milliseconds
    const interval = 20; // Time between updates in milliseconds
    const increment = this.value / (duration / interval);
    
    const counterInterval = setInterval(() => {
      this.currentValue += increment;
      if (this.currentValue >= this.value) {
        this.currentValue = this.value;
        clearInterval(counterInterval);
      }
    }, interval);
  }

  get progressText(): string {
    return `${Math.round(this.currentValue)}+`;
  }
}