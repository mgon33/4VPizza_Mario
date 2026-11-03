import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { TarjetaPizza } from '../tarjeta-pizza/tarjeta-pizza';

@Component({
  imports: [TarjetaPizza],
  selector: 'app-lista-pizzas',
  styleUrl: './lista-pizzas.scss',
  templateUrl: './lista-pizzas.html',
})
export class ListaPizzas {
  //Lista pizzas
  pizzas: Pizza[] = [
    new Pizza("Margarita", 10, "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300", ["Tomate", "Mozzarella", "Albahaca"]),
    new Pizza("Pepperoni", 12, "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300", ["Tomate", "Mozzarella", "Pepperoni"]),
    new Pizza("Cuatro Quesos", 13, "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300", ["Mozzarella", "Gorgonzola", "Parmesano", "Fontina"]),
    new Pizza("Barbacoa", 14, "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300", ["Salsa BBQ", "Carne picada", "Pollo", "Bacon"])
  ];
}