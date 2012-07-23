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
YUI.add("shoppingCartWidget", function(Y) {
    function ShoppingCartWidget(config) {
        ShoppingCartWidget.superclass.constructor.apply(this, arguments);
    }

    ShoppingCartWidget.NAME = "shoppingCartWidget";

    ShoppingCartWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(ShoppingCartWidget, Y.Phresco.PhrescoWidget, {
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
            var myCartHead = this.createElement('<div class="product_name">My Shopping Cart</div>');
            myCart.appendChild(myCartHead);
            
            var productTotal = 0; 
            var subTotal = 0;
            for (var j = 0; j < productDetails.length; j++) {
                var mycart_quality_div = Y.Node.create('<div class="mycart_quality_div">');
				mycart_quality_div.obj = this;
				mycart_quality_div.productId = productDetails[j].productId;
				Y.on('click' , this.focusIt , mycart_quality_div);
				
                    var mycart_qua_div = this.createElement('<div class="mycart_qua_div">');
                        var mycart_borderline = this.createElement('<div class="mycart_borderline">');
                            var cartImage = this.createElement('<div class="cat_listerDetail_image"><img src="'+productDetails[j].detailImageURL+'" border="0" alt="image" /></div>');
                            var product_left_div = this.createElement('<div class="product_left_div">');
                                var product_head = this.createElement('<div class="product_head">');
                                    var review_cont = this.createElement('<div class="review_cont">');
                                        var product_contleft =  this.createElement('<div class="product_contleft"><p><b>'+productDetails[j].name+'</b></p></div>');
                                        var quality_div =  this.createElement('<div class="quality_div">');
                                            var mycart_remove_bu =  this.createElement('<div class="mycart_remove_bu">');
                                                var mycart_remove =  Y.Node.create('<div class="mycart_remove"><a href="#">Remove</a></div>');
                                                    mycart_remove.obj = this;
                                                    mycart_remove.productId = productDetails[j].productId;
                                                    Y.on('click' , this.removeProduct , mycart_remove);
                                                mycart_remove_bu.appendChild(mycart_remove);
                                        
                                            var mycart_quality =  this.createElement('<span class="mycart_quality">Quantity : '+productDetails[j].quantity+'</span>');
                                            var mycart_size =  Y.Node.create('<input type="text" size="2" value="'+productDetails[j].quantity+'" name="productQuantity_'+productDetails[j].productId+'" autofocus="autofocus" id="productQuantity_'+productDetails[j].productId+'" />');
												mycart_size.data = 'productQuantity_'+productDetails[j].productId;
												mycart_size.productId = productDetails[j].productId;
												
												Y.on('click' , this.focusIt , mycart_size);
												Y.on('blur' , this.checkNum , mycart_size);
												
                                            quality_div.appendChild(mycart_quality);
                                        quality_div.appendChild(mycart_size);
                                        quality_div.appendChild(mycart_remove_bu);
                                        var mycart_price_div =  this.createElement('<div class="mycart_price_div">');
                                            var mycart_price =  this.createElement('<span class="mycart_price">Price: $' +productDetails[j].price+'</span>');
                                        mycart_price_div.appendChild(mycart_price);
                                    
                                    review_cont.appendChild(product_contleft);
                                    review_cont.appendChild(quality_div);
                                    review_cont.appendChild(mycart_price_div);
                                product_head.appendChild(review_cont);  
                            product_left_div.appendChild(product_head); 
                
                mycart_borderline.appendChild(cartImage);
                mycart_borderline.appendChild(product_left_div);
                mycart_qua_div.appendChild(mycart_borderline);
            
            mycart_quality_div.appendChild(mycart_qua_div);
            myCart.appendChild(mycart_quality_div);
            subTotal = (Number(subTotal) + (Number(productDetails[j].quantity) * Number(productDetails[j].price)));
        }

        var mycart_subtotal =  this.createElement('<div class="mycart_subtotal">Subtotal: $ <span id="subTotal">'+subTotal+'</span></div>');
        var mycart_btn =  this.createElement('<div class="mycart_btn">');
        var mycart_update_view_bu =  this.createElement('<div class="mycart_update_view_bu">');
        var mycart_mid_bu =  Y.Node.create('<div class="mycart_mid_bu"><a href="#">Update Cart</a></div>');
            
            mycart_mid_bu.obj = this;
            mycart_mid_bu.pid = productDetails.id;
            Y.on('click' , this.addToMyCart , mycart_mid_bu);
            
            mycart_update_view_bu.appendChild(mycart_mid_bu);

        var mycart_update_view_bu1 =  this.createElement('<div class="mycart_update_view_bu">');
        var mycart_mid_bu1 =  Y.Node.create('<div class="mycart_mid_bu"><a href="#">Check Out</a></div>');
            mycart_mid_bu1.obj = this;
            mycart_mid_bu1.id = 'cart-tab';
            Y.on('click' , this.showProductOrder, mycart_mid_bu1);
        
            mycart_update_view_bu1.appendChild(mycart_mid_bu1);
        var clearDiv =  this.createElement('<div style="clear:both"></div>');
        
        if(subTotal > 0){
            mycart_btn.appendChild(mycart_update_view_bu);
            mycart_btn.appendChild(mycart_update_view_bu1);
        }   
            mycart_btn.appendChild(clearDiv);
            
        
        myCart.appendChild(mycart_subtotal);
        myCart.appendChild(mycart_btn);
        
        targetNode.appendChild(myCart);
       
        
        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        addToMyCart:function(){
            var widgetObj = this.obj;
         
         var apiRef = widgetObj.get("apiReference");
         var productQty = apiRef.get("productQty");
         var productArray = productQty.productDetail;

         var totalItem = 0;
         var cartTotal = 0;
         var subTotal = 0;
            for(var i=0; i<productArray.length;i++){
                product = productArray[i];

                var quantity = $("#productQuantity_"+product.productId).val();

                if(quantity !== product.quantity){
                    product.quantity =  quantity;
                }
                totalItem = Number(totalItem) + Number(product.quantity);
                cartTotal = Number(product.quantity) * Number(product.price);
                
                subTotal = Number(subTotal) + Number(cartTotal);
            }
            
            $("#subTotal").html(subTotal.toFixed(2));
            
            productQty.productDetail = productArray;
            productQty.totalItem = totalItem;
            productQty.cartTotal = cartTotal;
    
            
           var apiRef = widgetObj.get("apiReference");
           apiRef.set("productQty", productQty);
        },
		focusIt:function(){
			$('#'+this.data).focus();
		},
		checkNum:function(e){
				$(this.data).focus();
			var cVal = $("#productQuantity_"+this.productId).val();
			if(!(/^ *[0-9]+ *$/.test(cVal))){
				document.getElementById(this.data).value = 1;
			}
		},
       addTotal:function(){
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var productQty = apiRef.get("productQty");
            var productArray = productQty.productDetail;

            var productId = this.pid;

            var total = this.data * $("#productQuantity_"+productId).val();
            $("#totalAmount_"+productId).html(total.toFixed(2));
        }
    });

    Y.namespace("Phresco").ShoppingCartWidget = ShoppingCartWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
