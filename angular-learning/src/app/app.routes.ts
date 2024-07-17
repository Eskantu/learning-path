import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './Pages/TodoList/TodoList.component';
import { CounterComponent } from './Pages/Counter/Counter.component';
export const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
];
