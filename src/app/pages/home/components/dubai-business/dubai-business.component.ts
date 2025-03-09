import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GlobalBtnComponent } from '../../../../layouts/global-btn/global-btn.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-dubai-business',
  imports: [GlobalBtnComponent, TranslateModule, CommonModule],
  templateUrl: './dubai-business.component.html',
  styleUrl: './dubai-business.component.scss',
})
export class DubaiBusinessComponent {
  @Input('displayGallery') displayGallery: boolean = false;
  @ViewChild('animatedHeader', { static: true }) animatedHeader!: ElementRef;
  @ViewChild('extraContent', { static: true }) extraContent!: ElementRef;

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    gsap.from('.animated-header', {
      scrollTrigger: {
        trigger: this.animatedHeader.nativeElement,
        start: 'top 80%',
        toggleActions: 'play reverse play none',
      },
      y: 50,
      stagger: 0.3,
      duration: 2,
    });

    if (this.displayGallery) {
      gsap.from(
        '.top-1, .top-2, .second-1, .second-2, .third-1, .third-2, .last-1, .last-2',
        {
          scrollTrigger: {
            trigger: '.top-part',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: (index, target) => {
            return gsap.utils.random(-200, 200);
          },
          opacity: 0,
          stagger: 0.2,
          duration: 1,
        }
      );
    }
  }
}
