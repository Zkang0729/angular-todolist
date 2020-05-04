import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NewTodo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<NewTodo> = new EventEmitter();

  public title: string = '';

  constructor() {}

  ngOnInit(): void {}

  public onSubmit(): void {
    const todo: NewTodo = {
      title: this.title,
      completed: false,
      tmpId: 'temp',
    };

    this.addTodo.emit(todo);
  }

  public changeInputValue(value): void {
    this.title = value.target.value;
  }
}
