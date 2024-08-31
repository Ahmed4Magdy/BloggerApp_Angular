import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(_t7: NgForm) {
    throw new Error('Method not implemented.');
  }
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    const success = this.authService.login(this.email, this.password);
    if (success) {
      this.router.navigate(['/']); // Redirect to home page
    } else {
      alert('Invalid credentials');
    }
  }
}


