import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const filmId = this.route.snapshot.paramMap.get('id');
    if (filmId !== null) {
      this.getFilmDetail(filmId);
    }
  }

  getFilmDetail(id: string) {
    const url = 'http://localhost:8080/api/film/id';
    const requestBody = { id: id };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<FilmDetail>(url, requestBody, { headers }).subscribe(
      (response: FilmDetail) => {
        this.filmDetail = response;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
