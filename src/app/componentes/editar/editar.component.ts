import { Component, OnInit } from '@angular/core';
import { Tarea, TareaService } from './../../service/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id: string="";
  tareaActual: Tarea={id:"", tipo:"", foto: "", actividad:""};

  constructor(private tareaService: TareaService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.tareaService.getUnaTarea(this.id).subscribe(
      res=>{this.tareaActual=res},
      err=>console.log(err)
    );
  }
  guardad(){
    this.tareaService.editTarea(
      this.id, this.tareaActual).subscribe(
        res=> {this.router.navigate(["/do"]);},
        err=>console.log(err)

      );

  }
}
