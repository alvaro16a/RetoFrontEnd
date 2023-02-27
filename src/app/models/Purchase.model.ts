import { PurchaseProductModel } from "./PurchaseProduct.model";

export interface PurchaseModel {
    id?: number;
    date: string;
    idType: String;
    clientName: String;
    products: PurchaseProductModel[];
}