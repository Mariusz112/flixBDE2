import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
    this.message = ''; // Initialize the 'message' property
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  registerUser() {
    const registrationData = {
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password
    };

    console.log('Submitting registration form with data:', registrationData);

    this.http.post('http://localhost:8080/api/authentication/signup', registrationData).subscribe(
      (response) => {
        console.log('Registration response:', response);
        this.message = 'Registration successful!'; // Set success message
        // handle successful response from server here
      },
      (error) => {
        console.log('Registration error:', error);
        this.message = 'Registration failed.'; // Set error message
        // handle error response from server here
      }
    );
  }
}