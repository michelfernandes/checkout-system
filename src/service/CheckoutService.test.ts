import { CheckoutService } from './CheckoutService';
import { ClothingDiscountRule } from '../rules/ClothingDiscountRule';
import { PizzaPriceRule } from '../rules/PizzaPriceRule';

describe('CheckoutService Test Suite',() => {
    it('Should change total price when Clothing type product rule was applied', () => {
        let checkoutService = new CheckoutService([new ClothingDiscountRule(),new PizzaPriceRule()]);
        checkoutService.scan(curryProduct);
        checkoutService.scan(pizzaProduct);
        checkoutService.scan(clothingProduct);
        checkoutService.scan(clothingProduct);

        const current = checkoutService.totalPrice;
        const expected = 52.94;
        
        expect(current).toBe(expected);
    })
    it('Should change total price when Pizza price rule was applied', () => {
        let checkoutService = new CheckoutService([new ClothingDiscountRule(),new PizzaPriceRule()]);
        checkoutService.scan(curryProduct);
        checkoutService.scan(pizzaProduct);
        checkoutService.scan(pizzaProduct);
        checkoutService.scan(clothingProduct);

        const current = checkoutService.totalPrice;
        const expected = 34.93;
        
        expect(current).toBe(expected);
    })
    it('Should not change total price when no discount rule was applied', () => {
        let checkoutService = new CheckoutService([new ClothingDiscountRule(),new PizzaPriceRule()]);
        checkoutService.scan(curryProduct);
        checkoutService.scan(pizzaProduct);
        checkoutService.scan(clothingProduct);

        const current = checkoutService.totalPrice;
        const expected = 32.94;
        
        expect(current).toBe(expected);
    })
    it('Should not change total price when no product is scanned', () => {
        let checkoutService = new CheckoutService([new ClothingDiscountRule(),new PizzaPriceRule()]);

        const current = checkoutService.totalPrice;
        const expected = 0;
        
        expect(current).toBe(expected);
    })
    it('Should not change total price when no discount rule passed on the class contructor', () => {
        let checkoutService = new CheckoutService([]);
        checkoutService.scan(curryProduct);
        checkoutService.scan(pizzaProduct);
        checkoutService.scan(pizzaProduct);
        checkoutService.scan(clothingProduct);
        checkoutService.scan(clothingProduct);

        const current = checkoutService.totalPrice;
        const expected = 63.93;
        
        expect(current).toBe(expected);
    })
});

const curryProduct = {
    id: 1,
    name: "Curry Sauce",
    type: "Food",
    price: 1.95,
}
const pizzaProduct = {
    id: 2,
    name: "Pizza",
    type: "Food",
    price: 5.99,
}
const clothingProduct = {
    id: 3,
    name: "Men’s T-Shirt ",
    type: "Clothing",
    price: 25.00,
}