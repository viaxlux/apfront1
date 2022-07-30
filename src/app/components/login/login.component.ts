
import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { Claves } from 'src/app/claves';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //*
  username: string="";
  password: string="";
  loginerror: string="";


  constructor(private router: Router, public personaService: PersonaService, private LoginService: LoginService) { }
  login(){
    //console.log(this.username);
    //console.log(this.password);
    const user = {username: this.username, password: this.password};
    this.LoginService.login(user).subscribe( data => {
      console.log(data);
      if(data==null) this.loginerror = "Error!!";
      else {
        this.loginerror = "";
        this.LoginService.setToken(data.id);
        this.router.navigate(['/do'])
      }

    });

  }
   //*
  persona: persona = new persona("","");
  clave: Claves={
    id:1,
    vale1: "",
    vale2: ""
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona=data})
  }

  outlogin(){
  if (this.clave.vale1===this.persona.username){
    if (this.clave.vale2===this.persona.password){
      console.log("Auxilio");
      this.router.navigate([""])
      }
    }
  }
}
