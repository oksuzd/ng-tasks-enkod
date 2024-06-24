import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from "../../models/todo.model";
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();

  control!: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);

    this.control.valueChanges
      .subscribe((completed: boolean) => {
        this.complete.emit({...this.todo, completed});
      });
  }
}
