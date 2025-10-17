import {describe, test, expect} from "@jest/globals";

describe("Basket", () => {
    test("should add an item to the basket", () => {
        const basket = [];
        basket.push("apple");
        expect(basket).toContain("apple");
    });
});