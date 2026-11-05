import { Pizza } from "./pizza";

export class LineaPedido{
    pizza: Pizza;
    cantidad: number;

    constructor(pizza: Pizza, cantidad: number){
        this.pizza = pizza;
        this.cantidad = cantidad;
    }
}

