import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../films.service';
import {Film} from "../film";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  id: number;
  film: Film;

  constructor(private _route: ActivatedRoute, private _service: FilmsService) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.film = this._service.getFilm(this.id);
  }

  progress(video, range){
    let procent = (video.currentTime / video.duration) * 100;
    range.value = procent;
  }

  setFullScreen(video){
    video.webkitEnterFullScreen();
  }

  setPlay(video, button){
    if(video.paused){
      video.play();
      button.textContent = "Pause";
    }else{
      video.pause();
      button.textContent = "Play";
    }
  }

  setTime(video, range){
    let sec = (video.duration * range.value) / 100;
    video.currentTime = sec;
    video.play();
  }

}
