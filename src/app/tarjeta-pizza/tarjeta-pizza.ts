import { Component, input, output } from '@angular/core';
import { Pizza } from '../models/pizza';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LineaPedido } from '../models/linea-pedido';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-tarjeta-pizza',
  styleUrl: './tarjeta-pizza.scss',
  templateUrl: './tarjeta-pizza.html',
})

export class TarjetaPizza{
  pizza = input.required<Pizza>();

  cantidad = new FormControl(1,[Validators.required, Validators.min(1)]);

  anadirPizza = output<LineaPedido>();

  anadir(){
    let linea = new LineaPedido(this.pizza(), this.cantidad.value!);

    this.anadirPizza.emit(linea);

    this.cantidad.setValue(1);
  }
}