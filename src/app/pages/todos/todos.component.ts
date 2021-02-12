import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import * as _ from 'underscore';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  prevFilter = {
    title: ''
  }
  constructor(private todoService: TodoService) {
    this.setFilter = _.debounce(this.setFilter, 1000)
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

    console.log(filterBy.title, this.prevFilter.title);
    if (filterBy.title === this.prevFilter.title) return

    this.prevFilter = { ...filterBy }
    this.todoService.getTodos(filterBy).subscribe(todos => this.todos = todos)

  }

}
