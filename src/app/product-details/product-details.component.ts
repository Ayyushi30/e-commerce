import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';
import { TokenType } from '@angular/compiler';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetails: undefined | product;
  productQuantity: number = 1;
  isCartEmpty: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private product: ProductService
  ) {

  }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('productId');
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((result: any) => {
      if (result) {
        this.productDetails = result;
      }
    })
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
      this.isCartEmpty = false;
    }
    else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.productDetails) {
      if (!localStorage.getItem('user')) {
        this.productDetails.quantity = this.productQuantity;
        console.log(this.productDetails);
        this.product.addLocalProduct(this.productDetails);
      }
    }
  }

  buyNow() {

  }

  removeToCart(productId: any) {
    // this.product.removeItemFromCart(productId).subscribe((result: any) => {

    // });
  }
}
