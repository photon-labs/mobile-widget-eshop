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
YUI.add("myCartWidget", function(Y) {
    function MyCartWidget(config) {
        MyCartWidget.superclass.constructor.apply(this, arguments);
    }

    MyCartWidget.NAME = "MyCartWidget";

    MyCartWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(MyCartWidget, Y.Phresco.PhrescoWidget, {
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
            $(document).ready(function(){
                var myScroll = new iScroll('scroller');
                document.addEventListener('touchmove', function (e) { 
                    e.preventDefault(); 
                },
                false);
                document.addEventListener('DOMContentLoaded', myScroll, false);
            });
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
            targetNode.empty();

            var apiRef = this.get("apiReference");
            var url = apiRef.get("wsURLWithoutContext");
            var config = apiRef._getConfigData();
            var webImage = config.web.web;
    
            var productQty = apiRef.get("productQty");
            var productDetails = productQty.productDetail;
            console.info("productDetails*****",productDetails);
            if(productQty.quantity){
                var quantity = productQty.quantity;
            }    
            else {
                var quantity = 1;
            }    
            
            var totalItem = productQty.totalItem;

            var currentProductId = 0;
            if(apiRef.get("currentProductId") !== 0 ){
                var currentProductId = apiRef.get("currentProductId");
                console.info('currentProductId = ',currentProductId);
            }

            var imageURL = url + '/' + webImage + productDetails.image;
            var detailImageURL = url + '/' + webImage + productDetails.detailImage;

            var myCart = this.createElement('<div class="mycart_div">');
            var myCartHead = this.createElement('<div class="product_name">My Cart</div>');
            myCart.appendChild(myCartHead);
            var subTotal = 0;
            for (var j = 0; j < productDetails.length; j++) {
                var myCartQuantity = this.createElement('<div class="mycart_quantity">');
                var myCartQuantitySub = this.createElement('<div class="mycart_quan">');
                var myCartUL = this.createElement('<ul>');
                var myCartLIQuantity = this.createElement('<li><span class="lft">Quantity  :</span><span class="rht">'+productDetails[j].quantity+'</span>');
                var myCartLIProduct = this.createElement('<li><span class="lft">Product   :</span><span class="rht">'+productDetails[j].name+'</span>');
                var myCartLIPrice = this.createElement('<li><span class="lft">Price :</span><span class="rht">$' +productDetails[j].price+'</span>');
                myCartUL.appendChild(myCartLIQuantity);
                myCartUL.appendChild(myCartLIProduct);
                myCartUL.appendChild(myCartLIPrice);
                myCartQuantitySub.appendChild(myCartUL);
                myCartQuantity.appendChild(myCartQuantitySub);
                
                subTotal = (Number(subTotal) + (Number(productDetails[j].quantity) * Number(productDetails[j].price)));
                
                myCart.appendChild(myCartQuantity);
            }
            
                var myCartSubTotal = this.createElement('<div class="mycart_subtotal">Subtotal: $'+subTotal+'</div>');
                var myCartButton = this.createElement('<div class="mycart_btn">');
                var myCartButtonMid = this.createElement('<div class="mycart_btn_mid">');
                var myCartCheckOut = Y.Node.create('<div class="mycart_mid_bu"><a href="#">Checkout</a></div>');
                    myCartCheckOut.obj = this;
                    Y.on('click' , this.showProductOrder, myCartCheckOut);
                    
                if(subTotal > 0){
                    myCartButtonMid.appendChild(myCartCheckOut);
                }
                
                myCartButton.appendChild(myCartButtonMid);

                var myCartClearBoth = this.createElement('<div style="clear:both"></div>');
                myCartButton.appendChild(myCartClearBoth);
                
           
            myCart.appendChild(myCartSubTotal);
            myCart.appendChild(myCartButton);

            targetNode.appendChild(myCart);
            
            if ($('#container').is(":visible")) {
                    this.renderWidgets();
                }
        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        addToMyCart:function(){
            var widgetObj = this.obj;
            var productQuantity = $("#productQuantity_"+this.pid).val();
            var productTotalAmount = $("#totalAmount_"+this.pid).html();
            
            var addToCartData = {};
            addToCartData.productId = this.pid;
            addToCartData.productQuantity = productQuantity;
            addToCartData.productTotalAmount = productTotalAmount;
           
            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onCartListeners");
            apiRef.set("addToCartData", addToCartData);            

            $("#totalItem").html(productQuantity);
            $("#totalPrice").html(productTotalAmount);
        },

        addTotal:function(){
            var productId = this.pid;
            var total = this.data * $("#productQuantity_"+productId).val();
            $("#totalAmount_"+productId).html(total);
            $("#subToal").html(total);
        }
    });

    Y.namespace("Phresco").MyCartWidget = MyCartWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
