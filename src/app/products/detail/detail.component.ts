import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public product: Product;

  constructor(private productService: ProductServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {        
        this.productService.getProduct(id).subscribe(product=> this.product=product);
      }
    });    
  }

  

}
