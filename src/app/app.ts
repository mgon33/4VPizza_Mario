import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { ListaPizzas } from './lista-pizzas/lista-pizzas';
import { Form } from './form/form';
import { LineaPedido } from './models/linea-pedido';
import { Pedido } from './pedido/pedido';


@Component({
  imports: [Navbar,Footer,Header, ListaPizzas, Form, Pedido],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('4VPizza_Mario');

  textoBusqueda = signal("");

  lineasPedido = signal<LineaPedido[]>([]);

  anadirAlPedido(linea: LineaPedido){
    let lineas = this.lineasPedido();

    let existente = lineas.find(l => l.pizza.nombre === linea.pizza.nombre);

    if (existente){
      existente.cantidad += linea.cantidad;
      this.lineasPedido.set([...lineas]);
    } else{
      this.lineasPedido.set([...lineas, linea]);
    }

  }

  vaciarPedido(){
    this.lineasPedido.set([]);
  }
}

