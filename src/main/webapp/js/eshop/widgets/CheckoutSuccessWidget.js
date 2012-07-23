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
YUI.add("checkoutSuccessWidget", function(Y) {
    function CheckoutSuccessWidget(config) {
        CheckoutSuccessWidget.superclass.constructor.apply(this, arguments);
    }

    CheckoutSuccessWidget.NAME = "CheckoutSuccessWidget";

    CheckoutSuccessWidget.ATTRS = {        
        targetNode : {
            value : []
        },
        onSelectedListeners : {
            value : []
        }
    };

    Y.extend(CheckoutSuccessWidget, Y.Phresco.PhrescoWidget, {
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
            var jsonData = this.get("newproducts");
            this.createContent(this.getTargetNode());
        },

        bind : function() {
            /*
             * bind is intended to be used by the Widget subclass 
             * to bind any event listeners which will drive the Widget UI.
             * 
             * It will generally bind event listeners for attribute change
             * events, to update the state of the rendered UI in response 
             * to attribute value changes, and also attach any DOM events,
             * to activate the UI.
             */

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
            this.createContent(this.getTargetNode(), jsonData);
            var target = this.get("targetNode");
            $(target).unmask();
        },

        createContent : function(targetNode, jsonData) {
            if (true) {
                targetNode.empty();
                var apiRef = this.get("apiReference");
                apiRef.set("backPage", "Products");
                var url = apiRef.get("wsURLWithoutContext");
                var apiRef = this.get("apiReference");
                var orderDetail = apiRef.get("orderDetail", orderDetail); 
                var mycart = this.createElement('<div class="mycart_div">');
                var mycart_head = this.createElement('<div class="mycart_head">Order Status</div>');                
                var emailblock = this.createElement('<div class="status_cond">');
                var emailblocksub = this.createElement('<div class="status_inner_div">');
                var emailblocksubp1 = this.createElement('<p>Order Status Message</p>');
                var emailblocksubp2 = this.createElement('<p class="text">Your order is complete!</p>');
                var emailblocksubp3 = this.createElement('<p class="text">Your order number is XXX.</p>');               
                var emailblocksubp4 = this.createElement('<p class="text">Thanking you for shopping at Phresco. While logged in. You may continue shopping or view your order status and order.</p>');
             
                emailblocksub.appendChild(emailblocksubp1);
				emailblocksub.appendChild(emailblocksubp2);
				emailblocksub.appendChild(emailblocksubp3);
				emailblocksub.appendChild(emailblocksubp4);
                emailblock.appendChild(emailblocksub); 
                mycart.appendChild(mycart_head);        
                mycart.appendChild(emailblock);                     
                targetNode.appendChild(mycart);
                
            } else {
            }

            $(document).ready(function(){
                var myScroll = new iScroll('scroller');
                document.addEventListener('touchmove', function (e) { 
                    e.preventDefault(); 
                }, 
                false);
                document.addEventListener('DOMContentLoaded', myScroll, false);
            });
                
        },
       
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        }
    });

    Y.namespace("Phresco").CheckoutSuccessWidget = CheckoutSuccessWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
