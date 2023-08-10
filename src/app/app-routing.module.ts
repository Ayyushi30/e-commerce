import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthguardGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { ProductUpdateComponent } from './seller-product-update/product-update.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {path: "sign-in", component:SignInComponent},
  {path: "", component: HomeComponent},
  {path: "seller-home", component: SellerHomeComponent, canActivate: [AuthguardGuard]},
  {path: "seller-add-product", component: SellerAddProductComponent, canActivate: [AuthguardGuard]},
  {path: "seller-product-update/:id", component: ProductUpdateComponent, canActivate: [AuthguardGuard]},
  {path: "search/:query", component: SearchComponent},
  {path: "details/:productId", component: ProductDetailsComponent},
  {path: "login", component: UserAuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
