import { Rule } from './RuleInterface';
import { Product } from '../App';

// If you buy 2 or more pizzas, the price for each drops to €3.99
export class PizzaPriceRule implements Rule{

    apply(scannedProducts: Product[]){
        let count = 0;
        let totalValue = 0
        scannedProducts.forEach((product) => {
            if(product.id === 2){
                count++;
                totalValue += product.price;
            }
        })

        if(count >= 2){
            const discount = totalValue - (count * 3.99);
            return discount;
        }
        return 0;
    }
}