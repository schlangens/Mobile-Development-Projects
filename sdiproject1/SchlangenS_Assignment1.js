/*
Scott A Schlangen
SDI 1209
Project 1
*/

//Initial Variables
var preggor = true, waterBreak = true, drivingSpeed = 80, laborRate = 10, pain = true, babyArrival = true; 

if (preggor === true){
	console.log("Waiting for water to break, and excited");
		if (waterBreak === true){
			console.log("Our water just broke, and we are on our way to the hospital!");
				if (drivingSpeed >= 50){
					console.log("We are driving at the speed of light");
						if (laborRate > 9){
							console.log('We are expecting some very long labor pain and contraction\'s' );
							if (babyArrival === true){
								console.log("Me and my wife are super happy our child is here \:D");
							} else {
								console.log("We are still waiting for our child!!!");
							};
						
						} else {
							console.log("this is going to be super easy and we should have a bunch of babies.")
						
						};
				
				} else {
					console.log("Dad is not driving fast enough");
				
				};
		} else {
			console.log("We are still laying in bed sleeping peacefully!!");
		};
} else {
	console.log("We are not preggors");

}; 

