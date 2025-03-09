import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchLangService {
  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  swichLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);

    if (lang === 'en') {
      this.document.documentElement.dir = 'ltr';
      this.document.documentElement.lang = 'en';
    } else {
      this.document.documentElement.dir = 'rtl';
      this.document.documentElement.lang = 'ar';
    }
  }
}
