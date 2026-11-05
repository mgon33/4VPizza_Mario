import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})

export class Navbar {
  buscar = output<string>();

  enviarBusqueda(texto: string){
    this.buscar.emit(texto);
  }

  cambiarPagina = output<string>();
}
