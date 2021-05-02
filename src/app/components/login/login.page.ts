import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;

  constructor(private authGuardService:AuthGuardService) { }

  ngOnInit() {
  }

  OnSubmitLogin(){
    console.log("Esta en al fucion de Iniciar session");
    this.authGuardService.login(this.email, this.password);
  }

}
