import { Injectable } from '@angular/core';
import { API } from '../../global';
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

  loginSuccess: any = false;
  createUser(credentials: User): Promise<TokenResponse> {
    return fetch(`${API}/customers/signup`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
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
