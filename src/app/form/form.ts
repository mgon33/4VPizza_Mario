import { Component, output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form',
  styleUrl: './form.scss',
  templateUrl: './form.html',
})
export class Form {
  pedidoForm = new FormGroup({
    direccion: new FormControl("", [Validators.required, Validators.minLength(5)]),
    hora: new FormControl("",[Validators.required]),
    metodoPago: new FormControl("",[Validators.required]),
    numTarjeta: new FormControl({value: "", disabled: true}, [Validators.required, Validators.pattern('[0-9]{16}')]),
    telefono: new FormControl({value: "", disabled: true}, [Validators.required, Validators.pattern('[0-9]{9}')])
  });

  get direccion(){
    return this.pedidoForm.get("direccion");
  }

  get hora(){
    return this.pedidoForm.get("hora");
  }

  get metodoPago(){
    return this.pedidoForm.get("metodoPago");
  }

  get numTarjeta(){
    return this.pedidoForm.get("numTarjeta");
  }

  get telefono(){
    return this.pedidoForm.get("telefono");
  }

  cambiarMetodoPago(){
    if(this.metodoPago?.value === 'tarjeta'){
      this.numTarjeta?.enable();
      this.telefono?.disable();
    } else{
      this.telefono?.enable();
      this.numTarjeta?.disable();
    }
  }

  limpiar = output();

  enviarPedido(){
    alert("¡Gracias! Tu pedido estará listo pronto")
    this.limpiar.emit();
    this.pedidoForm.reset();
  }
}
