import {describe, test, expect} from "@jest/globals";

type Product = { name: string; price: number };

function calculateTotal(basket: Product[]): number {
    // compute in cents to avoid floating point precision issues
    const cents = basket.reduce((sum, p) => sum + Math.round(p.price * 100), 0);
    return cents / 100;
}

function calculateTotalWithDiscount(basket: Product[]): number {
    const total = calculateTotal(basket);
    // work in cents to apply discount exactly
    const cents = Math.round(total * 100);
    if (cents > 100 * 100) {
        const discounted = Math.round(cents * 0.9);
        return discounted / 100;
    }
    return cents / 100;
}

describe("Basket", () => {
    test("TDD: should addProduct add a product (name + price) to the basket (failing)", () => {
        const basket: Product[] = [];
        const product: Product = { name: "pear", price: 2.5 };

        const result = (global as any).addProduct ? (global as any).addProduct(basket, product) : undefined;

        expect(basket).toContainEqual(product);
        expect(result).toBeUndefined();
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
        test("TDD: should addProduct add a product (name + price) to the basket (failing)", () => {
            const basket: Product[] = [];
            const product: Product = { name: "pear", price: 2.5 };

            // Intentionally call non-implemented API to follow TDD
            // @ts-ignore
            const result = (global as any).addProduct ? (global as any).addProduct(basket, product) : undefined;

            // Expectation: product added to basket
            expect(basket).toContainEqual(product);
            // Optionally expect a return value (new length)
            expect(result).toBeUndefined();
        });
});