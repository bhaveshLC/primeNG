import { Component, ViewEncapsulation } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToggleThemeComponent } from '../../core/resusable/toggle-theme/toggle-theme.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    ToggleThemeComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/home'],
      },
      {
        label: 'Courses',
        icon: 'pi pi-book',
        routerLink: ['/courses'],
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: ['/profile'],
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: ['/settings'],
      },
    ];
  }
}
