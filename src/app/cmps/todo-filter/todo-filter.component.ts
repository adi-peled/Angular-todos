import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit {
  @Output() setFilter: EventEmitter<Object> = new EventEmitter
  constructor() { }

  filterBy = {
    title: '',
  }

  ngOnInit(): void {
  }


}
