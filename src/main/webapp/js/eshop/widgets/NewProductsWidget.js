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
YUI.add("newProductsWidget", function(Y) {
    function NewProductsWidget(config) {
        NewProductsWidget.superclass.constructor.apply(this, arguments);
    }

    NewProductsWidget.NAME = "newProductsWidget";

    NewProductsWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(NewProductsWidget, Y.Phresco.PhrescoWidget, {
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
            this.set("products", jsonData);
            this.createContent(this.getTargetNode(), jsonData);
            var target = this.get("targetNode");
            $(target).unmask();
        },

        createContent : function(targetNode, jsonData) {
            if (jsonData !== null) {
                targetNode.empty();
                var apiRef = this.get("apiReference");
                var url = apiRef.get("wsURLWithoutContext");
                var config = apiRef._getConfigData();
                var webImage = config.web.web;
                var h3 = this.createElement('<h3>Products</h3>');
                var newProductsUL = this.createElement('<ul>');

                for (i = 1; i <= jsonData.length; i++) {
                    if (jsonData[i] !== undefined) {
                        var imageURL = url + '/' + webImage + jsonData[i].image;
                        var li = this.createElement('<li>');

                        var divImg = this.createElement('<div class="img"><a href="#"><img alt="" src="' + imageURL + '"></a></div>');
                        var divInfo = this.createElement('<div class="info">');

                        var productA = this.createElement('<a class="title" href="#">' + jsonData[i].name + '</a>');

                        var priceDiv = this.createElement('<div class="price">');
                        var priceSpan = this.createElement('<span class="st">Our price:</span><strong>' + this.getAmountByCurrency(jsonData[i].listPrice) + '</strong><br>');
                        var sellSpan = this.createElement('<span class="st2">Sell at:</span><span class="st3">' + this.getAmountByCurrency(jsonData[i].sellPrice) + '</span>');
                        priceDiv.appendChild(priceSpan);
                        priceDiv.appendChild(sellSpan);

                        var actionsDiv = this.createElement('<div class="actions">');
                        var details = this.createElement('<a href="#">Details</a>');
                        var addToCart = this.createElement('<a href="#">Add to cart</a>');
                        actionsDiv.appendChild(details);
                        actionsDiv.appendChild(addToCart);

                        li.appendChild(divImg);
                        divInfo.appendChild(productA);
                        divInfo.appendChild(priceDiv);
                        divInfo.appendChild(actionsDiv);

                        li.appendChild(divInfo);
                        newProductsUL.appendChild(li);
                    }
                }            

                targetNode.appendChild(h3);
                targetNode.appendChild(newProductsUL);
            } else {
            }

        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        }
    });

    Y.namespace("Phresco").NewProductsWidget = NewProductsWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
