import { Injectable } from '@angular/core';
import { ProductDetail } from './product-detail.model';
import { HttpClient } from  "@angular/common/http"
import { CartDetail } from './cart-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  formData:ProductDetail;
  formDataCart:CartDetail;
  readonly rootUrl ="http://localhost:54579/api";
  list:ProductDetail[];

  constructor(private http: HttpClient) { }

  postProductDetails(formData:ProductDetail  ){
   return this.http.post(this.rootUrl + "/ProductDetails", formData);
  }



  postCartDetails(formDataCart:CartDetail){
  return  this.http.post(this.rootUrl + "/CartDetails",formDataCart);
  }

  refreshList(){
    this.http.get(this.rootUrl + "/ProductDetails").toPromise().then(res=>this.list =res as ProductDetail[] )

  }
}
