import {describe, test, expect} from "@jest/globals";

type Product = { name: string; price: number };

function calculateTotal(basket: Product[]): number {
    const cents = basket.reduce((sum, p) => sum + Math.round(p.price * 100), 0);
    return cents / 100;
}

function calculateTotalWithDiscount(basket: Product[]): number {
    const total = calculateTotal(basket);
    const cents = Math.round(total * 100);
    if (cents > 100 * 100) {
        const discounted = Math.round(cents * 0.9);
        return discounted / 100;
    }
    return cents / 100;
}

describe("Basket", () => {
    test("TDD: should addProduct add a product (name + price) to the basket", () => {
        const basket: Product[] = [];
        const product: Product = { name: "pear", price: 2.5 };

        const result = (global as any).addProduct ? (global as any).addProduct(basket, product) : undefined;

        expect(basket).toContainEqual(product);
        expect(result).toBeUndefined();
    });

    test("TDD: calculateTotal should account for product quantity (failing)", () => {
        type ProductWithQty = { name: string; price: number; quantity?: number };

        const basket: any[] = [
            { name: "widget", price: 2.0, quantity: 3 }, 
            { name: "gadget", price: 1.5 }
        ];

        const total = calculateTotal(basket);

        expect(total).toBeCloseTo(7.5);
    });

    test("should return an exact total in all cases", () => {
        const basket: Product[] = [
            { name: "item a", price: 0.1 },
            { name: "item b", price: 0.2 }
        ];

        const total = calculateTotal(basket);

        expect(total).toBe(0.3);
    });

    test("should apply 10% discount when total exceeds 100€", () => {
        const basket: Product[] = [
            { name: "expensive item 1", price: 60 },
            { name: "expensive item 2", price: 50 }
        ];

        const totalWithDiscount = calculateTotalWithDiscount(basket);

        expect(totalWithDiscount).toBeCloseTo(99);
    });

    test("should return an exact total in all cases", () => {
        const basket: Product[] = [
            { name: "item a", price: 0.1 },
            { name: "item b", price: 0.2 }
        ];

        const total = calculateTotal(basket);

        expect(total).toBe(0.3);
    });
});