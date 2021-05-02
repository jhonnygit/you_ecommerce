import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL=environment.apiUrl;
  currentProduct:any;
  TOKEN_KEY='auth-token';
  token='';
  constructor(private http:HttpClient, private router:Router) { }
  getProduct(page){
    return this.http.get(`${this.API_URL}?page=${page}`);
  }
  getProductByCat(categoryName){
    return this.http.post(`${this.API_URL}/subcategory`,{subname:categoryName});
  }
  getDataAuth(token){
    
    let headers=new HttpHeaders({'Accep':'application/json','Authorization':`${token}`});
    return this.http.post(`http://localhost:8000/api/v1/dataauth`,{},{headers:headers});
  }
}
