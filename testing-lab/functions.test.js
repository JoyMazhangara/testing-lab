const { returnTwo, 
        greeting, 
        add,
        subtract,
        multiply,
        divide } 
    = require('./functions')
// tests that the returnTwo function returns the number 2
test("should return number 2", ()=> {
    expect(returnTwo()).toEqual(2)
})
// tests that the greeting function returns the string "Hello, name"
test("function return names", ()=> {
        expect(greeting('James')).toEqual("Hello, James.")
        expect(greeting('Jill')).toEqual("Hello, Jill.")
    });
//tests that the add function returns the sum of two numbers
describe("Math Functions", ()=> {
    test("function should add numbers", ()=> {
        expect(add(1,2)).toEqual(3)
        expect(add(5,9)).toEqual(14)
    });
//tests that the subtract function returns the subtraction of two numbers
    test("function should subtract numbers", ()=> {
        expect(subtract(2,1)).toEqual(1)
        expect(subtract(9,5)).toEqual(4)
    });
//tests that the multiply function returns two numbers being multiplied
    test("function should multiply numbers", ()=> {
        expect(multiply(1,2)).toEqual(2)
        expect(multiply(5,9)).toEqual(45)
    });
//tests that the divide function returns two numbers being divided
    test("function should divide numbers", ()=> {
        expect(divide(2,1)).toEqual(2)
        expect(divide(45,9)).toEqual(5)
    });
})