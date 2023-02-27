import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/Product.model';
import { ProductPaginationModel } from '../models/ProductPagination.model';
import { PurchaseModel } from '../models/Purchase.model';
import { ProductoModel } from '../models/Producto.model';

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

  getPurchase():Observable<PurchaseModel[]>{
    let header =new HttpHeaders;
    header.set('Type-Content','aplication/json')
    return this.http.get<PurchaseModel[]>("http://localhost:8080/purchase", {headers:header});
  }


  addPurchase(purchase: PurchaseModel): Observable<string> {
    let header =new HttpHeaders;
    header.set('Type-Content','aplication/json')
    return this.http.post<string>("http://localhost:8080/purchase", purchase);
  }

  addProduct(product: ProductoModel): Observable<ProductModel> {
    let header =new HttpHeaders;
    header.set('Type-Content','aplication/json')
    return this.http.post<ProductModel>("http://localhost:8080/product", product);
  }
}
