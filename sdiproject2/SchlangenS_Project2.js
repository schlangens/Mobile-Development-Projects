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





//String Function --> Pass two strings, local variables, String Concatenation, Return String








//Array Function  --> Number and Array passed through, Local Variables, For loop if true Math and the output, if false return array






//Main Code - Function Calls

waterBreaks();
stepOne(samWater, samPainRate);
    