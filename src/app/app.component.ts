import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchLangService } from './core/services/switch-languages/switch-lang.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private switchLangService: SwitchLangService) {}

  ngOnInit(): void {
    this.switchLangService.swichLang(localStorage.getItem('lang') || 'en');
  }
}
