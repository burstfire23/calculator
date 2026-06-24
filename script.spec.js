import {add, subtract, multiply, divide} from "./script.js";


describe("add", () => {
    test("positive integers", () =>{
        expect(add(2, 5)).toBe(7);
    });

    test("negative integers", () =>{
        expect(add(-4, -6)).toBe(-10);
    });

    test("mixed integers", () =>{
        expect(add(-2, 7)).toBe(5);
    });

    test("mixed numbers", () =>{
        expect(add(-5.2, 7.1)).toBeCloseTo(1.9);
    });
});

describe("subtract", () => {
    test("positive integers", () =>{
        expect(subtract(8, 2)).toBe(6);
    });

    test("negative integers", () =>{
        expect(subtract(-7, -1)).toBe(-6);
    });

    test("mixed integers", () =>{
        expect(subtract(-5, 2)).toBe(-7);
    });

    test("mixed numbers", () =>{
        expect(subtract(5.2, -7.1)).toBeCloseTo(12.3);
    });
});

describe("multiply", () => {
    test("positive integers", () =>{
        expect(multiply(2, 4)).toBe(8);
    });

    test("negative integers", () =>{
        expect(multiply(-5, -3)).toBe(15);
    });

    test("mixed integers", () =>{
        expect(multiply(-3, 4)).toBe(-12);
    });

    test("mixed numbers", () =>{
        expect(multiply(8.1, -3.9)).toBeCloseTo(-31.59);
    });
});

describe("divide", () => {
    test("positive integers", () =>{
        expect(divide(4, 2)).toBe(2);
    });

    test("negative integers", () =>{
        expect(divide(-10, -5)).toBe(2);
    });

    test("mixed integers", () =>{
        expect(divide(-15, 3)).toBe(-5);
    });

    test("mixed numbers", () =>{
        expect(divide(8.2, -1.5)).toBeCloseTo(-5.47);
    });

    test("positive divide by zero", () =>{
        expect(divide(8, 0)).toBe(Infinity);
    });

    test("negative divide by zero", () =>{
        expect(divide(-8, 0)).toBe(-Infinity);
    });

    test("zero divide by zero", () =>{
        expect(divide(0, 0)).toBe(NaN);
    });
});