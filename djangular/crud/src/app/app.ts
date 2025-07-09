import { Component } from '@angular/core';
import { ApiService } from './api';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [ApiService]
})
export class App {
  movies = [{ id: 1, title: 'peli1', year: 2021 }, { id: 2, title: 'peli2', year: 2022 }];

  constructor(private api: ApiService) {
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        console.log(data);
        //this.movies = data
      },
      error => {
        console.log(error);
      }
    )
  }
}
