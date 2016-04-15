({
	isRecordId : function(component, event) {
        console.log("In Helper");
        
        var message = event.getParam("websocket_message");
        
        console.log(message);
        console.log(typeof(message));
        
		var jsonResponse = JSON.parse( message );
        
        console.log('Parse passed');
        
        if (jsonResponse.hasOwnProperty('recordId')){
				console.log(jsonResponse);
            	var recordId15Char = jsonResponse.recordId;
            	recordId15Char = recordId15Char.slice(0,15);
            	return recordId15Char
        }
        
        console.log('recordId wasnt there');
		return '';
	}
})