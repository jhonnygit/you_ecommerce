import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart=[];
  constructor(private cartService:CartService) { } 

  ngOnInit() {
    this.cart=this.cartService.getCart();
  }
  decreaseCartItem(product){ 
    this.cartService.decreaseCart(product);
  }
  increaseCartItem(product){
    this.cartService.addCart(product);
  }
  removeCartItem(product){
    this.cartService.removeCart(product);
  }
  getTotal(){
    return this.cart.reduce((i,j)=>i+j.price*j.amount,0);
  }

}
