import { Component, OnInit } from '@angular/core';
import { ProductCarritoModel } from 'src/app/models/ProductCarrito.model';
import { PurchaseModel } from 'src/app/models/Purchase.model';
import { PurchaseProductModel } from 'src/app/models/PurchaseProduct.model';
import { ApiRestService } from 'src/app/service/api-rest.service';
import { CarritoService } from 'src/app/service/carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  clientName:string="";
  idType:string="";
  mensaje:string;
  disable:boolean=true;

  checkPossible(){
    if((this.clientName != "") && (this.idType != "")){
      this.disable=false;
    }else{
      this.disable=true;
    }
  }

  products: ProductCarritoModel[];
  constructor(private carritoService: CarritoService,private apiRest:ApiRestService) {
  }

  ngOnInit(): void {
    this.products = this.carritoService.getProducts();
  }

  makePurchase() {
    console.log("ingrese")
    let productsConvert: PurchaseProductModel[] = [];
      productsConvert = this.products.map(product => {
        let productConvert: PurchaseProductModel = { productId: product.productId, quantity: product.quantity }
        return productConvert;
      })
    let purchaseModel: PurchaseModel = {date: new Date().toISOString() ,clientName:this.clientName,idType:this.idType,products:productsConvert }
    console.log(purchaseModel)
    this.apiRest.addPurchase(purchaseModel).subscribe(text => this.mensaje=JSON.stringify(text))
  }




}
