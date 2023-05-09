import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { Series1Component } from './series1/series1.component';
import { EpisodeComponent } from './episode/episode.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'series1', component: Series1Component},
  { path: 'episode', component: EpisodeComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
