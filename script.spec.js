import {add, subtract, multiply, divide} from "./script.js";


describe("add", () => {
    test("positive numbers", () =>{
        expect(add(2, 5)).toBe(5);
    });

    test("negative numbers", () =>{
        expect(add(-4, -6)).toBe(-10);
    });

    test("mixed numbers", () =>{
        expect(add(-2, 7)).toBe(5);
    });
});

describe("subtract", () => {
    test("positive numbers", () =>{
        expect(add(8, 2)).toBe(6);
    });

    test("negative numbers", () =>{
        expect(add(-7, -1)).toBe(-6);
    });

    test("mixed numbers", () =>{
        expect(add(-5, 2)).toBe(-7);
    });
});