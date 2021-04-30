const { celsiusToFahrenheit } = require('./index');
test("This is a smoke test",  () => {
	expect(5 + 5).toEqual(10);
});

describe('Make sure Celsius to Farenheit function works correctly', () => {
    test("Should return a number",  () => {
        expect(typeof celsiusToFahrenheit(20)).toEqual('number');
    });
    test("Check correct value",  () => {
        expect(celsiusToFahrenheit(0)).toEqual(32);
        expect(celsiusToFahrenheit(100)).toEqual(212);
        expect(celsiusToFahrenheit(1)).toEqual(33.8);
    });
    test("Should throw error when no value inputted",  () => {
        expect(() => {
			celsiusToFahrenheit();
		}).toThrow("error empty value");
    });
    test("Should throw error when number is not inputted",  () => {
        expect(() => {
			celsiusToFahrenheit('test');
		}).toThrow("error no number inputted");
    });
});