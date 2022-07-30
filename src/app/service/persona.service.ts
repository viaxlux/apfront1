import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = "http://locallhost:8080/personas/";
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>("https://argentinaprogramaaranguren.herokuapp.com/api/user/perfil")
  }

  public getPersonal(): Observable<persona>{
    return this.http.get<persona>("https://argentinaprogramaaranguren.herokuapp.com/api/user/personal")
  }

  public getTitulo(): Observable<persona>{
    return this.http.get<persona>("https://argentinaprogramaaranguren.herokuapp.com/api/user/titulo")
  }
}
