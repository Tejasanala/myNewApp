import { Injectable } from '@angular/core';
import { API } from '../../global';
import { HttpErrorResponse } from '@angular/common/http';
export interface User {
  username: string;
  password: string;
}

export interface TokenResponse {
  msg: string;
  token: string;
  roleId: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  loginok: any = false;
  createUser(credentials: User): Promise<TokenResponse> {
    return fetch(`${API}/customers/signup`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log(error.msg);
        return Promise.reject(error);
      });
  }

  login(credentials: User): Promise<TokenResponse> {
    return fetch(`${API}/customers/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
