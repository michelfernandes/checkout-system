
export interface productType {
    id: number,
    name: string,
    type: string,
    price: number,
} 

export let products : productType[] = [
  {
    id: 1,
    name: 'Curry Sauce',
    type: "Food",
    price: 1.95,
  },
  {
    id: 1,
    name: 'Pizza',
    type: "Food",
    price: 5.99,
  },
  {
    id: 1,
    name: 'Men’s T-Shirt ',
    type: "Clothing",
    price: 25.00,
  }
];