import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
  encapsulation: ViewEncapsulation.None
})

export class ClientsComponent {
  readonly images: string[] = [
    'assets/image1.jpeg',
    'assets/image2.jpeg',
    'assets/image3.jpeg',
    'assets/image4.jpeg',
    'assets/image5.jpeg',
    'assets/image6.jpeg',
    'assets/image7.jpeg',
    'assets/image8.jpeg',
    'assets/image9.jpeg',
    'assets/image10.jpeg'
  ];

  readonly maxDelta = 150;
  readonly imageWidth = 200;

  currentImage = 0;
  currentDelta = 0;

  lastX = 0;
  lastY = 0;

  logoPopup(event: MouseEvent): void {
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    const offsetX = rect.x;
    const offsetY = rect.y;

    const adjustedX = event.clientX - offsetX;
    const adjustedY = event.clientY - offsetY;

    this.currentDelta += Math.sqrt(Math.pow(adjustedX - this.lastX, 2) + Math.pow(adjustedY - this.lastY, 2));

    console.log('Mouse moved on page:', adjustedX, adjustedY);

    if (this.currentDelta >= this.maxDelta) {
      this.currentDelta = 0;
      const img = document.createElement('img');
      img.src = this.images[this.currentImage];
      this.currentImage = (this.currentImage + 1) % this.images.length;

      const tempImage = new Image();
      tempImage.src = img.src;

      tempImage.onload = () => {
        const aspectRatio = tempImage.naturalWidth / tempImage.naturalHeight;
        const height = this.imageWidth / aspectRatio;

        img.className = 'dynamic-image';
        img.style.left = `${adjustedX - this.imageWidth / 2}px`;
        img.style.top = `${adjustedY - height / 2}px`;
        img.width = this.imageWidth;
        element.appendChild(img);

        img.addEventListener('animationend', () => {
          img.remove();
        });
      }
    }

    this.lastX = adjustedX;
    this.lastY = adjustedY;
  }
}