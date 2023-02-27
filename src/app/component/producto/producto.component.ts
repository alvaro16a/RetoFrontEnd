import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/Product.model';
import { ProductCarritoModel } from 'src/app/models/ProductCarrito.model';
import { CarritoService } from 'src/app/service/carrito/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  constructor(private carritoService:CarritoService){}

  @Input() mode: 'producto' | 'carrito' | 'crear' = 'producto'
  @Input() producto: ProductModel;
  @Input() productoCarrito: ProductCarritoModel;
  cantidad:number=0;
  disable:boolean=true;
  private productToShopping: ProductCarritoModel;

  checkPossible(){
    if((this.producto.min <= this.cantidad) && (this.cantidad <= this.producto.max)){
      this.disable=false;
    }else{
      this.disable=true;
    }
  }

  senToShoppingCart(){
    this.productToShopping ={
      productId:this.producto.idProduct,
      name:this.producto.name,
      quantity:this.cantidad
    }
    this.carritoService.addProduct(this.productToShopping);
    console.log("se envio al carrito")
    console.log(this.productToShopping)
  }

  deleteProduct(){
    this.carritoService.deleteProduct(this.productoCarrito);
  }
  
}
