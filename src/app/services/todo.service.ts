import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': '*',
    }),
  };
  readonly todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  readonly todosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) {}

  // Get Todos
  public getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Delete Todo
  public deleteTodo(todo: ITodo): Observable<ITodo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<ITodo>(url, this.httpOptions);
  }

  // Add Todo
  public addTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(this.todosUrl, todo, this.httpOptions);
  }

  // Toggle Completed
  public toggleCompleted(todo: ITodo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, this.httpOptions);
  }
}
