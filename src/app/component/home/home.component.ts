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
  page:number=0;
  size:number=5;
  nPagina:number;
  
  constructor(private apiRest: ApiRestService){}
  ngOnInit(): void {
    this.apiRest.getProducts(this.page,this.size).subscribe(productosPaginacionAsincronos => this.productPagination=productosPaginacionAsincronos);
    this.nPagina=this.productPagination.totalPages; 
  }

  
  actualizar(){
    this.apiRest.getProducts(this.page,this.size).subscribe(productosPaginacionAsincronos => this.productPagination=productosPaginacionAsincronos);
    this.nPagina=this.productPagination.totalPages; 
  }
}
