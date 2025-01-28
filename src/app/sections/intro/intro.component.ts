import { Component } from '@angular/core';
import { HostListener, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})

export class IntroComponent implements OnInit {
  private hero: HTMLElement | null = null;
  private text: HTMLElement | null = null;
  private range: number = 40; // 20px * 2

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Access the `.hero` div and the `h1` element
    this.hero = this.el.nativeElement.querySelector('.intro');
    this.text = this.hero?.querySelector('.motospan') || null;

    if (this.hero) {
      // Bind the `mousemove` event using Renderer2
      this.renderer.listen(this.hero, 'mousemove', this.shadow.bind(this));
    }
  }

  shadow(e: MouseEvent): void {
    if (!this.hero || !this.text) return;

    let { offsetX: x, offsetY: y } = e;

    if (e.target !== this.hero) {
      const target = e.target as HTMLElement;
      x += target.offsetLeft;
      y += target.offsetTop;
    }

    // Get hero's dimensions
    const { offsetWidth: width, offsetHeight: height } = this.hero;

    // Calculate shadow offset
    const xRange = Math.round((x / width) * this.range - this.range / 2);
    const yRange = Math.round((y / height) * this.range - this.range / 2);
    // console.log(xRange, yRange);

    // Apply text shadow
    this.renderer.setStyle(
      this.text,
      // 'text-shadow',
      // `${xRange}px ${yRange}px 0 rgba(0, 0, 0)`
      'text-shadow',
        ` ${xRange*(-0.10)}px ${yRange*(-0.10)}px 0 rgba(0, 0, 0),
          ${xRange*(-0.05)}px ${yRange*(-0.05)}px 0 rgba(0, 0, 0),
          ${xRange*0.00}px ${yRange*0.00}px 0 rgba(0, 0, 0),
          ${xRange*0.05}px ${yRange*0.05}px 0 rgba(0, 0, 0),
          ${xRange*0.10}px ${yRange*0.10}px 0 rgba(0, 0, 0),
          ${xRange*0.15}px ${yRange*0.15}px 0 rgba(0, 0, 0),
          ${xRange*0.20}px ${yRange*0.20}px 0 rgba(0, 0, 0),
          ${xRange*0.25}px ${yRange*0.25}px 0 rgba(0, 0, 0),
          ${xRange*0.30}px ${yRange*0.30}px 0 rgba(0, 0, 0),
          ${xRange*0.35}px ${yRange*0.35}px 0 rgba(0, 0, 0),
          ${xRange*0.40}px ${yRange*0.40}px 0 rgba(0, 0, 0),
          ${xRange*0.45}px ${yRange*0.45}px 0 rgba(0, 0, 0),
          ${xRange*0.50}px ${yRange*0.50}px 0 rgba(0, 0, 0),
          ${xRange*0.55}px ${yRange*0.55}px 0 rgba(0, 0, 0),
          ${xRange*0.60}px ${yRange*0.60}px 0 rgba(0, 0, 0),
          ${xRange*0.65}px ${yRange*0.65}px 0 rgba(0, 0, 0),
          ${xRange*0.70}px ${yRange*0.70}px 0 rgba(0, 0, 0),
          ${xRange*0.75}px ${yRange*0.75}px 0 rgba(0, 0, 0)`

    );
  }

  cursorSize = 20; // Initial cursor size
  isMoving = false;
  increaseInterval: any;
  decreaseInterval: any; // Define the decreaseInterval property

  onMouseMove(event: MouseEvent) {
      // console.log('mousemove');
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const div1 = document.querySelector('.div1') as HTMLElement;

    if (cursor && div1) {
      const x = event.clientX;
      const y = event.clientY;
      // console.log(x, y);

      // Update cursor position
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      // Apply mask effect to the div
      div1.style.maskImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0) ${this.cursorSize}px, rgba(0, 0, 0, 1) 0px)`;

      //Start increasing size if not already
      if (!this.isMoving) {
        this.isMoving = true;
        //this.cursorSize = 40; // Reset the size when movement starts
        const interval = setInterval(() => {
          if (this.isMoving) {
            this.cursorSize += 0.5; // Increase size while moving
          } else {
            clearInterval(interval); // Stop increasing when movement stops
          }
        }, 5); // Adjust the rate of size increment
      }

      // Clear the timeout to stop resizing after the cursor stops
      clearTimeout(this.increaseInterval);
      this.increaseInterval = setTimeout(() => {
        this.isMoving = false;
        //div1.style.maskImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0) ${this.cursorSize-7}px, rgba(0, 0, 0, 1) 0px)`;
        const interval1 = setInterval(() => {
          if (this.cursorSize > 50 && !this.isMoving) {
             // Increase size while moving
            div1.style.maskImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0) ${this.cursorSize}px, rgba(0, 0, 0, 1) 0px)`;
            this.cursorSize -= 0.85;
          } else {
            clearInterval(interval1); // Stop increasing when movement stops
          }
        }, 5);
      }, 100); // Stops increasing size after 200ms of no movement
    }
  }
} 

