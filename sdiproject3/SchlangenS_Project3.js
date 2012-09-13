//Scott A Schlangen
//SDI 1209
//Project 3
//9-11 from my perspective

//variables
var teacher = "Mr Hurt",
    numberofStudents = 25,
    time = "08:46AM"
    place = "Bloomington North High School, Indiana Algebra Class",
    peopleNames = [ "Myself", "Katy", "Hillary" ],
    tvChannels = {
        channel11: "Fox 59",
        channel3: "WTHR",
        channel4: "CNN",
        channel8: "Wish TV"
};



var begin = {

	 goingToAlgebra : function (mathTeacher) {
                        if ( mathTeacher == "Mr Hurt") {
                            console.log("I was heading to " + teacher + "'s " + "Algebra Class to start period 2.")
                        } else {
                            console.log("I was still in 1st period class");
                            goingToAlgebra("Mr Hurt");
                        }
                
       }
};












//Calls Telling the Story


begin.goingToAlgebra(teacher);