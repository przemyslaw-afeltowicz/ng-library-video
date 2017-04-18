import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films = [];
  artist = {};

  constructor(private filmsService: FilmsService ) { }

  ngOnInit() {
    this.films = this.filmsService.getFilms();
    this.filmsService.getArtist()
      .subscribe(res => {
        this.artist = res.json();
      });
  }

}
