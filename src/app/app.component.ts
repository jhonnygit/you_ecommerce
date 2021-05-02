import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  cartItemCount:BehaviorSubject<number>;
  
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'mail'
    },
    {
      title: 'Catalogo de Jugos',
      url: 'gridview',
      icon: 'home'
    },
    {
      title: 'Jugos personalizados',
      url: 'personalizado',
      icon: 'home'
    },
    {
      title: 'Mi Cuenta',
      url: '/folder/acount',
      icon: 'key'
    },
    {
      title: 'Acerca',
      url: 'about',
      icon: 'key'
    },
      
    {
      title: 'Shoping Cart',
      url: 'cart',
      icon: 'cart'
    },    
   
    
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cartService:CartService,
    private router:Router,
    
  ) {
    this.initializeApp();
    this.cartItemCount=this.cartService.getCartItemCount();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();     
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
