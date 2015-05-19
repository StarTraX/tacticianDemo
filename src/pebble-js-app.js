/* jshint -W099 */ //remove warning about mixed spaces and tabs???
//Pebble.addEventListener("ready",load_data);
Pebble.addEventListener("ready",function(){
	
		Pebble.sendAppMessage({ 
		"44": "0", //	FLAGDATALOADED, // 42 number of course divisions in this series
		 }, function(e) { //Success callback
			 	//commsTimer(); //start the timer once all the data is loaded
			 	console.log("FLAGDATALOADED sent");
			 	dispData();
				  //Pebble.showSimpleNotificationOnPebble("courseDivsList",courseDivsList); 
  						},
			function(e) { //Fail callback
				//console.log('sendAppMessage courseDivCount:'+courseDivCount + " courseDivsList: "+ courseDivsList);
				//Pebble.showSimpleNotificationOnPebble("Upload (8) failed, retrying: ","current course menu"); 						
				//setTimeout(function(){flagDataLoaded();},1000);
				}
			 );
});					  	

function dispData(){
	var msgObj = {};
	msgObj[0] = "14:38 (GPS)"; //GPS Time
	msgObj[12] =  "1 TGL" ; //presentPosData.legIdx+": "+ presentPosData.WptName; //WptName
	console.log("sending Obj: "+ JSON.stringify(msgObj));
	Pebble.sendAppMessage(msgObj, function(e) { //Success callback
			//lastPolledTimeStamp = Date.now();	//managing the polling process
			 console.log("NavDatSend OK");
			//pollComplete = true;
  			},
  		function(e) { //Fail callback
			console.log("NavDatSend FAIL");
  		}
	);			
}



