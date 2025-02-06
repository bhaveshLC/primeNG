import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToggleSwitch } from 'primeng/toggleswitch';
@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [ToggleSwitch, FormsModule, CommonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.css',
})
export class ToggleThemeComponent {
  theme = true;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.toggle();
  }
  toggle() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }
}
