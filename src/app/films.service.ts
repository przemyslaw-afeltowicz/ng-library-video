import { Injectable } from '@angular/core';

@Injectable()
export class FilmsService {

  films = [
    {
      id: 1,
      thumb: "http://news.mit.edu/sites/mit.edu.newsoffice/files/images/2016/MIT-Earth-Dish_0.jpg",
      title: "Tytuł filmu",
      description: "Opis filmu",
      source: "http://projekty.pro-comp.pl/nowy/video.mp4",
      category: "Komedia",
      director: "Adam Kowalski",
      actors: []
    },
    {
      id: 2,
      title: "Lorem ipsum",
      thumb: "http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg",
      description: "Opis filmu",
      source: "http://projekty.pro-comp.pl/nowy/video.mp4",
      category: "Dramat",
      director: "Piotr Nowak",
      actors: []
    },
    {
      id: 3,
      title: "Sintel",
      thumb: "https://vodo.net/media/screenshots/work_138.jpeg",
      description: "Opis filmu",
      source: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      category: "Komedia",
      director: "Przemysław Testowy",
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
