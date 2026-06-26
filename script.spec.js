import {add, subtract, multiply, divide, setOperator, setNum1, setNum2, num1, operator, num2, operate, updateOperand, updateOperator} from "./script.js";


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

describe("operate", () => {
    test("add", () => {
        expect(operate("+", 5, 2)).toBe(7);
    });

    test("subtract", () => {
        expect(operate("-", 5, 2)).toBe(3);
    });

    test("multiply", () => {
        expect(operate("*", 5, 2)).toBe(10);
    });

    test("divide", () => {
        expect(operate("/", 5, 2)).toBeCloseTo(2.5);
    });
});

describe("updateOperand", () => {
    beforeEach(() => {
        setOperator(undefined);
    });

    test("op undefined", () => {
        updateOperator("+");

        expect(operator).toBe("+");
    });

    test("op defined", () => {
        setOperator("-");
        updateOperand("x");

        expect(operator).toBe("-");
    });

});

describe("updateOperand", () => {
    beforeEach(() => {
        setNum1(undefined);
        setNum2(undefined);
    });

    test("num1 undefined", () => {
        updateOperand(5);

        expect(num1).toBe(5);
    });

    test("num1 defined and num2 undefined", () => {
        setNum1(5);
        updateOperand(6);

        expect(num2).toBe(6);
    });

    test("num1 and num2 defined", () => {
        setNum1(5);
        setNum2(6);
        updateOperand(7);

        expect(num1).toBe(5);
        expect(num2).toBe(6);
    });

});