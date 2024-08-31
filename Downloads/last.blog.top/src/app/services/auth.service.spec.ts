import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

class MockRouter {
  navigate(commands: any[]) {}
}

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useClass: MockRouter }
      ]
    });
    service = TestBed.inject(AuthService);
    service.signup('test@example.com', 'password123', 'Test User'); // Setup initial user
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in with correct credentials', () => {
    const result = service.login('test@example.com', 'password123');
    expect(result).toBeTrue();
    expect(service.getCurrentUser()).toEqual({ email: 'test@example.com', fullName: 'Test User' });
  });

  it('should not log in with incorrect credentials', () => {
    const result = service.login('wrong@example.com', 'wrongpassword');
    expect(result).toBeFalse();
    expect(service.getCurrentUser()).toBeNull();
  });
});
