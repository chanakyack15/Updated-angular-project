import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../shared/product-detail.service';
import {CartDetailService} from '../shared/cart-detail.service'
import { ActivatedRoute } from '@angular/router';
import {MessangerService} from '../shared/messanger.service'
import { ProductDetail } from '../shared/product-detail.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private msg : MessangerService , public service:ProductDetailService , private route: ActivatedRoute, private cartService:CartDetailService ) { }
  listtemp:any =[]
  ngOnInit() {
    this.service.refreshList();
  }
  pro = []

  addto(product : ProductDetail){
    // this.msg.sendMsg(product);
    // alert("product is added");
    console.log(product);
    if(localStorage.getItem("cartList")){
      this.listtemp =  JSON.parse(localStorage.getItem("cartList"))
      product.quantity ="1"
      this.listtemp.push(product)
      localStorage.setItem("cartList",JSON.stringify(this.listtemp));

      console.log(this.listtemp)
      alert("Product added")
    }
    else{
      product.quantity ="1"
      this.listtemp.push(product)
      localStorage.setItem("cartList",JSON.stringify(this.listtemp));
      console.log(this.listtemp)
    }




  }


  productcart:string[]=[]
  producttemp;

  // Addtocart(product) {
  //   this.cartService.Addtocart(product);
  //   window.alert('Your product has been added to the cart!' + product);
  // }

  //  Addtocart(productid) {

  //  this.productcart=[productid.id,productid.name,productid.price];
  //  sessionStorage.setItem("productid",JSON.stringify(this.productcart));

  //    alert('Your product has been added to the cart!');
  //  }

  // Addtocart(productid){
  //    alert(productid);
  // }

  //   // this.service.postCartDetails(pd.value).subscribe(
  //   //   res =>{
  //   //     console.log(pd);
  //   //     alert("product added");
  //   //   },
  //   //   err =>{
  //   //     console.log(err);

  //   //   }
  //   // )

  // }

  // myitem=[];
  // updatePrice = function() {
  //   var totalPrice = 0;
  //   for( var i = 0; i < this.myitem.length; i++ ) {
  //     totalPrice += (this.myitem[i].count) * (this.myitem[i].price);
  //   }
  //   totalPrice = totalPrice;
  // };

  // addItem = function(newItem) {
  //   if(this.myitem.length == 0) {
  //     newItem.count = 1;
  //     this.myitem.push(newItem);
  //   }else {
  //     var repeat = false;
  //     for( var i = 0; i < this.myitem.length; i++ ) {
  //       if(this.myitem[i].id == newItem.id) {
  //         this.myitem[i].count++;
  //         repeat = true;
  //       }
  //     }
  //     if(!repeat) {
  //       newItem.count = 1;
  //       this.myitem.push(newItem);
  //     }
  //   }
  //   this.updatePrice();
  // };


  // //sepeti boşalt - empty your cart
  // removeBasket = function() {
  //   this.myitem.splice(0, this.myitem.length);
  //   this.updatePrice();
  // };

}




