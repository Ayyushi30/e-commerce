import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productList: any;
  icon = faTrash;
  editIcon = faEdit;

  constructor(
    private product: ProductService
  ){
  }

  ngOnInit(): void {
    this.product.productList().subscribe((result:any)=>{
      this.productList= result;
    })
  }

  deleteProduct(id: any){
    console.warn("id", id);
    this.product.deleteProduct(id).subscribe((res)=>{
      if(res){
        this.productList = res;
      }
    })
  }



}
