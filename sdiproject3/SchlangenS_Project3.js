//Scott A Schlangen
//SDI 1209
//Project 3

//Variables --> String,Number,Array

var	samWater = "My wifes water just broke",
	samPainRate = 10,
	orderOfAction = ["get in the car", "drive the speed of light", "arrive at the hospital", "baby is born"];
	
	
	

//JSON Information
var daysJSON = {
    "days": [
        {
            "day": " Monday",
            "baby": " Amelia",
            "action": " ate three ounces of milk ",
            "temp": " and her temperatue was appropriate"
        },
        {
           	"day": " Tuesday",
            "baby": " Amelia",
            "action": " ate three ounces of milk",
            "temp": " and her temperatue was appropriate"
        },
        {
            "day": " Wednesday",
            "baby": " Amelia",
            "action": " ate three ounces of milk",
            "temp": " and her temperatue was appropriate"
        },
        {
	        "day": " Thursday",
            "baby": " Amelia",
            "action": " ate three ounces of milk",
            "temp": " and her temperatue was appropriate"
        },
        {
         	"day": " Friday",
            "baby": " Amelia",
            "action": " ate three ounces of milk",
            "temp": " and her temperatue was appropriate"
        },    
    ]
};
	


//Procedure --> Argument, Argument Conditional (Output for both true, and false) return back

var waterBreaks = function(water){   
	if (water == "My wifes water just broke"){  
console.log( water + ", and we are on our way to the hospital");    
} else {    
console.log ("We are sleeping in our bed getting our beauty rest");   
}   
};



//Boolean Function --> Two Arguments, Compairions, OUTPUT (true and False, Return Boolean

var stepOne = function(samWater, samPainRate){
	if (samWater == "My wifes water just broke" && samPainRate >= 10){
		headingToHospital = true;
		console.log ("We are going to " + orderOfAction[0] + ", and " + orderOfAction[1]);
	} else{
		headingToHospital = false;
		console.log ("We are going to just keep sleeping in bed, and have our beauty sleep");
	}
	return headingToHospital;
};





//Number Function --> Pass number, Local Variable within number functions, while loop (if false return number, if true, Math to output and return number

var stepTwo = function(samPainRate){
	while (samPainRate <= 15){
	console.log( "My wife's pain rate is climbing at " + samPainRate + ", and she needs some pain medicine");
	samPainRate++;
	};
	return samPainRate;
};





//String Function --> Pass two strings, local variables, String Concatenation, Return String

var stepThree = function (orderOfAction){
	hosp = "Community South";
	floor = "3rd Floor";
	console.log( "We " + orderOfAction[2] + " of " + hosp + " assigned to the " + floor + ". We are super excited to get medicine for pain, and witness the birth of our first baby!!");
return hosp;
};








//Array Function  --> Number and Array passed through, Local Variables, For loop if true Math and the output, if false return array
var babyNames = function(){
	girlNames = ["Amelia Jane", "Emma Jane", "Catherine Jane"];
	boyNames  = ["Craig Matthew", "Travis Scott", "Arthur Charles"];
	
	
			for (var i=0, j=boyNames.length; i<j; i++){
			console.log("If our baby was a boy, we thought about the names " +boyNames[i]);
			};
				
			for (var i=0, j=girlNames.length; i<j; i++){
			console.log("Since our baby is a girl, we thought about the name " +girlNames[i]);
			};
return girlNames[0];
};




//Accessor Method: Sequence of events from the json
var bringBabyHome = {
   	 dayHandler: function (json) {
            for (var i = 0; i < json.days.length; i++) {
            whatHappend = json.days[i];
	        console.log("On" +  whatHappend.day + whatHappend.baby + whatHappend.action + whatHappend.temp);
	        };
	        }
};

 

//Main Code - Function Calls

waterBreaks(samWater);
stepOne(samWater, samPainRate);
stepTwo(samPainRate);
stepThree(orderOfAction);    
babyNames();
console.log("Our baby's name is " + girlNames[0]);
console.log("This is exactly how our first week played out");
bringBabyHome.dayHandler(daysJSON);