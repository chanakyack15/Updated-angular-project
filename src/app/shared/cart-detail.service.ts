import { Injectable } from '@angular/core';
import { CartDetail } from './cart-detail.model';
import { HttpClient } from  "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CartDetailService {
  formData:CartDetail;
  items:any[] = []
  readonly rootUrl ="http://localhost:54579/api";

  Addtocart(product) {
    this.items.push(product);
    alert(product)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private http:HttpClient) { }
  // postCartDetails(formData:CartDetail){
  // return  this.http.post(this.rootUrl + "/CartDetails",formData);



}
