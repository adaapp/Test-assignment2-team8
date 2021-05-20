const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./index');    //importing the functions
test("This is a smoke test",  () => {           //smoke test
	expect(5 + 5).toBe(10);                //checking if tests work
});

describe('Make sure Celsius to Fahrenheit function works correctly', () => {   //celsius to fahrenheit test block
    test("Should return a number",  () => {                         // checking function returns a number
        expect(typeof celsiusToFahrenheit(20)).toBe('number');
    });
    test("Check correct value",  () => {                   //check function with some values we know are correct
        expect(celsiusToFahrenheit(0)).toBe(32);
        expect(celsiusToFahrenheit(100)).toBe(212);
        expect(celsiusToFahrenheit(1)).toBe(33.8);
        expect(celsiusToFahrenheit(-10)).toBe(14);
        expect(celsiusToFahrenheit(31.23)).toBeCloseTo(88.2, 0.1);
    });
    test("Should throw error when no value inputted",  () => {     //check to make sure function throws error
        expect(() => {                                               //when function input is blank/undefined
			celsiusToFahrenheit();
		}).toThrow("error empty value");
    });
    test("Should throw error when number is not inputted",  () => {         //check when function has string NaN
        expect(() => {
			celsiusToFahrenheit('test');
		}).toThrow("error no number inputted");
    });
});
describe('Make sure Fahrenheit to Celsius function works correctly', () => {    // checking function returns a number
    test("Should return a number",  () => {
        expect(typeof fahrenheitToCelsius(20)).toBe('number');
    });
    test("Check correct value",  () => {                 //check function with some values we know are correct
        expect(fahrenheitToCelsius(32)).toBe(0);
        expect(fahrenheitToCelsius(212)).toBe(100);
        expect(fahrenheitToCelsius(5)).toBe(-15);
        expect(fahrenheitToCelsius(-4)).toBe(-20);
        expect(fahrenheitToCelsius(-10)).toBeCloseTo(-23.3, 0.1);
    });
    test("Should throw error when no value inputted",  () => {
        expect(() => {                               //check to make sure function throws error
			fahrenheitToCelsius();                   //when function input is blank/undefined
		}).toThrow("error empty value");
    });
    test("Should throw error when number is not inputted",  () => {
        expect(() => {                                        //check when function has string NaN
			fahrenheitToCelsius('test');
		}).toThrow("error no number inputted");
    });
});