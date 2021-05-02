import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { auth } from 'firebase';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  public loginServe=false;

  constructor(private AFauth:AngularFireAuth, private router:Router, private db:AngularFirestore,
              private google:GooglePlus,
              private fb:Facebook) { }

  login(email:string, password:string){
    this.AFauth.signInWithEmailAndPassword(email, password).then(res=>{ 
        // console.log('estas logueado: ' + res);
        console.log(res);
        this.loginServe=true;
        this.router.navigate(['/gridview']);
    }).catch(err=> console.log('error : '+ err));
  }

  logout(){
    this.AFauth.signOut().then(()=>{
      this.google.disconnect();
      this.fb.logout();
      this.router.navigate(['/home']);
      this.loginServe=false; 
    });
    
  }

  register(email:string, password:string, name:string, telefono:string, direccion:string){
    return new Promise((resolve, reject)=>{
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res=>{
        console.log(res.user.uid);
        const uid=res.user.uid;
        this.db.collection('users').doc(uid).set({
          name:name,
          telefono,
          direccion,
          uid:uid
        })
        resolve(res)
      }).catch( err=>reject(err))
    })
    
  }

  loginWithGoogle(){
    return this.google.login({}).then(result=>{
      const user_data_google=result;//recibido de google
      return this.AFauth.signInWithCredential(auth.GoogleAuthProvider.credential(null,user_data_google.accesToken));
    })
  }

  loginWithFaccebook(){
    return this.fb.login(['email','public_profile']).then((response:FacebookLoginResponse)=>{
      const credential_fb=auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
      return this.AFauth.signInWithCredential(credential_fb);
    })
  }

  isLoggedinSer(){
    return this.loginServe;
  }
}
