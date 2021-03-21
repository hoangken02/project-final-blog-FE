import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + 'categories');
  }

  createNewCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(API_URL + 'create', category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + `categories/${id}`);
  }

  updateCategory(id?: number, category?: Category): Observable<Category> {
    return this.http.put<Category>(`${API_URL}categories/${id}`, category);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}categories/${id}`);
  }
}
