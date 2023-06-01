import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  newFilm = {
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

    this.http.post('http://localhost:8080/api/film', this.newFilm, { headers }).subscribe(
      () => {
        console.log('Film added successfully!');
        // Reset the form
        this.newFilm = {
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
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
