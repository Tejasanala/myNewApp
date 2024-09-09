import { Injectable } from '@angular/core';
import { API } from '../../global';
import { HttpClient } from '@angular/common/http';
import { challenges } from './app.component';
import { chalout } from '../../excercise';

@Injectable({
  providedIn: 'root',
})
export class ChallengesService {
  constructor(private http: HttpClient) {}

  searchUser(searchTerm: string) {
    return this.http.get(`${API}/Excercise?search=${searchTerm}`);
  }

  addMovie(newpackage: chalout) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`${API}/challenges`, {
      method: 'POST',
      body: JSON.stringify(newpackage),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }

  editMovie(updatedMovie: challenges) {
    // this.movieList.push(newMovie);

    // Put
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON
    console.log('Editing exercise with ID:', updatedMovie.challengeId);

    return fetch(`${API}/challenges/${updatedMovie.challengeId}`, {
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

  deleteMovie(movie: challenges) {
    return fetch(`${API}/challenges/${movie.challengeId}`, {
      method: 'Delete',
    }).then((res) => res.json());
  }

  getMovieByIdP(id: string): Promise<challenges> {
    return fetch(`${API}/challenges/${id}`, {
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

  getAllMoviesP(): Promise<challenges[]> {
    return fetch(`${API}/challenges`).then((res) => res.json());
  }
}
