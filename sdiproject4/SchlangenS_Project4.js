//Scott A Schlangen
//SDI 1209
//Project 4


    

//Number Section

/*Find the number of hours or days difference between two dates.*/

   var checkIt = function (firstDate, secondDate) { 
        oneDay = 1000*60*60*24;
        oneHour = 1000*60*60;
        if (firstDate < secondDate) {
            dayDif = Math.ceil((secondDate.getTime()-firstDate.getTime())/(oneDay));
            hourDif = Math.ceil((secondDate.getTime()-firstDate.getTime())/(oneHour));
        } else if (firstDate > secondDate) {
            dayDif = Math.ceil((firstDate.getTime()-secondDate.getTime())/(oneDay));
            hourDif = Math.ceil((firstDate.getTime()-secondDate.getTime())/(oneHour));
        }
        return [dayDif, hourDif];
    }; //close checkIt Function
    

//Format a number to use a specific number of decimal places, we will do it by four

 var fourDec = function (num) { 
        deciNumber = num.toFixed(4);
        return deciNumber;
    };    
    



//Given a string version of a number such as "42", return the value as an actual Number, such as 42, but we will use 99

var convertToDigit = function (string) { 
        if (!isNaN(string)) { 
            converted = Number(string);
        } else {
            console.log(string + " this was awkward we cant convert that prbly not a string.");
        };
        return converted;
    };
    
    
    
    
 
    

    
//Calls

checkIt(new Date(2011, 10, 1), new Date()); //Last year birthday YYYY, MM, DD 
console.log("Days: " + dayDif + ";  hours: " + hourDif + ";");    

fourDec(8.5);
console.log(deciNumber);


convertToDigit("99");
console.log(converted);