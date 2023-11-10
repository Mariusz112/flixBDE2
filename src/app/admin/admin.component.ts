import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Film {
  title: string;
  duration: number;
  description: string;
  releaseDate: string;
  poster: string;
  director: string;
  actorsCast: string[];
  path: string;
  genreTag: string[];
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  newFilm: Film = {
    title: '',
    duration: 0,
    description: '',
    releaseDate: '',
    poster: '',
    director: '',
    actorsCast: [],
    path: '',
    genreTag: []
  };

  constructor(private http: HttpClient) {}

  addFilm() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const requestBody: Film = {
      title: this.newFilm.title,
      duration: this.newFilm.duration,
      description: this.newFilm.description,
      releaseDate: this.newFilm.releaseDate,
      poster: this.newFilm.poster,
      director: this.newFilm.director,
      actorsCast: Array.isArray(this.newFilm.actorsCast)
        ? this.newFilm.actorsCast.map((actor: string) => actor.trim())
        : [],
      path: this.newFilm.path,
      genreTag: Array.isArray(this.newFilm.genreTag)
        ? this.newFilm.genreTag.map((genre: string) => genre.trim())
        : []
    };

    this.http.post<Film>('http://localhost:8080/api/film', requestBody, { headers }).subscribe(
      (response) => {
        console.log('Film added successfully!', response);
        // Reset the form
        this.newFilm = {
          title: '',
          duration: 0,
          description: '',
          releaseDate: '',
          poster: '',
          director: '',
          actorsCast: [],
          genreTag: [],
          path: ''
        };
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
