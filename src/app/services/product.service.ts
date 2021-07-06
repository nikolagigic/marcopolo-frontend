import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProductInterface } from '../products/product.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productsEvent = "http://localhost:3000/api/products"
  public products: Observable<ProductInterface[]> = new Observable<ProductInterface[]>();
  
  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this._productsEvent)
  }

  saveProduct(productBody: ProductInterface) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.http.post<any>(
      this._productsEvent,
      productBody,
      httpOptions
    ).subscribe(
      res => {},
      err => {
        console.log(err)
      }
    )
  }

  removeProduct(id: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      body: {
        id: id,
      }
    };

    this.http.delete<any>(this._productsEvent, options).subscribe(
      res => {},
      err => console.log(err)
    )
  }
}
