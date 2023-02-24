import { PurchaseProductModel } from "./PurchaseProduct.model";

export interface PurchaseModel {
    id: number;
    date: Date;
    idType: String;
    clientName: String;
    products: PurchaseProductModel[];
}