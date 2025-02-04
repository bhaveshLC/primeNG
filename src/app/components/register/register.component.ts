import { Component } from '@angular/core';
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
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Select } from 'primeng/select';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  selector: 'app-register',
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
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  phoneNumber: string = '';
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });
  genders = [
    { name: 'Male', code: 'male' },
    { name: 'Female', code: 'female' },
    { name: 'Other', code: 'other' },
  ];
  onRegister() {
    console.log(this.registerForm.value);
  }
}
