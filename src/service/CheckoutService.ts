import { Product } from "../App";
import { Rule } from '../rules/RuleInterface'

export class CheckoutService {

    promotionalRules: Rule[];
    scannedProducts: Product[] = [];
    totalPrice: number = 0;

    constructor(promotionalRules: Rule[]) {
        this.promotionalRules = promotionalRules;
    }

    scan(product: Product) {

        this.scannedProducts.push(product);

        this.totalPrice = this.scannedProducts.reduce((a,b) => { return a + b.price},0);

        this.promotionalRules.forEach((rule) => {
            this.totalPrice -= rule.apply(this.scannedProducts);
        });
    }
}