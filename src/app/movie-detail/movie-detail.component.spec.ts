import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  film: Film | null = null;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const filmId = this.route.snapshot.params['id'];
    this.getFilmById(filmId);
  }

  getFilmById(id: string) {
    this.http.get<Film>('http://localhost:8080/api/film/' + id).subscribe(
      (response: Film) => {
        this.film = response;
        this.error = null;
      },
      (error) => {
        this.error = 'Film not found';
        console.log('Error:', error);
      }
    );
  }
}