import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmsService } from './films.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FilmComponent } from './film/film.component';

const appRoutes: Routes = [
  { path: 'films', component: FilmsComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'film/:id', component: FilmComponent },
  { path: '',
    redirectTo: '/films',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    NavbarComponent,
    AboutComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
