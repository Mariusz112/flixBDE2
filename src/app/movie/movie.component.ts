import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  films: Film[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.http.get<Film[]>('http://localhost:8080/api/film/all').subscribe(
      (response: Film[]) => {
        this.films = response;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  redirectToMovieDetail(id: number) {
    this.router.navigate(['/movie-detail', id]);
  }
}