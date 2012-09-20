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
    
    
    
    
    
 
    

    
//Calls

checkIt(new Date(2011, 10, 1), new Date()); //Last year birthday YYYY, MM, DD 
console.log("Days: " + dayDif + ";  hours: " + hourDif + ";");    

fourDec(8.5);
console.log(deciNumber);