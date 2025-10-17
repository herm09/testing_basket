import {describe, test, expect} from "@jest/globals";

type Product = { name: string; price: number };

function calculateTotal(basket: Product[]): number {
    return basket.reduce((sum, p) => sum + p.price, 0);
}

function calculateTotalWithDiscount(basket: Product[]): number {
    const total = calculateTotal(basket);
    if (total > 100) {
        return Number((total * 0.9).toFixed(2));
    }
    return Number(total.toFixed(2));
}

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
        const basket: Product[] = [
            { name: "apple", price: 1.25 },
            { name: "banana", price: 0.75 },
            { name: "orange", price: 1.50 }
        ];

        const total = calculateTotal(basket);

        expect(total).toBeCloseTo(3.5);
    });

    test("should apply 10% discount when total exceeds 100€ (TDD - failing test)", () => {
        const basket: Product[] = [
            { name: "expensive item 1", price: 60 },
            { name: "expensive item 2", price: 50 }
        ];

        const totalWithDiscount = calculateTotalWithDiscount(basket);

        expect(totalWithDiscount).toBeCloseTo(99);
    });

    test("should return an exact total in all cases (TDD - failing test)", () => {
        const basket: Product[] = [
            { name: "item a", price: 0.1 },
            { name: "item b", price: 0.2 }
        ];

        const total = calculateTotal(basket);

        expect(total).toBe(0.3);
    });
});