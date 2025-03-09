import { AsyncPipe, SlicePipe } from '@angular/common';
import { WhyDubaiService } from './../../../../core/services/why-dubai/why-dubai.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalBtnComponent } from '../../../../layouts/global-btn/global-btn.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-dubai',
  imports: [AsyncPipe, SlicePipe, GlobalBtnComponent, TranslateModule],
  templateUrl: './why-dubai.component.html',
  styleUrl: './why-dubai.component.scss',
})
export class WhyDubaiComponent implements OnInit {
  dubaiTodos$!: Observable<{ todos: { todo: string }[] }>;
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
}
