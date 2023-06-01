import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_SESSION_KEY = 'userSession';
  private readonly LOGOUT_URL = 'http://localhost:8080/api/authentication/signout'; // Replace with your actual logout URL

  constructor(
    private cookieService: CookieService,
    private http: HttpClient
  ) {}

  setUserSession(userSession: any): void {
    this.cookieService.set(this.USER_SESSION_KEY, JSON.stringify(userSession));
  }

  getUserSession(): any {
    const userSession = this.cookieService.get(this.USER_SESSION_KEY);
    return userSession ? JSON.parse(userSession) : null;
  }

  clearUserSession(): void {
    this.cookieService.delete(this.USER_SESSION_KEY);

    // Perform the logout request to the server
    this.http.post(this.LOGOUT_URL, {}).subscribe(
      (response: any) => {
        console.log('Logout response:', response);
      },
      (error) => {
        console.log('Logout error:', error);
      }
    );
  }
}