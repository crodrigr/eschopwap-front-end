import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public product: Product;
  errores: string[]=[];

  constructor(private productService: ProductServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) { 
     this.product = new Product();
  }

  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {        
        this.productService.getProduct(id).subscribe(product=> this.product=product);
      }
    });    
  }


  save(): void{
 
    this.productService.save(this.product).subscribe(
         product=>{
            this.router.navigate(['/products']);            
         },err=>{
            this.errores = err.error.errors as string[];
            console.error('Código del error desde el backend: ' + err.status);
            console.error(err.error.errors);         
         }
    );

   }
   
   update(): void{  
      this.productService.update(this.product).subscribe(
         json => {
            this.router.navigate(['/products']);
         },err => {
           this.errores=err.error.errors as string[];
           console.error('Código del error desde el backend: ' + err.status);
           console.error(err.error.errors); 
         }  
      );

   }

   

}
