import { Component } from '@angular/core';
import { AuthService } from '../../core/services/authentication/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [FormsModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = 'emilys';
  password: string = 'emilyspass';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res: any) => {
        localStorage.setItem('accessToken', res.accessToken);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      },
    });
  }
}
