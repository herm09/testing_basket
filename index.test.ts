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

    test("should calculate the total price of the basket", () => {
        type Product = { name: string; price: number };
        const basket: Product[] = [
            { name: "apple", price: 1.25 },
            { name: "banana", price: 0.75 },
            { name: "orange", price: 1.50 }
        ];

        const total = basket.reduce((sum, p) => sum + p.price, 0);

        expect(total).toBeCloseTo(3.5);
    });

    test("should apply 10% discount when total exceeds 100€ (TDD - failing test)", () => {
        type Product = { name: string; price: number };
        const basket: Product[] = [
            { name: "expensive item 1", price: 60 },
            { name: "expensive item 2", price: 50 }
        ];

        const totalWithDiscount = (global as any).calculateTotalWithDiscount
            ? (global as any).calculateTotalWithDiscount(basket)
            : undefined;

        expect(totalWithDiscount).toBeCloseTo(99);
    });    
});