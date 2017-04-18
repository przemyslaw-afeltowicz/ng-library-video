import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Injectable()
export class FilmsService {

  films = [
    {
      id: 1,
      thumb: "http://s.redefine.pl/dcs/o2/redefine/vm2images/xu/xuv1rcqi7knjje5rsee3a8j4y3zm2oe5.jpg",
      title: "10-lecie Kabaretu Skeczów Męczących - Część II",
      description: "Dla czcigodnego jubilata wystąpią zespoły Feel i Enej, kabaret Łowcy.B i Andrzej Grabows...",
      source: "http://n-3-8.dcs.redcdn.pl/webcache/rdf2/redefine/p/vm2movies/ir/irgujr89gvxojpsq5pf5s2szd5rcmy2j.mp4",
      category: "Komedia",
      director: "Adam Kowalski",
      actors: []
    },
    {
      id: 2,
      title: "Świat według Kiepskich - Odcinek 511",
      thumb: "http://s.redefine.pl/dcs/o2/redefine/vm2images/a3/a3gr6hu7a8isn543k8ttj41g4ufr7c2n.jpg",
      description: "Halina przypadkowo znajduje w piwnicy stary album rodzinny...",
      source: "http://n-3-20.dcs.redcdn.pl/webcache/rdf1/redefine/p/vm2movies/xf/xfahf2b2uqrbkzm122pmmicppgimnfcp.mp4",
      category: "Dramat",
      director: "Piotr Nowak",
      actors: []
    },
    {
      id: 3,
      title: "Idol - Odcinek 9",
      thumb: "http://s.redefine.pl/dcs/o2/redefine/vm2images/gn/gnywtqzp981f2ky3tkmw3yoy8k5jabx2.jpg",
      description: "Zaczęło się eliminowanie finalistów „Idola”. Pierwszy uczestnik odpadł po występie na żywo. Tym razem to widzowie decydowali o „być albo nie być” kandydatów na gwiazdy...",
      source: "http://n-3-23.dcs.redcdn.pl/webcache/rdf1/redefine/p/vm2movies/g4/g47822ukch3dewyqf4gqftp2ch5uq5v7.mp4",
      category: "Komedia",
      director: "Przemysław Testowy",
      actors: []
    },
    {
      id: 4,
      title: "Zdrady - Odcinek 106",
      thumb: "http://s.redefine.pl/dcs/o2/redefine/vm2images/ge/gehhfaz538msgocvgceywa444vbc1oip.jpg",
      description: "Marek Kuchciński (29 l.) ożenił się z Elizą (27 l.) sześć tygodni temu. Mimo iż od dnia ślubu minęło już trochę czasu, ona wciąż nie zachowuje...",
      source: "http://n-3-5.dcs.redcdn.pl/webcache/rdf2/redefine/p/vm2movies/bj/bjkwyjueh9c372dbe6n1ngekxihj3q2g.mp4",
      category: "Polish rap",
      director: "Paluch",
      actors: []
    }

  ];

  constructor(private http: Http) {}

  getFilms() {
    return this.films;
  }

  getArtist(){
    return this.http.get('https://api.spotify.com/v1/search?q=eminem&type=artist');
  }

  getFilm(id) {
    return this.films.find((item) => {
      return item.id === id;
    });
  }
}
