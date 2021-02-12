import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onToggle(todo) {
    // toggle ui
    todo.compeleted = !todo.compeleted
    // toggle server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log({ todo });

    })
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo)

  }


  //set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.compeleted
    }
    return classes
  }
}
