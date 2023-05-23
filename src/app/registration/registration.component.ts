import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  registerUser() {
    if (this.registrationForm.invalid) {
      // Handle form validation errors
      return;
    }

    const email = this.registrationForm.get('email')!.value;
    const password = this.registrationForm.get('password')!.value;
    const confirmPassword = this.registrationForm.get('confirmPassword')!.value;

    const registrationData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    this.http.post('http://localhost:8080/api/authentication/signup', registrationData).subscribe(
      (response) => {
        console.log('Registration response:', response);

      },
      (error) => {
        console.log('Registration error:', error);

      }
    );
  }
}