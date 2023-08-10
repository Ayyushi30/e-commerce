import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  signUp(data: any){
    this.http.post("http://localhost:3000/users", data,
      {observe: 'response'}).subscribe((result)=>{
        console.warn(result);
        if(result){
          localStorage.setItem('user', JSON.stringify(result.body));
          this.route.navigate(['/']);
        }
      });
  }

  reloadSeller(){
    if(localStorage.getItem('user')){
      this.route.navigate(['/']);
    }
  }

  login(data: any){
    this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result: any)=>{
      if(result){
        console.warn("User Logged In");
        localStorage.setItem('user', JSON.stringify(result.body));
        this.route.navigate(['/']);
      }
    });
  }

}
