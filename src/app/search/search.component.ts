import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedProduct: undefined | product[];

    constructor(
      private route: ActivatedRoute,
      private product: ProductService,
      private router: Router
    ){
       
    }

  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('query');
    console.log(query);
    query && this.product.searchProducts(query).subscribe((result)=>{
      console.log(result)
      this.searchedProduct = result;
    })
  }

}
