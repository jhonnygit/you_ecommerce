import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart=[];
  private cartItemCount=new BehaviorSubject(0);
  constructor(private router:Router) { }
  getCart(){
    return this.cart;
  }
  getCartItemCount(){
    return this.cartItemCount;
  }
  addCart(cart){
    let added=false;
    for(let c of this.cart){
      if(c.proid===cart.proid){
        c.amount+=1;
        added=true;
        break;
      }
    }
    if(!added){
      cart.amount=1;
      this.cart.push(cart);
    }
    this.cartItemCount.next(this.cartItemCount.value+1);
  }
  
  decreaseCart(cart){
    for(let [index,c] of this.cart.entries()){
      if(c.proid ===cart.proid){
        c.amount-=1;
        if(c.amount==0){
          this.cart.splice(index,1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value-1);
  }

  removeCart(cart){
    for(let [index,c] of this.cart.entries()){
      if(c.proid===cart.proid){
        this.cartItemCount.next(this.cartItemCount.value-c.amount);
        this.cart.splice(index,1);
      }
    }
  }

  readCart(){
    this.router.navigate(['cart']);
  }
}
