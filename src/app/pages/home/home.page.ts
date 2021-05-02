import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  
  slides=[
    {
      img:'assets/img/slide_tienda.jpg',
      titulo:'Direccion<br>'
    },
    {
      img:'assets/img/recomendaciones.jpg',
      titulo:'Recomendaciones<br>'
    }
  ]
  constructor(private router:Router,private authGuardService:AuthGuardService) {
    
   }
 
  ngOnInit() {
  }

  IniciarSession(){
    console.log("ventana inicios de session");
    this.router.navigate(['/login']);
  }
  
  cerrarSession(){
    console.log('Se cerro la seccion');
    this.authGuardService.logout();
  }

  isLoggedin() {    
    return this.authGuardService.isLoggedinSer();
  }
}
