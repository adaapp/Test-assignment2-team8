function celsiusToFahrenheit(temp){
    if (temp == undefined){
        throw new Error("error empty value");
    }
    if (isNaN(temp)){
        throw new Error("error no number inputted");
    }  
    fahr = (temp*9/5) + 32
    return fahr
}
function fahrenheitToCelsius(temp){
    if (temp == undefined){
        throw new Error("error empty value");
    }
    if (isNaN(temp)){
        throw new Error("error no number inputted");
    }  
    celsius = (temp-32)*5/9
    return celsius
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
    module.exports = { celsiusToFahrenheit, fahrenheitToCelsius}
    }
    else{
    window.celsiusToFahrenheit = celsiusToFahrenheit;
    window.fahrenheitToCelsius = fahrenheitToCelsius;
    }