import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-pizzas',
  styleUrl: './lista-pizzas.scss',
  templateUrl: './lista-pizzas.html',
})
export class ListaPizzas {
  //Lista pizzas 
  pizzas = [
    {
      nombre: "Margarita",
      precio: 10,
      imagen: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300",
      ingredientes: ["Tomate", "Mozzarella", "Albahaca"]
    },
    {
      nombre: "Pepperoni",
      precio: 12,
      imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300",
      ingredientes: ["Tomate", "Mozzarella", "Pepperoni"]
    },
    {
      nombre: "Cuatro Quesos",
      precio: 13,
      imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300",
      ingredientes: ["Mozzarella", "Gorgonzola", "Parmesano", "Fontina"]
    },
    {
      nombre: "Barbacoa",
      precio: 14,
      imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300",
      ingredientes: ["Salsa BBQ", "Carne picada", "Pollo", "Bacon"]
    }
  ];
}
