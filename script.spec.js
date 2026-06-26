import {add, subtract, multiply, divide, setOperator, setNum1, setNum2, setResult, getNum1, getOperator, getNum2, getResult, operate, updateOperand, updateOperator, calculate} from "./script.js";


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

describe("updateOperator", () => {
    beforeEach(() => {
        setOperator(undefined);
    });

    test("op undefined, num1 not empty", () => {
        setNum1("5");
        expect(updateOperator("+")).toBe(true);

        expect(getOperator()).toBe("+");
    });

    test("op undefined, num1 empty", () => {
        setNum1("");
        expect(updateOperator("+")).toBe(false);

        expect(getOperator()).toBe(undefined);
    });

    test("op defined", () => {
        setOperator("-");
        expect(updateOperator("x")).toBe(false);

        expect(getOperator()).toBe("-");
    });

});

describe("updateOperand", () => {
    beforeEach(() => {
        setNum1("");
        setNum2("");
        setOperator(undefined);
    });

    test("num1 empty, operator undefined", () => {
        updateOperand("5");

        expect(getNum1()).toBe("5");
    });

    test("num1 non empty, operator undefined", () => {
        setNum1("5");
        updateOperand("6");

        expect(getNum1()).toBe("56");
    });

    test("num1 and operator defined, num2 empty", () => {
        setNum1("56");
        setOperator("+")
        updateOperand("7");

        expect(getNum2()).toBe("7");
    });

    test("num1 and operator defined, num2 non empty", () => {
        setNum1("56");
        setOperator("+")
        setNum2("7")
        updateOperand("9");

        expect(getNum2()).toBe("79");
    });

});

describe("calculate", () => {
    beforeEach(() => {
        setNum1("");
        setNum2("");
        setOperator(undefined);
        setResult("");
    });

    describe("fail to calculate", () => {
        test("empty num1", () => {
            setNum2("5");
            setOperator("/");
            calculate();

            expect(getResult()).toBe("");
        });

        test("undefined operator", () => {
            setNum1("4");
            setNum2("5");
            calculate();
    
            expect(getResult()).toBe("");
        });

        test("empty num2", () => {
            setNum1("5");
            setOperator("/");
            calculate();
    
            expect(getResult()).toBe("");
        });

        test("all empty", () => {
            calculate();
            expect(getResult()).toBe("");
        });
    });

    describe("successful calculation", () => {
        test("add", () => {
            setNum1(1);
            setNum2(2);
            setOperator("+");

            calculate();

            expect(getResult()).toBe(3);
            expect(getNum1()).toBe("3");
        });

        test("subtract", () => {
            setNum1(1);
            setNum2(2);
            setOperator("-");

            calculate();

            expect(getResult()).toBe(-1);
            expect(getNum1()).toBe("-1");
        });

        test("multiply", () => {
            setNum1(4);
            setNum2(2);
            setOperator("x");

            calculate();

            expect(getResult()).toBe(8);
            expect(getNum1()).toBe("8");
        });

        test("divide", () => {
            setNum1(20);
            setNum2(2);
            setOperator("/");

            calculate();

            expect(getResult()).toBe(10);
            expect(getNum1()).toBe("10");
        });
    });



});