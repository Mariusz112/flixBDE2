import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-profile',
  template: `
    <div *ngIf="userSession">
      <h2>Welcome {{ userSession.email }}</h2>
      <p>{{ welcomeMessage }}</p>
      <button (click)="logout()">Log Off</button> <!-- Add Log Off button -->
      <button (click)="goToSubscriptionPage()">Subscription</button> <!-- Add Subscription button -->
      <button (click)="changePassword()">Change Password</button> <!-- Add Change Password button -->
    </div>
  `
})
export class ProfileComponent {
  userSession: any;
  welcomeMessage: string;

  constructor(private authService: AuthService) {
    this.userSession = this.authService.getUserSession();
    this.welcomeMessage = 'Welcome to your profile page!';
  }

  logout(): void {
    this.authService.clearUserSession();
    // You can also add additional code here, such as redirecting the user to another page
  }

  goToSubscriptionPage(): void {
    // Add the code to navigate to the subscription page
  }

  changePassword(): void {
    // Add the code to change the password
  }
}