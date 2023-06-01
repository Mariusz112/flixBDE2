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
    title: '',
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
      title: this.newFilm.title,
      duration: this.newFilm.duration,
      description: this.newFilm.description,
      releaseDate: this.newFilm.releaseDate,
      poster: this.newFilm.poster,
      director: this.newFilm.director,
      actorsCast: this.newFilm.actorsCast.split(',').map(actor => actor.trim()),
      genreTag: this.newFilm.genreTag.split(',').map(genre => genre.trim())
    };
  
    this.http.post('http://localhost:8080/api/film', requestBody, { headers }).subscribe(
      (response) => {
        console.log('Film added successfully!');
        // Reset the form
        this.newFilm = {
          id: 0,
          title: '',
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