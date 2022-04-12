import { Injectable } from '@angular/core';
import { Alumno } from '../classes/alumnos/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  listaAlumnos: Alumno[] = [];

  constructor() { }

  obtener(){
    return this.listaAlumnos
  }
  agregar(alumno: Alumno){
    this.listaAlumnos.push(alumno);
    return this.listaAlumnos
  }

  eliminar(id: number){

    console.log(id)
    for(let i=0; i<this.listaAlumnos.length; i++){
      if(this.listaAlumnos[i].id == id){
        this.listaAlumnos.splice(i, 1)
      }
    }
    return this.listaAlumnos
  }
}
