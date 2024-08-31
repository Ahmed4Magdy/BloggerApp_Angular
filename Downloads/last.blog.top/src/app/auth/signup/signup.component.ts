import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    const success = this.authService.signup(this.email, this.password, this.fullName);
    if (success) {
      this.router.navigate(['/blogs']);
    } else {
      alert('User already exists');
    }
  }
}
