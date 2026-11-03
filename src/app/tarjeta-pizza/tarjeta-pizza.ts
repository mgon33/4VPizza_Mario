import { Component, input } from '@angular/core';
import { Pizza } from '../models/pizza';


@Component({
  imports: [],
  selector: 'app-tarjeta-pizza',
  styleUrl: './tarjeta-pizza.scss',
  templateUrl: './tarjeta-pizza.html',
})

export class TarjetaPizza{
  pizza = input.required<Pizza>();
}