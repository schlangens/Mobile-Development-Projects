//Scott A Schlangen
//Activity 2
//VFW	
//Mobile Development
//Full Sail University

//DOM Load
window.addEventListener("DOMContentLoaded", function(){

	//get ElementById Function
	function $(x){
	var theElement = document.getElementById(x);
	return theElement;
	}

	

	//create select field element and populate with options
	function getWindows(){
		var formTag = document.getElementsByTagName("form"),  //formTag is an array of all the form tags.
		selectLi = $('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "groups");
		for(var i=0, j=windowOptions.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = windowOptions[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);	

	}

function gettype(){
		var formTag = document.getElementsByTagName("form"),  //formTag is an array of all the form tags.
		selectLi = $('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "groups");
		for(var i=0, j=fileSystem.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = fileSystem[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);	

}

	function storeData(){
		var id 			= Math.floor(Math.random()*100000000001);
		//gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		var item		= {};
			item.os	= ["Operating System Information", $('groups').value];
			item.timeStamp	= ["Timestamp information", $('timeStamp').value];
			item.didItWork	= ["Does the fix work", $('didItWork').value];
			item.checkbox	= ["What the user checked in the box", $('checkbox').value];
			item.diag	= ["Technician diagnosed with", $('diag').value];
			item.location	= ["Location of fix", $('location').value];
			item.comments	= ["Commented information", $('comments').value];
	}



	
	//Variable Defaults
	var windowOptions = ["--Choose A Opertaing System--" ,"Windows 7", "Windows Vista" , "Windows XP"];
	var fileSystem = ["--Choose type of OS--" ,"32 Bit", "64 Bit"];
	getWindows();
	gettype()	


	//Set Link & Submit Click Events
	//var previewData = $('preview');
	//previewData.addEventListener("click", getData);
	//var startOver = $('startover');
	//startOver.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	

});