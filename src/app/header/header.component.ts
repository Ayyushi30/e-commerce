import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType: string = 'default';
  sellerName: any;
  searchProducts: undefined | product[];
  userName: any;
  cartItems: number = 0;

  constructor(
    private route: Router,
    private product: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = "seller";
          let sellerStore = localStorage.getItem('seller');
          if (sellerStore != null) {
            let sellerData = JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
            console.log(this.sellerName);
          }
        }
        else if (localStorage.getItem('user')) {
          this.menuType = "user";
          let userStore = localStorage.getItem('user');
          if (userStore != null) {
            let userData = JSON.parse(userStore)[0];
            this.userName = userData.name;
            console.log(this.userName);
          }
        }
        else {
          console.warn("outside seller");
          this.menuType = "default";
        }
      }
    });

    let cartData = localStorage.getItem('localCart');
    if(cartData!=null){
      this.cartItems = JSON.parse(cartData).length;
    }
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/sign-in']);
  }

  userLogout(){
    localStorage.removeItem("user");
    this.route.navigate(['/sign-in'])
  }
  
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLTextAreaElement;
      console.log(element.value);
      this.product.searchProducts(element.value).subscribe((result) => {
        console.log(result);
        this.searchProducts = result;
      })
    }
  }

  hideSearch() {
    this.searchProducts = undefined;
  }

  onSubmit(val: string) {
    console.log(val);
    this.route.navigate([`search/${val}`]);
  }

}
