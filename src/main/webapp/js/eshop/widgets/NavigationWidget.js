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
Event = YUI.event,
YUI.add("navigationWidget", function(Y) {
    function NavigationWidget(config) {
        NavigationWidget.superclass.constructor.apply(this, arguments);
    }

    NavigationWidget.NAME = "navigationWidget";

    NavigationWidget.ATTRS = {        
    };

    Y.extend(NavigationWidget, Y.Phresco.PhrescoWidget, {
        initializer: function() {
        /*
         * initializer is part of the lifecycle introduced by 
         * the Base class. It is invoked during construction,
         * and can be used to setup instance specific state or publish events which
         * require special configuration (if they don't need custom configuration, 
         * events are published lazily only if there are subscribers).
         *
         * It does not need to invoke the superclass initializer. 
         * init() will call initializer() for all classes in the hierarchy.
         */
        },

        destructor : function() {
        /*
         * destructor is part of the lifecycle introduced by 
         * the Widget class. It is invoked during destruction,
         * and can be used to cleanup instance specific state.
         *
         * Anything under the boundingBox will be cleaned up by the Widget base class
         * We only need to clean up nodes/events attached outside of the bounding Box
         *
         * It does not need to invoke the superclass destructor. 
         * destroy() will call initializer() for all classes in the hierarchy.
         */
        },

        render : function() {
            /*
         * render is part of the lifecycle introduced by the
         * Widget class. Widget's renderer method invokes:
         *
         *     render()
         *     bind()
         *     sync()
         *
         * render is intended to be used by the Widget subclass
         * to create or insert new elements into the DOM. 
         */       
            var jsonData = this.get("banner");
            this.createContent(this.getTargetNode());
        },

        bind : function() {
        },

        sync : function() {
        /*
         * sync is intended to be used by the Widget subclass to
         * update the UI to reflect the initial state of the widget,
         * after render. From there, the event listeners we bound above
         * will take over.
         */
        },

        captureData : function(jsonData) {
            this.set("navigation", jsonData);
        },

        createContent : function(targetNode) {
            targetNode.empty();
            var headerTabInner = this.createElement('<div class="header_tabinner">');
            var headerTabUL = this.createElement('<ul>');
            var headerTabLIBrowse = Y.Node.create('<li id="browse-tab" class="browse"><a href="#">Browse</a></li>');
            headerTabLIBrowse.obj = this;
            headerTabLIBrowse.id = 'browse-tab';
            Y.on('click' , this.showTab, headerTabLIBrowse);

            var headerTabLISpecial = Y.Node.create('<li id="special-tab" class="special"><a href="#">Special Offers</a></li>');
            headerTabLISpecial.obj = this;
            headerTabLISpecial.id= 'special-tab';
            Y.on('click' , this.showTab, headerTabLISpecial);
            
            
            var headerTabLICart = Y.Node.create('<li id="cart-tab" class="cart"><a href="#">My Cart</a></li>');
            headerTabLICart.obj = this;
            headerTabLICart.id = 'cart-tab';
			Y.on('click' , this.showMyshoppingcart, headerTabLICart);

            headerTabUL.appendChild(headerTabLIBrowse);
            headerTabUL.appendChild(headerTabLISpecial);
            headerTabUL.appendChild(headerTabLICart);
            headerTabInner.appendChild(headerTabUL);

            targetNode.appendChild(headerTabInner);
        }
		,
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        }
    });

    Y.namespace("Phresco").NavigationWidget = NavigationWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
