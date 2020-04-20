import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent{

  nombre:string = 'Logan';
  name:string = 'hi';
  nota:number = 10;
  constructor() { }

  cambiarNombre(){
    this.nombre = 'Wolverine';
  }


}
