import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_SESSION_KEY = 'userSession';

  constructor(private cookieService: CookieService) {}

  setUserSession(userSession: any): void {
    this.cookieService.set(this.USER_SESSION_KEY, JSON.stringify(userSession));
  }

  getUserSession(): any {
    const userSession = this.cookieService.get(this.USER_SESSION_KEY);
    return userSession ? JSON.parse(userSession) : null;
  }

  clearUserSession(): void {
    this.cookieService.delete(this.USER_SESSION_KEY);
  }
}