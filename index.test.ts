import {describe, test, expect} from "@jest/globals";

describe("Basket", () => {
    test("should add a product (name + price) to the basket", () => {
        type Product = { name: string; price: number };
        const basket: Product[] = [];
        const product: Product = { name: "apple", price: 1.25 };
        basket.push(product);

        expect(basket).toContainEqual({ name: "apple", price: 1.25 });
        expect(basket[0].name).toBe("apple");
        expect(basket[0].price).toBeCloseTo(1.25);
    });

    
});