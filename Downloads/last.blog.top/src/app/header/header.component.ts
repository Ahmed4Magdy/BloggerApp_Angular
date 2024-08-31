import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; // Import RouterOutlet if routing is used
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AuthService } from '../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true, 
  imports: [
    RouterOutlet, 
    MatToolbarModule, 
    MatButtonModule, // Include MatButtonModule
    CommonModule,
    RouterModule // Include CommonModule for *ngIf and other common directives
  ]
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  
}
