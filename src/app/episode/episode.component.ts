import { Component } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {
  episodeTitle = "Episode 1: Pilot";
  episodeSummary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
}