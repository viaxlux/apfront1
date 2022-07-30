import { PersonaService } from './../../service/persona.service';
import { persona } from './../../model/persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  personal: persona = new persona("","");
  titulo: persona = new persona("","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonal().subscribe(data=>{this.personal=data})
    this.personaService.getTitulo().subscribe(data=>{this.titulo=data})
  }

}
