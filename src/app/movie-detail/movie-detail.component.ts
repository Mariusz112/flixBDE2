import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface FilmDetail {
  id: string;
  title: string;
  duration: number;
  description: string;
  releaseDate: string;
  poster: string;
  director: string;
  actorsCast: string[];
  genreTag: string[];
  path: string;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  filmDetail: FilmDetail | null = null;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const filmId = this.route.snapshot.paramMap.get('id');
    if (filmId !== null) {
      this.getFilmDetail(filmId);
    }
  }

  getFilmDetail(id: string) {
    this.http.get<FilmDetail>('http://localhost:8080/api/film?id=' + id).subscribe(
      (response: FilmDetail) => {
        this.filmDetail = response;
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.errorMessage = 'Film not found.';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
    );
  }
}
