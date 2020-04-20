import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MutantesService {

  mutantes:any[] = [];

  constructor( private http:HttpClient) {

    console.log("MUTANTES Listo para usar");
    this.cargarMutantes();
 }


 cargarMutantes() {
this.http.get("assets/data/mutantes.json").subscribe(respuesta => {
   let data = respuesta;
   console.log(data);
   this.mutantes = data["mutantes"];
 });
}


}
