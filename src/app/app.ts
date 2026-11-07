import { Component, signal } from '@angular/core';
import { Greeting } from './greeting/greeting';

@Component({
  imports: [Greeting],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Sample-Angular-Project');
}
