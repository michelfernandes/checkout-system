import { ClothingDiscountRule } from './ClothingDiscountRule';

describe('ClothingDiscountRule Test Suite',() => {
    let clothingDiscountRule = new ClothingDiscountRule();
    it('Should apply discount rule when 2 Clothing type products are scanned', () => {
        const scanned = [clothingProduct,clothingProduct,curryProduct];

        const current = clothingDiscountRule.apply(scanned);
        const expected = 5;

        expect(current).toBe(expected);
    });
    it('Should apply discount rule when 3 Clothing type products are scanned', () => {
        const scanned = [clothingProduct,clothingProduct,clothingProduct,pizzaProduct];

        const current = clothingDiscountRule.apply(scanned);
        const expected = 5;

        expect(current).toBe(expected);
    });
    it('Should not apply discount rule when 1 Clothing type product is scanned', () => {
        const scanned = [clothingProduct,curryProduct,pizzaProduct];

        const current = clothingDiscountRule.apply(scanned);
        const expected = 0;

        expect(current).toBe(expected);
    });
    it('Should not apply discount rule when no Clothing type product is scanned', () => {
        const scanned = [curryProduct,pizzaProduct];

        const current = clothingDiscountRule.apply(scanned);
        const expected = 0;

        expect(current).toBe(expected);
    });
    it('Should not apply discount rule when no product is scanned', () => {
        const current = clothingDiscountRule.apply([]);
        const expected = 0;

        expect(current).toBe(expected);
    });
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