import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/Product.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  imagen: string = "https://picsum.photos/200/200";

  producto: ProductModel = {
    id: 2,
    name: "Celular",
    inInventory: 9,
    enabled: true,
    min: 3,
    max: 8
  }

}
