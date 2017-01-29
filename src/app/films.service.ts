import { Injectable } from '@angular/core';

@Injectable()
export class FilmsService {

  films = [
    {
      id: 1,
      thumb: "../../assets/films/thumb.jpg",
      title: "Tytuł filmu",
      description: "Opis filmu",
      source: "../../assets/films/RoadTrip.mp4",
      category: "Komedia",
      director: "Adam Kowalski",
      actors: []
    },
    {
      id: 2,
      title: "Lorem ipsum",
      thumb: "../../assets/films/thumb.jpg",
      description: "Opis filmu",
      source: "../../assets/films/honey.mp4",
      category: "Komedia",
      director: "Adam Kowalski",
      actors: []
    },
    {
      id: 3,
      title: "Lorem ipsum",
      thumb: "../../assets/films/thumb.jpg",
      description: "Opis filmu",
      source: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      category: "Komedia",
      director: "Adam Kowalski",
      actors: []
    }
  ];

  constructor() { }

  getFilms(){
    return this.films;
  }

  getFilm(id){
    return this.films.find((item) => {
      return item.id === id;
    });
  }
}
