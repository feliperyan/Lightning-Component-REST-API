({
	handleWebSocketEvent : function(component, event, helper) {
        console.log('App event received.');
		var message = event.getParam("websocket_message");        
        component.set("v.latestMessage", message);
        
        // Check whether we just received a record-id as an event
        var theRecord = helper.isRecordId(component, event);
        if (theRecord !== ''){
            console.log('setting');
            component.find('profileComponent').set("v.recordId", theRecord);            
        }
	}
})