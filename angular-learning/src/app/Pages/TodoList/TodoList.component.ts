import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './TodoList.component.html',
  styleUrl: './TodoList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent { }
