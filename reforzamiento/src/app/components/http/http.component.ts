import { Component } from '@angular/core';
import { MutantesService } from "../../services/mutantes.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent  {

  constructor( private _ms:MutantesService ) { //inyectando el servicio


   }

}
