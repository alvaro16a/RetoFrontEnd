import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/Product.model';
import { ProductPaginationModel } from '../models/ProductPagination.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http:HttpClient) { }

  private _url="http://localhost:8080/";

  getProducts(page:number,size:number):Observable<ProductPaginationModel>{
    let header =new HttpHeaders;
    header.set('Type-Content','aplication/json')
    return this.http.get<ProductPaginationModel>(this._url+"product/"+page+"/"+size, {headers:header});
  }
}
