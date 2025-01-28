import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  video : string = 'assets/video2.mp4'
  company : string = 'AADHYA INSTRUMENTS';
  width : number = 6;
  height : number = 6;
}
