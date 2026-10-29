import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class Profile {
  //Lista pizzas 
  pizzas = ["Margarita","Pepperoni","Cuatro Quesos", "Barbacoa", "Hawaiana", "Carbonara"];
}
