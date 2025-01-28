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
  images: string[] = [
    'lp\public\assets\image1.jpeg',
    '/assets/image2.jpeg',
    'assets/image3.jpeg',
    'assets/image4.jpeg',
    'assets/image5.jpeg',
    'assets/image6.jpeg',
    'assets/image7.jpeg',
    'assets/image8.jpeg',
    'assets/image9.jpeg',
    'assets/image10.jpeg'
  ];  

  lastX = 0;
  lastY = 0;

  // Event listener for mouse movements
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (Math.abs(event.clientX - this.lastX) > 150 || Math.abs(event.clientY - this.lastY) > 150) {
      this.lastX = event.clientX;
      this.lastY = event.clientY;
      console.log('Mouse moved:', event.clientX, event.clientY);
      const img = document.createElement('img');
      img.src = this.images[Math.floor(Math.random() * this.images.length)];
      console.log(img.src);
      if (event.clientX < window.innerWidth-150 && event.clientY < window.innerHeight-150) {
      img.className = 'dynamic-image';
      console.log(img.className);
      img.style.left = `${event.clientX}px`;
      img.style.top = `${event.clientY}px`;

      document.body.appendChild(img);
      console.log('img.width:', img.width);
      }

      // Remove the image after animation ends
      img.addEventListener('animationend', () => {
        console.log('Animation ended');
        // img.remove();
      });
    }
  }
}
