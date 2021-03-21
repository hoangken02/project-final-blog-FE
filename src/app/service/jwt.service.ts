import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {strict} from 'assert';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class JwtService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<{ access_token: string }>('http://localhost:8080/login', {username, password}).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }));
  }

  register(username: string, password: string, email: string) {
    return this.http.post<{ access_token: string }>('http://localhost:8080/register', {
      username,
      password,
      email
    }).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') != null;
  }
}
