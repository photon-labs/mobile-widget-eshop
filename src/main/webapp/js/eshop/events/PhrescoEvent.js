YUI.add("phrescoEvent", function(Y) {
    
    function PhrescoEvent(config) {
        PhrescoEvent.superclass.constructor.apply(this, arguments);
    }
    
    PhrescoEvent.NAME = "phrescoEvent";
    
    PhrescoEvent.ATTRS = {
        phrescoEvents : []
    };

    Y.extend(PhrescoEvent, Y.Base, {
        
        initializer: function() {
        
        },
        
        destructor : function() {
            
        },
        
        addPhrescoEvent : function (event, listeners, scope) {            
            
            var tcEvnts = this.get("phrescoEvents");
            
            if (tcEvnts === null) {
                tcEvnts = array();
            }    
            
            if (tcEvnts[event] === null){
                tcEvnts[event] = new Y.CustomEvent(event, this);
            }
            for (var i = 0; i < listeners.length; i++) {
                tcEvnts[event].subscribe (listeners[i], scope);
            }
            this.set("phrescoEvents",tcEvnts);  
        },
        
        onPhrescoEvent : function(event) {
            var tcEvnts = this.get("phrescoEvents");
            tcEvnts[event].fire();
        }
    });
    
    Y.namespace("Phresco").PhrescoEvent = PhrescoEvent;
}, "3.3.0", {
    requires:["base"]
});