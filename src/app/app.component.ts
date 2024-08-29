import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Usuario } from './classes/usuario';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    FormsModule, 
    LoginComponent, 
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
