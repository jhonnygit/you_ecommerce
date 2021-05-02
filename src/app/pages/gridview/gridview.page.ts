import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.page.html',
  styleUrls: ['./gridview.page.scss'],
})
export class GridviewPage implements OnInit {
  products=[];
  page=1;
  max=0;
  cart=[];
  cartItemCount:BehaviorSubject<number>;
  constructor(private cartService:CartService, private productService:ProductService) { }

  ngOnInit() {
    /*
    this.productService.getProductByCat(0).subscribe(res=>{
      this.products=res['data'];
    });
    */
    this.loadProduct();
    this.cart= this.cartService.getCart();
    this.cartItemCount= this.cartService.getCartItemCount();
  }

  loadProduct(event?){
    this.productService.getProduct(this.page).subscribe(res=>{
    this.products=this.products.concat(res['data']); 
    this.max=res['meta'].last_page;
    if(event){
      event.target.complete();
      }
    });
  }

  loadProductMore(event){
    this.page++;
    this.loadProduct(event);
    if(this.page===this.max){
      event.target.disabled=true;
    }
  }


  addToCart(product){
    this.cartService.addCart(product);
  }

  readCart(){
    this.cartService.readCart();
  }

}
