import { Injectable } from '@angular/core';
import { IExcercise } from './app.component';
import { Newout } from '../../excercise';
import { API } from '../../global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExcercisesService {
  constructor(private http: HttpClient) {}

  searchUser(searchTerm: string) {
    return this.http.get(`${API}/Excercise?search=${searchTerm}`);
  }

  addMovie(newworkout: Newout) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`${API}/Excercise`, {
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
    console.log('Editing exercise with ID:', updatedMovie.ValueId);

    return fetch(`${API}/Excercise/${updatedMovie.ValueId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedMovie),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }

  deleteMovie(movie: IExcercise) {
    return fetch(`${API}/Excercise/${movie.ValueId}`, {
      method: 'Delete',
    }).then((res) => res.json());
  }

  getMovieByIdP(id: string): Promise<IExcercise> {
    return fetch(`${API}/Excercise/${id}`, {
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
    return fetch(`${API}/Excercise`).then((res) => res.json());
  }
}
