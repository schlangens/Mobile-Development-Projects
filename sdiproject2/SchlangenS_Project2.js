//Scott A Schlangen
//SDI 1209
//Project 2




//Variables --> String,Number,Array

var	samWater = "My wifes water just broke",
	samPainRate = 10,
	orderOfAction = ["get in the car", "drive the speed of light", "arrive at the hospital", "baby is born"];
	


//Procedure --> Argument, Argument Conditional (Output for both true, and false) return back

var waterBreaks = function(waterBreaks){
	waterBreaks = samWater;
	if (waterBreaks == "My wifes water just broke") {
		console.log ( waterBreaks + ", and we need to go to the hospital!!!");
	 } else {
		console.log ("We keep sleeping peacefully");
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
	return headingToHospital
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
	girlNames = ("Amelia Jane", "Emma Jane", "Catherine Jane");
	boyNames = ("Craig Matthew", "Jason Scott", "Charlie Matthew");
	var decisionTime = function(babyNames){
		girlNames=true;
		for (var i=0, j=girlNames.length; i<j; i++){
			console.log("Our baby is a girl, and her name is" + girlNames[0]);
		}	
	}
};





//Main Code - Function Calls

waterBreaks();
stepOne(samWater, samPainRate);
stepTwo(samPainRate);
stepThree(orderOfAction);    
babyNames();