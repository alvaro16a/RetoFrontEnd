import { Component, OnInit } from '@angular/core';
import { PurchaseModel } from 'src/app/models/Purchase.model';
import { ApiRestService } from 'src/app/service/api-rest.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  purchases:PurchaseModel[];
  purchasesTxt:string[]=[];
  constructor(private apiRest:ApiRestService){}

  ngOnInit(): void {
    this.apiRest.getPurchase().subscribe(purchasesAsinc => {
      this.purchases=purchasesAsinc;
      this.purchasesTxt.push(JSON.stringify(purchasesAsinc));
    })
    
  }
  
  toString(value:any){
    return JSON.stringify(value);
  }

}
