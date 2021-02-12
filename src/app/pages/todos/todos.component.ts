import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { debounce, isEqual } from 'lodash';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  prevFilter = {
    title: '',
  }
  
  constructor(private todoService: TodoService) {
    this.setFilter = debounce(this.setFilter, 1000)
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id)
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    })
  }

  setFilter(filterBy) {
    if (isEqual(filterBy, this.prevFilter)) return
    this.prevFilter = { ...filterBy }
    this.todoService.getTodos(filterBy).subscribe(todos => this.todos = todos)
  }

}
