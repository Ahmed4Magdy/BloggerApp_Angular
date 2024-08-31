import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet, // Include RouterOutlet if routing is used
    HeaderComponent // Include HeaderComponent
  ]
})
export class AppComponent {
  title = 'my-angular-app';
}
