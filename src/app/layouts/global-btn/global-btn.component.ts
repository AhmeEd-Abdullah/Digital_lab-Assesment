import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-global-btn',
  imports: [TranslateModule],
  templateUrl: './global-btn.component.html',
  styleUrl: './global-btn.component.scss',
})
export class GlobalBtnComponent {
  @Input('title') title!: string;
  @Input('color') color!: string;
  @Input('backgroundColor') backgroundColor!: string;

  constructor() {}
}
