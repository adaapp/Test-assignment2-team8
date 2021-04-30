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
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
    module.exports = { celsiusToFahrenheit}
    }
    else{
    window.celsiusToFahrenheit = celsiusToFahrenheit;
    }