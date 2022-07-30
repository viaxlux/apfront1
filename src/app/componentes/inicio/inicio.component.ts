import { LoginService } from './../../login.service';
import { TareaService } from './../../service/tarea.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ulogged:string="";
  lista: any=[];
  constructor(private tareaService: TareaService, private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.listarTareas()
    this.ulogged=this.LoginService.getUserLoged();
  }

  listarTareas()
  {
    this.tareaService.getTareas().subscribe(
      res=>{this.lista=res;},
      err=>console.log(err)
    );

}

eliminar(id: string)
  {
    this.tareaService.deleteTarea(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }
  salir(): void{
    this.LoginService.deleteToken();
    this.ulogged="";
    this.router.navigate(["/login"])
  }
  login():void{
    this.router.navigate(["/login"])
  }

}
