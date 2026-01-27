import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemCard } from './item-card/item-card';
import { Counter } from './counter/counter';
import { StudentTable } from './student-table/student-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemCard, Counter, StudentTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RDEC');
}