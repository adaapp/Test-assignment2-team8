function celsiusToFahrenheit(temp){
    fahr = (temp*9/5) + 32
    return fahr
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
    module.exports = { celsiusToFahrenheit}
    }
    else{
    window.celsiusToFahrenheit = celsiusToFahrenheit;
    }