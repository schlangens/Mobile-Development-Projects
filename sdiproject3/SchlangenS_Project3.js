//Scott A Schlangen
//SDI 1209
//Project 3
//9-11 from my perspective

//variables
var teacher = "Mr Hurt",
    numberofStudents = 25,
    time = "08:46AM",
    planeHit = true,
    place = "Bloomington North High School, Indiana Algebra Class",
    cryingGirl = "Katy"
    peopleNames = [ "Myself", "Katy", "Hillary" ],
    tvChannels = {
        channel11: "Fox 59",
        channel3: "WTHR",
        channel4: "CNN",
        channel8: "Wish TV"
};



var begin = {
					//Procedure
	 goingToAlgebra : function (mathTeacher) {
                        if ( mathTeacher == "Mr Hurt") {
                            console.log("I was heading to " + teacher + "'s " + "Algebra Class to start period 2.")
                        } else {
                            console.log("I was still in 1st period class");
                            goingToAlgebra("Mr Hurt");
                        }
                
       },
       
       				//Boolean Function | Was it an accident
       
       accidental : function (planeTerror,girl){
	       if (planTerror = true && girl == "Katy"){
		       console.log ("This was no accident" + "," + "and Katy my classmate becomes hysterical and starts crying." + "I can do nothing about the situation and comfort my fellow class mates.");
		           accidental = "false";
		      } else {
			       console.log ("The planes never hit on purpose, and it was not a terroist activity.");
			       accidental = "true";
			       
		       }
		       return accidental;
	       }     //end accidental function  
       };      //end begin object












//Calls Telling the Story


begin.goingToAlgebra(teacher);
begin.accidental(planeHit,cryingGirl);