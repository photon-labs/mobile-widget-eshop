/*
 * ###
 * PHR_HTML5MobileWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
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