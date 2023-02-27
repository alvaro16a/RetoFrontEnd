import { Injectable } from '@angular/core';
import { ProductCarritoModel } from 'src/app/models/ProductCarrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }
  private products: ProductCarritoModel[]=[];

  addProduct(productAdd:ProductCarritoModel){
    this.products.filter(product => product.productId != productAdd.productId);
    this.products.push(productAdd);
  }

  getProducts(){
    return this.products;
  }

}
