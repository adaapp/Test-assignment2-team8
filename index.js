function celsiusToFahrenheit(temp){      //function for celsius to Fahrenheit
    if (temp == undefined){                      //function called with no input variable throw error
        throw new Error("error empty value");
    }
    if (isNaN(temp)){                                  //function called with variable that is not a number throw error
        throw new Error("error no number inputted");
    }  
    fahr = (temp*9/5) + 32         //formula for conversion
    return fahr
}
function fahrenheitToCelsius(temp){ //function for fahrenheit to calesius
    if (temp == undefined){                       //function called with no input variable throw error
        throw new Error("error empty value"); 
    }
    if (isNaN(temp)){                  //function called with variable that is not a number throw error
        throw new Error("error no number inputted");
    }  
    celsius = (temp-32)*5/9          //formula for conversion
    return celsius
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){  //if function called from node
    module.exports = { celsiusToFahrenheit, fahrenheitToCelsius}       //export to node file
    }
    else{
    window.celsiusToFahrenheit = celsiusToFahrenheit;         //else export to html/js
    window.fahrenheitToCelsius = fahrenheitToCelsius;
    }