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
import { RadioButton } from 'primeng/radiobutton';
import { AuthService } from '../../core/service/Auth/auth.service';
import { ToastService } from '../../core/service/Toast/toast.service';
import { PasswordModule } from 'primeng/password';
import { AvatarModule } from 'primeng/avatar';
import { ToggleThemeComponent } from '../../core/resusable/toggle-theme/toggle-theme.component';
@Component({
  selector: 'app-register',
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
    RadioButton,
    PasswordModule,
    AvatarModule,
    ToggleThemeComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [ToastService],
})
export class RegisterComponent {
  loading: boolean = false;
  authService = inject(AuthService);
  toastService = inject(ToastService);
  router = inject(Router);
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });
  onRegister() {
    this.loading = true;
    let userObj = {
      name: this.registerForm.value.name!,
      username: this.registerForm.value.username!,
      email: this.registerForm.value.email!,
      password: this.registerForm.value.password!,
      role: this.registerForm.value.role!,
    };
    this.authService.registerUser(userObj).subscribe(
      (res) => {
        this.loading = false;
        this.toastService.showToast(
          'success',
          'Success',
          'User Registered Successfully'
        );
        this.router.navigateByUrl('');
      },
      (err) => {
        this.toastService.showToast('error', 'Error', err.error.message);
        this.loading = false;
        console.error('Error registering:', err);
      }
    );
  }
}
