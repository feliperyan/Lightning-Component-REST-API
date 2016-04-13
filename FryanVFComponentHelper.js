({
	listMessage : function(component, event) {
        b = document.getElementById(component.getGlobalId() + 'bucket');
        b.innerHTML += '<p>'+event.data.response+'</p>';
		
	}
})