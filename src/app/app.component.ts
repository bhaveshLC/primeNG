import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitch } from 'primeng/toggleswitch';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ToggleSwitch, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'demo';
  value: string = '';
  theme = true;
  toggle() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }
}
