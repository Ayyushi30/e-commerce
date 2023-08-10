import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  baseUrl = ""

  constructor(
    private http: HttpClient
  ) { }

  // subscribe(subscription:any){
  //   return this.http.post(environment.baseUrl+'subscribe',subscription).pipe(map((res: any)=>res));
  //   }
  //   triggerMessage(message: string){
  //   return this.http.post(environment.baseUrl+'message',JSON.parse(message)).pipe(map(res=>res));
  //   }
}

