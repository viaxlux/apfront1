import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {CookieService} from "ngx-cookie-service"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookies: CookieService) { }
  login(user: any): Observable<any> {
    return this.http.post("https://argentinaprogramaaranguren.herokuapp.com/api/user/login", user);
  }
  setToken(token: string){
    this.cookies.set("token",token);
  }
  getToken(){
    return this.cookies.get("token");
  }
  deleteToken(){
    this.cookies.delete("token");
  }
  getUserLoged(){
    const token = this.getToken();
    return token;
  }
}
