import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.message = ''; // Initialize the 'message' property
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    console.log('Submitting login form with data:', loginData);

    this.http.post('http://localhost:8080/api/authentication/signin', loginData).subscribe(
      (response: any) => {
        console.log('Login response:', response);

        // Store the user session in the AuthService
        this.authService.setUserSession(response);

        this.message = 'Login successful!'; // Set success message
        // handle successful response from server here
      },
      (error) => {
        console.log('Login error:', error);
        this.message = 'Invalid email or password.'; // Set error message
        // handle error response from server here
      }
    );
  }
}