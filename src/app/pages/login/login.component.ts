import { Component, inject } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/service/Auth/auth.service';
import { ToastService } from '../../core/service/Toast/toast.service';
import { ToggleThemeComponent } from '../../core/resusable/toggle-theme/toggle-theme.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
    ToggleThemeComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  toastService = inject(ToastService);
  loading: boolean = false;
  router = inject(Router);
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  onLogin() {
    this.loading = true;
    const loginObj = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    };
    this.authService.loginUser(loginObj).subscribe(
      (res: any) => {
        this.toastService.showToast(
          'success',
          'Success',
          'Logged in successfully'
        );
        localStorage.setItem('token', res.token);
        this.loading = false;
        this.router.navigateByUrl('/home');
      },
      (err) => {
        this.loading = false;
        this.toastService.showToast('error', 'Error', err.error.message);
      }
    );
  }
}
