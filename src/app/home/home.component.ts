import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  popularProducts: undefined | product[];
  trendyProducts: undefined | product[];
  
  
  constructor(config: NgbCarouselConfig, private product: ProductService){
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      if(data){
        this.popularProducts = data;  
      }
    });
    this.product.trendyProducts().subscribe((data)=>{
      if(data){
        this.trendyProducts =data;
      }
    });
  }
}
