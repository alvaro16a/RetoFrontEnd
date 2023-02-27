import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/Product.model';
import { ProductCarritoModel } from 'src/app/models/ProductCarrito.model';
import { ProductoModel } from 'src/app/models/Producto.model';
import { ApiRestService } from 'src/app/service/api-rest.service';
import { CarritoService } from 'src/app/service/carrito/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  constructor(private carritoService:CarritoService,private apiRest:ApiRestService){}

  @Input() mode: 'producto' | 'carrito' | 'crear' = 'producto'
  @Input() producto: ProductModel;
  @Input() productoCarrito: ProductCarritoModel;
  cantidad:number=0;
  disable:boolean=true;

  nombreProducto:string="";
  cantidadInventario:number=0;
  disponible:boolean=false;
  cantidadMin:number=0;
  cantidadMax:number=0;

  resultado:string="";

  addProduct(){
    this.newProducto={name:this.nombreProducto,enabled:this.disponible,inInventory:this.cantidadInventario,min:this.cantidadMin,max:this.cantidadMax};
    this.apiRest.addProduct(this.newProducto).subscribe(productoCreado => this.resultado="id del nuevo producto: " + productoCreado.idProduct)
  }

  private productToShopping: ProductCarritoModel;
  private newProducto:ProductoModel;

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
