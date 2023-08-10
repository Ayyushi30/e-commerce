import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/data-type';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{

  addProductMessage: any;
  productData: undefined | product ;
  productId:any;

  constructor(
    private product: ProductService,
    private toast: ToastrService,
    private route: ActivatedRoute
  ){
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.productId);
    this.productId && this.product.getProduct(this.productId).subscribe((data:any)=>{
      this.productData = data;
    });
  }

  onSubmit(product:product){
    product.id = this.productId;
    this.product.updateProduct(product).subscribe((result)=>{
      if(result){
        this.toast.success('Product has been updated successfully', 'success');
      }

    })

    
  }

}
