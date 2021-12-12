import { PizzaPriceRule } from './PizzaPriceRule';

describe('PizzaPriceRule Test Suite',() => {
    let pizzaPriceRule = new PizzaPriceRule();
    it('Should apply discount rule when 2 Pizza products are scanned', () => {
        const scanned = [pizzaProduct,pizzaProduct,curryProduct];

        const current = pizzaPriceRule.apply(scanned);
        const expected = 4;

        expect(current).toBe(expected);
    });
    it('Should apply discount rule when 4 Pizza products are scanned', () => {
        const scanned = [clothingProduct,pizzaProduct,pizzaProduct,pizzaProduct,pizzaProduct];

        const current = pizzaPriceRule.apply(scanned);
        const expected = 8;

        expect(current).toBe(expected);
    });
    it('Should not apply discount rule when 1 Pizza product is scanned', () => {
        const scanned = [clothingProduct,curryProduct,pizzaProduct];

        const current = pizzaPriceRule.apply(scanned);
        const expected = 0;

        expect(current).toBe(expected);
    });
    it('Should not apply discount rule when no Pizza product is scanned', () => {
        const scanned = [curryProduct,clothingProduct];

        const current = pizzaPriceRule.apply(scanned);
        const expected = 0;

        expect(current).toBe(expected);
    });
    it('Should not apply discount rule when no product is scanned', () => {
        const current = pizzaPriceRule.apply([]);
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