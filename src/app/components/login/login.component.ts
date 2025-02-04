import { Component, inject } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  router = inject(Router);
  onLogin() {
    if (this.email == 'admin@gmail.com' && this.password == '12345') {
      this.router.navigateByUrl('/home');
    } else {
      alert('Invalid credentials');
    }
  }
}
