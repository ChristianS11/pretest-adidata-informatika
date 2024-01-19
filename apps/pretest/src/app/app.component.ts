import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

import { HeaderComponent } from '@pretest/header';
import { FooterComponent } from '@pretest/footer';
import { SidebarComponent } from '@pretest/sidebar';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, HeaderComponent, SidebarComponent, FooterComponent, RouterModule],
  selector: 'pretest-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pretest';

  
}
