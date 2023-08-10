import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit{
  addProductForm!: FormGroup;
  addProductMessage: any;

  constructor(
    private fb: FormBuilder,
    private product: ProductService,
    private toast: ToastrService
  ){
    this.addProductForm = this.fb.group({
      product_name: ['', Validators.required],
      product_price: ['', Validators.required],
      product_color: ['',Validators.required],
      product_company: ['',Validators.required],
      product_description: ['', Validators.required],
      product_image: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addedProduct(){
    this.product.addProduct(this.addProductForm.value).subscribe((res: any)=>{
      if(res){
        this.addProductMessage = "Product added successfully!!!";
        this.toast.success("Product added successfulyy", "Success");
      }
      else{
        this.toast.error("Product can not be added.","error");
      }
    });
  }

 


}
