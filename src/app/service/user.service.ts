import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {User} from '../model/user';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<Category[]>(API_URL + 'users');
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post<User>(API_URL + 'create', user);
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(API_URL + `users/${id}`);
  }

  updateCategory(id?: number, user?: User): Observable<User> {
    return this.http.put<User>(`${API_URL}users/${id}`, user);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}users/${id}`);
  }
}
