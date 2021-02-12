import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=10';
  constructor(private http: HttpClient) { }

  //get todos
  getTodos(filterBy = { title: '' }): Observable<Todo[]> {
    console.log('get totos');

    if (!filterBy.title) return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}&title=${filterBy.title}`);
  }
  //toggle todos
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }
  //delete todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }
  //add todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
  }
}
