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
  
  
  constructor(private apiRest: ApiRestService){}
  ngOnInit(): void {
    this.apiRest.getProducts(0,4).subscribe(productosPaginacionAsincronos => this.productPagination=productosPaginacionAsincronos); 
  }

}
