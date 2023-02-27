import { Injectable } from '@angular/core';
import { ProductCarritoModel } from 'src/app/models/ProductCarrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }
  private products: ProductCarritoModel[]=[];

  addProduct(productAdd:ProductCarritoModel){
    
    console.log(this.products.push(productAdd));
    localStorage.setItem('products',JSON.stringify(this.products))
  }

  getProducts(){
    console.log("me llamaron");
    console.log(this.products);
    return JSON.parse(localStorage.getItem('products') || "[]");  
  }

  deleteProduct(productDelete:ProductCarritoModel){
    let products:ProductCarritoModel[]=this.getProducts();
    console.log(productDelete)
    console.log(products)
    products=products.filter(product => product.productId !== productDelete.productId);
    console.log(products)
    localStorage.removeItem('products');
    localStorage.setItem('products',JSON.stringify(products));
    window.location.reload();
  }

}
