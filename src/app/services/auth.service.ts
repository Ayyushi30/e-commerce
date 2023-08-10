import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedInError = new EventEmitter<boolean>(false);

  constructor(
    private http: HttpClient,
    private route: Router,
  ) { 
    
  }

  signUp(data: any){
    this.http.post("http://localhost:3000/signup", data,
      {observe: 'response'}).subscribe((result)=>{
        console.warn(result);
        if(result){
          this.isSellerLoggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.route.navigate(['seller-home']);
        }
      });
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home']);
    }
  }

  login(data: any){
    this.http.get(`http://localhost:3000/signup?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result: any)=>{
      console.warn(result,"asdfghjk");
      if(result && result.body && result.body.length){
        console.warn("User Logged In");
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.route.navigate(['/seller-home']);
      }
      else{
        console.warn("Unsucessful");
        this.isLoggedInError.emit(true);
      }
    });

    
  }
}
