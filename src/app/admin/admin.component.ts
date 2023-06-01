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
  
    const requestBody = {
      title: 'implement extensible schemas3',
      duration: '7422',
      description: 'Wonder each design moment quickly total turn. Tend claim listen short. Form half ok computer set.',
      releaseDate: '2012-04-23',
      poster: 'https://fwcdn.pl/fpo/10/45/1045/7563795.2.jpg',
      director: 'Caroline Krueger',
      actorsCast: ['Actor1', 'Actor2'],
      path: './',
      genreTag: ['Romance', 'Comedy']
    };
  
    this.http.post('http://localhost:8080/api/film', JSON.stringify(requestBody), { headers }).subscribe(
      (response) => {
        console.log('Film added successfully!');
        // Reset the form
        this.newFilm = {
          title: '',
          director: '',
          duration: 0,
          releaseDate: '',
          description: '',
          poster: '',
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
