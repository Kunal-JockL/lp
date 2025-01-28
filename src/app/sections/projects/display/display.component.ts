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
      y: -20,
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
      y: -40,
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
      y: -60,
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
      y: -80,
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
      y: -100,
      duration: 1
    });
  }
}
