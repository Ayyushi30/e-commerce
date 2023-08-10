import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
    vapidKeys:string=`BBz1ai8jODiEMclqSBxPVevaDKyHEQNQffi-7Cps6GO6-n18SFA_QjMqzXPeTmztgAFEXEy8H24tAmvCxlcQu8s`;

  constructor(
    private auth: AuthService,
  ){

  }
  ngOnInit(): void {
    this.auth.reloadSeller();
  }
  title = 'e-com';


}
