import { Rule } from './RuleInterface';
import { Product } from '../App';

// If you buy 2 or more Clothing type products, you get €5.00 discount
export class ClothingDiscountRule implements Rule{

    apply(scannedProducts: Product[]){
        let count = 0;
        scannedProducts.forEach((product) => {
            if(product.type === 'Clothing'){
                count++;
            }
        })

        if(count >= 2){
            return 5;
        }
        return 0;
    }
}