import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { DubaiBusinessComponent } from './components/dubai-business/dubai-business.component';
import { WhyDubaiComponent } from './components/why-dubai/why-dubai.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, DubaiBusinessComponent, WhyDubaiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
