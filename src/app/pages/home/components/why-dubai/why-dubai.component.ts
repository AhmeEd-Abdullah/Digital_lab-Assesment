import { AsyncPipe, SlicePipe } from '@angular/common';
import { WhyDubaiService } from './../../../../core/services/why-dubai/why-dubai.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalBtnComponent } from '../../../../layouts/global-btn/global-btn.component';
import { TranslateModule } from '@ngx-translate/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-why-dubai',
  imports: [AsyncPipe, SlicePipe, GlobalBtnComponent, TranslateModule],
  templateUrl: './why-dubai.component.html',
  styleUrl: './why-dubai.component.scss',
})
export class WhyDubaiComponent implements OnInit, AfterViewInit {
  dubaiTodos$!: Observable<{ todos: { todo: string }[] }>;
  @ViewChild('mainContent', { static: true }) mainContent!: ElementRef;

  constructor(private whyDubaiService: WhyDubaiService) {}

  dubaiAdvantages: string[] = [
    'WHY_DUBAI.ADVANTAGES.STABLE_ECONOMY',
    'WHY_DUBAI.ADVANTAGES.INNOVATIVE_ADVANCEMENTS',
    'WHY_DUBAI.ADVANTAGES.STABLE_ECONOMY',
    'WHY_DUBAI.ADVANTAGES.HOME_OF_STARTUPS',
    'WHY_DUBAI.ADVANTAGES.STRATEGIC_LOCATION',
  ];

  ngOnInit(): void {
    this.dubaiTodos$ = this.whyDubaiService.getDubaiAdvantages();
  }

  ngAfterViewInit(): void {
    this.animateElements();
  }

  animateElements() {
    const article = this.mainContent.nativeElement;

    gsap.from(article.querySelector('.header h1'), {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: article,
        start: 'top 70%',
      },
    });

    gsap.from(article.querySelector('.card'), {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: article,
        start: 'top 70%',
      },
    });

    gsap.from(article.querySelectorAll('.some-details .detail'), {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: article,
        start: 'top 20%',
      },
    });

    gsap.from(article.querySelector('app-global-btn'), {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: article,
        start: 'top 70%',
      },
    });
  }
}
