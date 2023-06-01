import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

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
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.message = '';
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

        this.authService.setUserSession(response);

        this.message = 'Login successful!';

        // Navigate to the profile page
        this.router.navigateByUrl('/profile');
      },
      (error) => {
        console.log('Login error:', error);
        this.message = 'Invalid email or password.';
      }
    );
  }
}