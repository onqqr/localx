import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [Home, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class App {
  title = 'homes';
}
