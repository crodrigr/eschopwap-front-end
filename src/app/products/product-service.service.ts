import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Product } from '../products/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private url: string;

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {

    this.url = environment.base_url+"/products";          
    
   } 
   
   getAll(): Observable<Product[]>{              
       return this.http.get<Product[]>(this.url);     
   }

   save(product: Product): Observable<any>{    
      return this.http.post<any>(this.url,product);        
    
    }

    update(product: Product): Observable<any>{
        return this.http.put<any>(this.url+"/"+product.id,product);
    }

    getProduct(id): Observable<Product>{
       return this.http.get<Product>(this.url+"/"+id);
    }

    // delete(id: number): Observable<Product> {
    //   return this.http.delete<Product>(this.url+"/"+id);
    // }

    delete(id: number): Observable<Product> {
      console.log("deletexxxx:"+this.url+"/"+id);
      return this.http.delete<Product>(this.url+"/"+id).pipe(
        catchError(e => {
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        }));
    }

    
}
