import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  registerUser() {

    if (this.password !== this.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    const registrationPayload = {
      email: this.email,
      password: this.password
    };



    console.log('Registering user:', this.email, this.password, this.confirmPassword);
  }
}