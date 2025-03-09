import { Component, HostListener, inject } from '@angular/core';
import { GlobalBtnComponent } from '../global-btn/global-btn.component';
import { FormsModule } from '@angular/forms';
import { SwitchLangService } from '../../core/services/switch-languages/switch-lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [GlobalBtnComponent, FormsModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedLang: string = localStorage.getItem('lang') || 'en';
  toggleMenuOpened: boolean = false;
  isScrolled = false;

  languageService = inject(SwitchLangService);

  changeLang(lang: string) {
    this.languageService.swichLang(lang);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = offset > 0;
  }
}
