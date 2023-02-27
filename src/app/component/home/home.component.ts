import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/Product.model';
import { ProductPaginationModel } from 'src/app/models/ProductPagination.model';
import { ApiRestService } from 'src/app/service/api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productPagination: ProductPaginationModel;
  products:ProductModel[];
  
  
  constructor(private apiRest: ApiRestService){}
  ngOnInit(): void {
    this.apiRest.getProducts(0,10).subscribe(productosPaginacionAsincronos => this.productPagination=productosPaginacionAsincronos); 
  }
}
