import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // List of users stored in memory
  private users: { email: string, password: string, fullName: string }[] = [
    { email: 'Ahmed@gmail.com', password: 'a22', fullName: 'AhmedMagdy' }
  ];

  // Current logged-in user stored in memory
  private currentUser: { email: string, fullName: string } | null = null;

  constructor(private router: Router) {}

  // Method to sign up a new user
  signup(email: string, password: string, fullName: string): boolean {
    // Validate input
    if (!email || !password || !fullName) {
      return false; // Input fields cannot be empty
    }

    // Check if the email already exists in the users list
    const userExists = this.users.some(user => user.email === email);
    if (!userExists) {
      // Add the new user to the list
      this.users.push({ email, password, fullName });
      return true; // Signup successful
    }
    return false; // Email already exists
  }

  // Method to log in an existing user
  login(email: string, password: string): boolean {
    // Validate input
    if (!email || !password) {
      return false; // Email and password cannot be empty
    }

    // Find the user with the matching email and password
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      // Set the current user in memory
      this.currentUser = { email: user.email, fullName: user.fullName };
      return true; // Login successful
    }
    return false; // Invalid credentials
  }

  // Method to log out the current user
  logout(): void {
    // Clear the current user from memory
    this.currentUser = null;
    // Navigate to the login page
    this.router.navigate(['/login']);
  }

  // Method to get the current logged-in user
  getCurrentUser() {
    return this.currentUser;
  }

  // Method to check if a user is authenticated (logged in)
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}














// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private users: { email: string, password: string, fullName: string }[] = [
//     { email: 'Ahmed@gmail.com', password: 'Ahmed22', fullName: 'AhmedMagdy' }
//   ];
//   private currentUser: { email: string, fullName: string } | null = null;

//   constructor(private router: Router) {}

//   signup(email: string, password: string, fullName: string): boolean {
//     const userExists = this.users.some(user => user.email === email);
//     if (!userExists) {
//       this.users.push({ email, password, fullName });
//       return true;
//     }
//     return false;
//   }

//   login(email: string, password: string): boolean {
//     const user = this.users.find(user => user.email === email && user.password === password);
//     if (user) {
//       this.currentUser = { email: user.email, fullName: user.fullName };
//       localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
//       return true;
//     }
//     return false;
//   }

//   logout(): void {
//     this.currentUser = null;
//     localStorage.removeItem('currentUser');
//     this.router.navigate(['/login']);
//   }

//   getCurrentUser() {
//     return this.currentUser;
//   }

//   isAuthenticated(): boolean {
//     return !!this.currentUser;
//   }
// }





// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private readonly usersKey = 'users';
//   private readonly currentUserKey = 'currentUser';

//   constructor(private router: Router) {}

//   signup(email: string, password: string, fullName: string): boolean {
//     const users = this.getUsers();
//     const userExists = users.some(user => user.email === email);
//     if (!userExists) {
//       users.push({ email, password, fullName });
//       localStorage.setItem(this.usersKey, JSON.stringify(users));
//       return true;
//     }
//     return false;
//   }

//   login(email: string, password: string): boolean {
//     const users = this.getUsers();
//     const user = users.find(user => user.email === email && user.password === password);
//     if (user) {
//       const currentUser = { email: user.email, fullName: user.fullName };
//       localStorage.setItem(this.currentUserKey, JSON.stringify(currentUser));
//       return true;
//     }
//     return false;
//   }

//   logout(): void {
//     localStorage.removeItem(this.currentUserKey);
//     this.router.navigate(['/login']);
//   }

//   getCurrentUser() {
//     const user = localStorage.getItem(this.currentUserKey);
//     return user ? JSON.parse(user) : null;
//   }

//   isAuthenticated(): boolean {
//     return !!this.getCurrentUser();
//   }

//   private getUsers(): { email: string, password: string, fullName: string }[] {
//     const users = localStorage.getItem(this.usersKey);
//     return users ? JSON.parse(users) : [];
//   }
// }

















// import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// import { Router } from '@angular/router';
// import { isPlatformBrowser } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private readonly usersKey = 'users';
//   private readonly currentUserKey = 'currentUser';

//   constructor(
//     private router: Router,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   private isBrowser(): boolean {
//     return isPlatformBrowser(this.platformId);
//   }

//   signup(email: string, password: string, fullName: string): boolean {
//     if (!this.isBrowser()) {
//       return false;
//     }

//     const users = this.getUsers();
//     const userExists = users.some(user => user.email === email);
//     if (!userExists) {
//       users.push({ email, password, fullName });
//       localStorage.setItem(this.usersKey, JSON.stringify(users));
//       return true;
//     }
//     return false;
//   }

//   login(email: string, password: string): boolean {
//     if (!this.isBrowser()) {
//       return false;
//     }

//     const users = this.getUsers();
//     const user = users.find(user => user.email === email && user.password === password);
//     if (user) {
//       const currentUser = { email: user.email, fullName: user.fullName };
//       localStorage.setItem(this.currentUserKey, JSON.stringify(currentUser));
//       return true;
//     }
//     return false;
//   }

//   logout(): void {
//     if (!this.isBrowser()) {
//       return;
//     }

//     localStorage.removeItem(this.currentUserKey);
//     this.router.navigate(['/login']);
//   }

//   getCurrentUser() {
//     if (!this.isBrowser()) {
//       return null;
//     }

//     const user = localStorage.getItem(this.currentUserKey);
//     return user ? JSON.parse(user) : null;
//   }

//   isAuthenticated(): boolean {
//     return !!this.getCurrentUser();
//   }

//   private getUsers(): { email: string, password: string, fullName: string }[] {
//     if (!this.isBrowser()) {
//       return [];
//     }

//     const users = localStorage.getItem(this.usersKey);
//     return users ? JSON.parse(users) : [];
//   }
// }


// import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// import { Router } from '@angular/router';
// import { isPlatformBrowser } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private readonly usersKey = 'users';
//   private readonly currentUserKey = 'currentUser';

//   constructor(
//     private router: Router,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   private isBrowser(): boolean {
//     return isPlatformBrowser(this.platformId);
//   }

//   signup(email: string, password: string, fullName: string): boolean {
//     if (!this.isBrowser()) {
//       return false;
//     }

//     const users = this.getUsers();
//     // Check if the email already exists
//     const userExists = users.some(user => user.email === email);
//     if (!userExists) {
//       // Add the new user
//       users.push({ email, password, fullName });
//       localStorage.setItem(this.usersKey, JSON.stringify(users));
//       return true; // Signup successful
//     }
//     return false; // Email already exists
//   }

//   login(email: string, password: string): boolean {
//     if (!this.isBrowser()) {
//       return false;
//     }

//     const users = this.getUsers();
//     // Check if the email and password match
//     const user = users.find(user => user.email === email && user.password === password);
//     if (user) {
//       const currentUser = { email: user.email, fullName: user.fullName };
//       localStorage.setItem(this.currentUserKey, JSON.stringify(currentUser));
//       return true; // Login successful
//     }
//     return false; // Invalid credentials
//   }

//   logout(): void {
//     if (!this.isBrowser()) {
//       return;
//     }

//     localStorage.removeItem(this.currentUserKey);
//     this.router.navigate(['/login']); // Redirect to login page
//   }

//   getCurrentUser() {
//     if (!this.isBrowser()) {
//       return null;
//     }

//     const user = localStorage.getItem(this.currentUserKey);
//     return user ? JSON.parse(user) : null;
//   }

//   isAuthenticated(): boolean {
//     return !!this.getCurrentUser();
//   }

//   private getUsers(): { email: string, password: string, fullName: string }[] {
//     if (!this.isBrowser()) {
//       return [];
//     }

//     const users = localStorage.getItem(this.usersKey);
//     return users ? JSON.parse(users) : [];
//   }
// }

// import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// import { Router } from '@angular/router';
// import { isPlatformBrowser } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private readonly usersKey = 'users';
//   private readonly currentUserKey = 'currentUser';

//   constructor(
//     private router: Router,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   private isBrowser(): boolean {
//     return isPlatformBrowser(this.platformId);
//   }

//   signup(email: string, password: string, fullName: string): boolean {
//     if (!this.isBrowser()) {
//       return false;
//     }

//     const users = this.getUsers();
//     // Check if the email already exists
//     const userExists = users.some(user => user.email === email);
//     if (!userExists) {
//       // Add the new user (without storing the password)
//       users.push({ email, password, fullName });
//       localStorage.setItem(this.usersKey, JSON.stringify(users));
//       return true; // Signup successful
//     }
//     return false; // Email already exists
//   }

//   login(email: string, password: string): boolean {
//     if (!this.isBrowser()) {
//       return false;
//     }

//     const users = this.getUsers();
//     // Check if the email and password match
//     const user = users.find(user => user.email === email && user.password === password);
//     if (user) {
//       const currentUser = { email: user.email, fullName: user.fullName };
//       localStorage.setItem(this.currentUserKey, JSON.stringify(currentUser));
//       return true; // Login successful
//     }
//     return false; // Invalid credentials
//   }

//   logout(): void {
//     if (!this.isBrowser()) {
//       return;
//     }

//     localStorage.removeItem(this.currentUserKey);
//     this.router.navigate(['/login']); // Redirect to login page
//   }

//   getCurrentUser() {
//     if (!this.isBrowser()) {
//       return null;
//     }

//     const user = localStorage.getItem(this.currentUserKey);
//     return user ? JSON.parse(user) : null;
//   }

//   isAuthenticated(): boolean {
//     return !!this.getCurrentUser();
//   }

//   private getUsers(): { email: string, password: string, fullName: string }[] {
//     if (!this.isBrowser()) {
//       return [];
//     }

//     const users = localStorage.getItem(this.usersKey);
//     return users ? JSON.parse(users) : [];
//   }
// }
