import { Component, OnInit , Input } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartDetailService } from '../shared/cart-detail.service';
import {MessangerService} from '../shared/messanger.service'
import {CartDetail} from '../shared/cart-detail.model'


@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  // items;
  // cartitem:any[]=[];
  //  temp;
  //  cartserv: CartDetailService
  carttemp  :any=[]
  public cartitem=[];
  cart2=[]
  loading =true;

  constructor( private msg : MessangerService) {

  }

//  fetching(pro){
//    alert(pro);
//    this.cart2=pro;
//  }

add(i){
  this.carttemp[i].quantity = (+this.carttemp[i].quantity + 1).toString()
  localStorage.setItem("cartList" , JSON.stringify(this.carttemp));

}
// removeall(){
//   localStorage.removeItem("cartList");


// }

remove(i){

  // var abc = i.id
  // alert(i)
  // for(let j =0; j<this.carttemp.length; j++){
  //   if(this.carttemp.id[j] == i){
  //     this.carttemp.pop(j)
  //   }
  // }
this.carttemp.pop(i);

  localStorage.setItem("cartList" , JSON.stringify(this.carttemp));

}

  ngOnInit() {
      this.carttemp = JSON.parse(localStorage.getItem("cartList"));
      console.log(this.carttemp);
  //   this.msg.getMsg().subscribe((product : CartDetail)=>{
  //     //console.log(product)
  //    // i[index].id
  //    //this.fetching(this.cartitem);
  //    this.addproduct(product)
  }

  //   })
  //
  // }
  // addproduct(product:CartDetail){
  //   this.cartitem.push({
  //     id:product.id,
  //     name: product.name,
  //     price:product.price

  //   })
  //   this.productfun(product.id,product.name,product.price);
  // }
  // productfun(id,name,price){
  //   this.cart2.push(id,name,price);
  //   console.log(this.cart2);

  // }






    //this.items = this.cartserv.getItems();
//console.log(this.cart2);

    // this.temp = JSON.parse(sessionStorage.getItem("productid"));
    // alert(this.temp);

    // alert(this.cartitem[0]);
    // alert(this.cartitem[1]);
    // alert(this.cartitem[2]);
    //  this.cartitem.forEach(function(value){
    //    alert(value);

    //  })
    //alert(sessionStorage.getItem("productid"));






}
