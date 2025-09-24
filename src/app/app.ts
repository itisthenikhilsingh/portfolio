import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './pages/main/main';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Main
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Portfolio');
  protected readonly currentYear = new Date().getFullYear();
}
