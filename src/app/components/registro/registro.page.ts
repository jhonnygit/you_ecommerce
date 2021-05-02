import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public email:string;
  public name:string;
  public telefono:string;
  public direccion:string;
  public password:string;
  constructor(private authService:AuthGuardService, private router:Router) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.authService.register(this.email, this.password, this.name, this.telefono, this.direccion).then(auth=>{
      this.router.navigate(['home'])
      console.log(auth)
    }).catch(err=>console.log(err))
  }

  loginGoogle(){
    this.authService.loginWithGoogle().then(() =>{
      this.router.navigate(['home']);
    }).catch(err=>{
      alert('Algo salio mal, contacta a soporte')
    })
  }

  loginFacebook(){
    this.authService.loginWithFaccebook().then(res=>{
      this.router.navigate(['/home']);
    }).catch(err=>{
      alert("hubo un error ");
    })
  }
 
}
