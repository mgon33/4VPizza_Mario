import { Component, input } from '@angular/core';
import { LineaPedido } from '../models/linea-pedido';

@Component({
  imports: [],
  selector: 'app-pedido',
  styleUrl: './pedido.scss',
  templateUrl: './pedido.html',
})

export class Pedido {
  lineas = input<LineaPedido[]>([]);

  get total(){
    let suma = 0;

    for (let linea of this.lineas()){
      suma += linea.pizza.precio * linea.cantidad;
    }
    return suma;
  }
}
