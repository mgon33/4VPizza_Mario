import { Component, signal } from '@angular/core';
import { Profile } from './profile/profile';

@Component({
  imports: [Profile],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('4VPizza_Mario');
}
