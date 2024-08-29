import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bindeos.component.html',
  styleUrl: './bindeos.component.css'
})
export class BindeosComponent {
  title:string = 'Lucas';
  apellido:string = "" 
  // ! hace que la variable pueda ser nula 

  imagen = "https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg"

  mostrarDatos(){
    console.log(this.title)
    // codigo
    // aca
    //
  }
}
