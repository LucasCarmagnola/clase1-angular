import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edades',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edades.component.html',
  styleUrl: './edades.component.css'
})
export class EdadesComponent {
  edad1!:number 
  edad2!:number  

  sumarEdades(){
      return this.edad1+this.edad2
  }

  promedioEdad(){
    let suma = this.sumarEdades()
    return suma / 2
  }
  mostrarResultados(){
    let suma = document.getElementById("suma") as HTMLInputElement
    let promedio = document.getElementById("promedio") as HTMLInputElement
    suma.value = this.sumarEdades().toString()
    promedio.value = this.promedioEdad().toString()
  }
  limpiarCampos(){
    (document.getElementById("suma") as HTMLInputElement).value = '';
    (document.getElementById("promedio") as HTMLInputElement).value = "";
  }
}
