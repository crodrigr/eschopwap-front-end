import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../products/product-service.service';
import { Router } from '@angular/router';
import { Product } from '../products/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[]=[];

  constructor(private productServices: ProductServiceService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }



  getAllProducts(){
      this.productServices.getAll().subscribe(data=>{        
        this.products=data;        
      }, err=>{
          console.log("error::"+err.error.error);
          
      });
  }

  
  delete(id: number){
    console.log("delte: "+id);
    this.productServices.delete(id);
    
    // this.productServices.delete(product.id).subscribe(
    //   ()=>{
    //     this.products = this.products.filter(cli => cli !== product)
    //   }
    // );
  }

}
