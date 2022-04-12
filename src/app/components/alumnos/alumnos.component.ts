import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ListadoAlumnosComponent } from 'src/app/components/listado-alumnos/listado-alumnos.component';
import { MatTable } from '@angular/material/table';
import { Alumno } from 'src/app/classes/alumnos/alumnos';
import { AlumnoService } from 'src/app/services/alumno.service';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers: [AlumnoService]
})
export class AlumnosComponent implements OnInit {
  listaAlumnos: Alumno[] = [];
  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    curso: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    id: new FormControl('', [Validators.required])
  });

  @ViewChild('tabla') tabla?: MatTable<any>;
  columnas: string[] = ['nombre', 'apellido', 'mail', 'curso', 'id', 'acciones']
  

  constructor(public dialog: MatDialog, private alumnoService: AlumnoService) {
    this.listaAlumnos = this.alumnoService.obtener();
   }

  agregar(){
    let alumno = this.formulario.value;
    this.alumnoService.agregar(alumno);
    this.dialog.open(ListadoAlumnosComponent, {
           data: this.listaAlumnos
    });
    this.tabla?.renderRows()
    this.formulario.reset()
  }
  
  eliminar(id: number){
    this.alumnoService.eliminar(id);
    this.tabla?.renderRows()
  }

  ngOnInit(): void {}

}
