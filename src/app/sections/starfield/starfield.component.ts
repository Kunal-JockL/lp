import { Component } from '@angular/core';

@Component({
  selector: 'app-starfield',
  standalone: true,
  imports: [],
  templateUrl: './starfield.component.html',
  styleUrl: './starfield.component.css',
})
export class StarfieldComponent {
  stars: { x: number; y: number; glow: boolean; src: string }[] = [];

  constructor() {
    // Generate 500-510 stars with random positions and random star images
    const starCount = Math.floor(Math.random() * 11) + 500; // Between 500 and 510 stars
    for (let i = 0; i < starCount; i++) {
      const randomStarImage = `assets/star${Math.floor(Math.random() * 5) + 1}.png`; // Randomly select star1.png to star9.png
      this.stars.push({
        x: Math.random() * 100, // Percentage-based for responsiveness
        y: Math.random() * 100,
        glow: false,
        src: randomStarImage, // Assign the randomly selected star image
      });
    }
  }

  onMouseMove(event: MouseEvent): void {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.stars.forEach((star) => {
      const starX = (window.innerWidth * star.x) / 100;
      const starY = (window.innerHeight * star.y) / 100;
      const distance = Math.sqrt(
        Math.pow(mouseX - starX, 2) + Math.pow(mouseY - starY, 2)
      );
      star.glow = distance <= 150; // Adjust the glow radius as needed
    });
  }
}