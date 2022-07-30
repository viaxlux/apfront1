import { Tarea, TareaService } from './../../service/tarea.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  tareaNueva: Tarea={
    id: "",
    tipo: "",
    actividad: "",
    foto: ""
  }
  constructor(private tareraService: TareaService, private router: Router) { }

  ngOnInit(): void {
  }

  agregarTarea(){
    this.tareraService.saveTarea(this.tareaNueva).subscribe(
      res=>{console.log(res);
      this.router.navigate(["/do"]);},
      err=>console.log(err)
    );
  }

}
