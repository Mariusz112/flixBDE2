import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  newFilm: Film = {
    id: 0,
    title: '0',
    director: '',
    genre: '',
    duration: 0,
    releaseDate: '',
    description: '',
    poster: '',
    actorsCast: '',
    genreTag: ''
  };

  constructor(private http: HttpClient) {}

  addFilm() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    const requestBody = {
      title: 'implement extensible schemas',
      duration: 7422,
      description: 'Wonder each design moment quickly total turn. Tend claim listen short. Form half ok computer set.',
      releaseDate: '2012-04-23',
      poster: './',
      director: 'Caroline Krueger',
      actorsCast: ['Actor1', 'Actor2'],
      genreTag: ['Romance', 'Comedy']
    };
  
    this.http.post('http://localhost:8080/api/film', requestBody, { headers }).subscribe(
      (response) => {
        console.log('Film added successfully!');
        // Reset the form
        this.newFilm = {
          id: 0,
          title: '0',
          director: '',
          genre: '',
          duration: 0,
          releaseDate: '',
          description: '',
          poster: '',
          actorsCast: '',
          genreTag: ''
        };
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}