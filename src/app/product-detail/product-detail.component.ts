import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductDetailService } from '../shared/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(public service:ProductDetailService) { }
  id:number;
  name:string;
  price:string;
  ngOnInit() {
    this.resetform();
  }

  resetform(form?:NgForm){
    if(form!= null){
      form.resetForm();
    }
    this.service.formData ={
      ID:0,
      Name:'',
      Price:'',
      quantity:''

    }
  }

  onSubmit(form:NgForm){
    this.service.postProductDetails(form.value).subscribe(
      res =>{
        this.resetform(form);
        console.log(form);
        alert("product added");
      },
      err =>{
        console.log(err);

      }
    )
  }

}
