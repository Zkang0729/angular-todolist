import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public todos: ITodo[];
  public isLoading: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  public deleteTodo(todoItem: ITodo) {
    // Remove from UI
    this.todos = this.todos.filter((todo) => todo.id !== todoItem.id);
    // Remove from server
    this.todoService.deleteTodo(todoItem).subscribe();
  }

  public addTodo(todoItem: ITodo) {
    console.log(this.isLoading);
    this.isLoading = true;
    // Add to the server
    const addedTodo$ = this.todoService.addTodo(todoItem);
    addedTodo$.subscribe((todo) => {
      this.isLoading = false;
      this.todos.push(todo);
    });
  }
}
