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
YUI.add("footerWidget", function(Y) {
    function FooterWidget(config) {
        FooterWidget.superclass.constructor.apply(this, arguments);
    }

    FooterWidget.NAME = "footerWidget";

    FooterWidget.ATTRS = {        
        color : {
            value : []
        },
        imgUrl : {
            value : []
        }
    };

    Y.extend(FooterWidget, Y.Phresco.PhrescoWidget, {
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
            this.set("header", jsonData);
          },

        createContent : function(targetNode) {
            targetNode.empty();

            var footerContainer = this.createElement('<div id="container-foot" class="footer">');

            var ul = this.createElement('<ul>');
            var homeLI = Y.Node.create('<li class="home"></li>');
			homeLI.obj = this;
            Y.on('click' , this.showHome , homeLI);
			

            var browseLI = Y.Node.create('<li class="browse" ></li>');
            browseLI.obj = this;
			browseLI.id= 'browse-tab';
            Y.on('click' , this.showCategories , browseLI);

            var specialOffersLI = Y.Node.create('<li class="spl_offer"></li>');
            specialOffersLI.obj = this; 
            specialOffersLI.id= 'special-tab';
            Y.on('click' , this.showTab , specialOffersLI);

            var myCartLI = Y.Node.create('<li class="mycart"></li>');
            myCartLI.obj = this;
            myCartLI.id = 'cart-tab';
            Y.on('click' , this.showMyshoppingcart, myCartLI);
            

            var moreLI = this.createElement('<li class="more"></li>');

            ul.appendChild(homeLI);
            ul.appendChild(browseLI);
            ul.appendChild(specialOffersLI);
            ul.appendChild(myCartLI);
            ul.appendChild(moreLI);

            footerContainer.appendChild(ul);
            targetNode.appendChild(footerContainer);

        },
        callback : function (id, data) {
            data = Y.JSON.parse(data.responseText);
            if(data["Errors : "] !== undefined){ 
                $('#modify_reservation_alert_msg').html('We were unable to locate your reservation. Please confirm the information you entered is correct.');
            }
            else if(data["Errors"] !== undefined){ 

                $('#modify_reservation_alert_msg').html('We were unable to connect server.');
            }
            else{ 
                window.location = "index.html";
            }
        }
    });

    Y.namespace("Phresco").FooterWidget = FooterWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
