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
  film: Film | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  

  ngOnInit() {
    console.log(this.film);
    this.getFilmDetails();
  }

  getFilmDetails() {
    const id = this.route.snapshot.params['id'];
    this.http.get<Film>('http://localhost:8080/api/film/' + id).subscribe(
      (response: Film) => {
        this.film = response;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
