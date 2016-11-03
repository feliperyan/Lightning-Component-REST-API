({
    doInit: function(component, event, helper) {
        //listen to iframe's message
        addEventListener("message", 
            $A.getCallback(function(event) {
                if(event.data.type === 'ready' && component.find("vfIframe")) {//iframe loaded
                component.iframeReady = true;      
                } else if(event.data.type === 'response') { //send response
                    var cmpEvt = $A.get("e.c:WebSocketEvent");
                    cmpEvt.setParams({ "websocket_message" : event.data.response});
                    cmpEvt.fire();
                    console.log('Got event from iFrame');
                    console.log(event.data.response);
                    helper.listMessage(component, event);
                }
            }), 
        false);

    }
})
