import { Component, AfterViewInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements AfterViewInit {
  video1: string = 'assets/video1.mp4';
  video2: string = 'assets/video2.mp4';
  video3: string = 'assets/video3.mp4';
  video4: string = 'assets/video4.mp4';
  video5: string = 'assets/video5.mp4';
  company1: string = 'AADHYA INSTRUMENTS';
  company2: string = 'NESARA AYURVEDA';
  company3: string = 'VIJAY HOME SERVICE';
  company4: string = 'PURAN INTERIORS';
  company5: string = 'NEW HARDWICK';
  moto1: string = 'The project highlights our commitment to delivering innovative digital solutions tailored to our clients’ unique needs. If you’re interested in transforming your digital presence like Aadhya Instruments, get in touch with us. We’re here to help you shine!';
  moto2: string = 'The collaboration between Nakshatra Namaha Creations and Nesara Ayurveda resulted in a beautifully designed, highly functional website that effectively meets the client’s needs and exceeds their expectations.';
  moto3: string = 'The collaboration between Nakshatra Namaha Creations and Vijay Home Service resulted in a modern, functional website and a user-friendly mobile apps that meet the client’s needs and enhance their digital footprint.';
  moto4: string = 'Nakshatra Namaha Creations’ collaboration with Puran Interiors resulted in a stunning and functional website that effectively showcases their design expertise and generates qualified leads. ';
  moto5: string = 'Nakshatra Namaha Creations’ collaboration with Gencom resulted in a modern and informative website that effectively showcases their air compressor products and generates qualified leads.';

  ngAfterViewInit() {
    // Set initial positions of cards
    gsap.set('.card', {
      position: 'absolute',
      opacity: 1
    });

    // Scroll animations
    gsap.to('.card:nth-child(1)', {
      scrollTrigger: {
        trigger: '.display-wrapper',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      opacity: 1,
      y: -300,
      duration: 1
    });

    gsap.to('.card:nth-child(2)', {
      scrollTrigger: {
        trigger: '.display-wrapper',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      opacity: 1,
      y: -200,
      duration: 1
    });

    gsap.to('.card:nth-child(3)', {
      scrollTrigger: {
        trigger: '.display-wrapper',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      opacity: 1,
      y: -380,
      duration: 1
    });

    gsap.to('.card:nth-child(4)', {
      scrollTrigger: {
        trigger: '.display-wrapper',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      opacity: 1,
      y: -700,
      duration: 1
    });

    gsap.to('.card:nth-child(5)', {
      scrollTrigger: {
        trigger: '.display-wrapper',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      opacity: 1,
      y: -500,
      duration: 1
    });
  }

  stars: { x: number; y: number; glow: boolean; src: string }[] = [];

  constructor() {
    // Generate 500-510 stars with random positions and random star images
    const starCount = Math.floor(Math.random() * 11) + 800; // Between 500 and 510 stars
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
