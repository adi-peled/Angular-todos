import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoItemComponent } from './cmps/todo-item/todo-item.component';
import { HeaderComponent } from './cmps/header/header.component';
import { AddTodoComponent } from './cmps/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './cmps/about/about.component';
import { TodoFilterComponent } from './cmps/todo-filter/todo-filter.component'
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    TodoFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
