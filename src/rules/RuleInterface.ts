import { Product } from "../App";

export interface Rule {
    apply(scannedProducts: Product[]): number;
}