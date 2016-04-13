({
	handleWebSocketEvent : function(component, event, helper) {
        console.log('App event received.');
		var message = event.getParam("websocket_message");
        component.set("v.latestMessage", message);
	}
})