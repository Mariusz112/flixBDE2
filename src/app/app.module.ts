import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { Series1Component } from './series1/series1.component';
import { EpisodeComponent } from './episode/episode.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthInterceptor } from './auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { MovieComponent } from './movie/movie.component';
import { AdminComponent } from './admin/admin.component';

// Define routes for your application
const appRoutes: Routes = [
  // Define your routes here
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ComponentNameComponent,
    TvShowsComponent,
    Series1Component,
    EpisodeComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    MovieComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // Add the following provider for intercepting HTTP requests
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }