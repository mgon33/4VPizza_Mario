import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { ListaPizzas } from './lista-pizzas/lista-pizzas';
import { Form } from './form/form';


@Component({
  imports: [Navbar,Footer,Header, ListaPizzas, Form],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('4VPizza_Mario');
}
