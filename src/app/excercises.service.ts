import { Injectable } from '@angular/core';
import { IExcercise } from './app.component';
import { Newout } from '../../excercise';

@Injectable({
  providedIn: 'root',
})
export class ExcercisesService {
  constructor() {}

  API = 'https://66b0a8ac6a693a95b539a7ec.mockapi.io';

  addMovie(newworkout: Newout) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`${this.API}/Workouts`, {
      method: 'POST',
      body: JSON.stringify(newworkout),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }

  editMovie(updatedMovie: IExcercise) {
    // this.movieList.push(newMovie);

    // Put
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`${this.API}/Workouts/${updatedMovie.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedMovie),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }

  deleteMovie(movie: IExcercise) {
    return fetch(`${this.API}/Workouts/${movie.id}`, {
      method: 'Delete',
    }).then((res) => res.json());
  }

  getMovieByIdP(id: string): Promise<IExcercise> {
    return fetch(`${this.API}//Workouts/${id}`, {
      method: 'GET',
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
      },
    }).then((res) => {
      if (res.status != 200) {
        //this.router.navigate(['/login']);
        throw new Error('Not Authorized');
      }

      return res.json();
    });
  }

  getAllMoviesP(): Promise<IExcercise[]> {
    return fetch(`${this.API}/Workouts`).then((res) => res.json());
  }
}
