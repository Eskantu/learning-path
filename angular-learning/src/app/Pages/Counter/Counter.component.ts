import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Counter.component.html',
  styleUrl: './Counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent { }
