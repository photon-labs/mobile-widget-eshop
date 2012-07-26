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
YUI.add("productDetailsWidget", function(Y) {
    function ProductDetailsWidget(config) {
        ProductDetailsWidget.superclass.constructor.apply(this, arguments);
    }

    ProductDetailsWidget.NAME = "productDetailsWidget";

    ProductDetailsWidget.ATTRS = {
        targetNode : {
            value : []
        }
    };

    Y.extend(ProductDetailsWidget, Y.Phresco.PhrescoWidget, {
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
            if (jsonData !== null) {
                targetNode.empty();

                var apiRef = this.get("apiReference");
                apiRef.set("backPage", "ProductDetails");
                var url = apiRef.wsURLWithoutContext;
                var config = apiRef._getConfigData();
                var webImage = config.web.web;
                var productDetails = jsonData.product[0];
				console.info('productDetails = ' , productDetails);
                var imageURL = url + webImage + productDetails.image;
                var detailImageURL = url + '/' + webImage + productDetails.image;       
                var youSave = productDetails.listPrice - productDetails.sellPrice;
                
                var productName = this.createElement('<div class="product_name">' + productDetails.name + '</div>');
                
                var pd = this.createElement('<div class="cat_listerDetail">');
                var pdUL = this.createElement('<ul>');
                var pdLI = this.createElement('<li>');

                var pdHolder = this.createElement('<div class="cat_listerDetail_borderline">');
                var pdImage = this.createElement('<div class="cat_listerDetail_image"><img src="' + detailImageURL + '" border="0" title="image" height="57"/></div>');
                var pdLeftHolder = this.createElement('<div class="product_left_div">');
                var pdHead = this.createElement('<div class="product_head">');
                var pdReviewCount = this.createElement('<div class="review_cont">');
                var pdPriceHolder = this.createElement('<div class="product_contleft">');
                var price = this.createElement('<p><b>List Price: ' + this.getAmount(productDetails.listPrice, false, config.supportedCurrencies) + '</b></p>');
                pdPriceHolder.appendChild(price);

                var sellPrice = this.createElement('<p><b>Sell Price: ' + this.getAmount(productDetails.sellPrice, false, config.supportedCurrencies) + '</b></p>');
                pdPriceHolder.appendChild(sellPrice);
				
                var ratingDone = false;
                
                for (var j = 0; j < 5; j++) {
                    var starImage = 'start.png';
                    if (productDetails.rating === j) {
                        ratingDone = true;
                    }
                    if (ratingDone === true) {
                        starImage = 'start_dis.png';
                    }
                    var star = this.createElement('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
                    pdPriceHolder.appendChild(star);
                }

                pdReviewCount.appendChild(pdPriceHolder);
                pdHead.appendChild(pdReviewCount);
                pdLeftHolder.appendChild(pdHead);

                var btnHolder = this.createElement('<div class="review_contright1">');
                var reviewA = Y.Node.create('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a>');
                reviewA.obj = this;
                reviewA.data = productDetails.id;
                Y.on('click' , this.getReviews , reviewA);
               
                var addToCartA = Y.Node.create('<a href="#"><img src="images/eshop/add_cart.png" border="0" title="image" /></a>');
                addToCartA.obj = this;
                var data = {};
                data.productId = productDetails.id;
                data.name = productDetails.name;
                data.quantity = 1;
                data.price = productDetails.sellPrice;
                data.imageURL = imageURL;
                data.detailImageURL = detailImageURL;
                data.totalPrice = (data.quantity * productDetails.sellPrice);

                addToCartA.data = data;
				addToCartA.id = 'cart-tab';
               
                Y.on('click' , this.showShoppingCart , addToCartA);

                btnHolder.appendChild(reviewA);
                btnHolder.appendChild(addToCartA);
                pdLeftHolder.appendChild(btnHolder);

                pdHolder.appendChild(pdImage);
                pdHolder.appendChild(pdLeftHolder);
                
                pdLI.appendChild(pdHolder);
                pdUL.appendChild(pdLI);
                pd.appendChild(pdUL);

                var pdDescHolder = this.createElement('<div class="product_details">');
                var pdSpec = this.createElement('<div class="product_spec">');
                var pdSpecUL = this.createElement('<ul>');
                var pdSpecLI1 = this.createElement('<li class="head">Description</li>');
                var pdSpecLI2 = this.createElement('<li class="text">' + productDetails.description + '</li>');
                pdSpecUL.appendChild(pdSpecLI1);
                pdSpecUL.appendChild(pdSpecLI2);
                pdSpec.appendChild(pdSpecUL);
                pdDescHolder.appendChild(pdSpec);
                
                var pdAttrHolder = this.createElement('<div class="pro_detail">');
                var pdTitle = this.createElement('<div class="pro_detail_head">Details</div>');
                var pdSpecDetail = this.createElement('<div class="pro_spec_detail">');
                var pdSpecDetailUL = this.createElement('<ul>');
                var pdSpecDetailLI1 = this.createElement('<li class="left">TV Type</li>');
                var pdSpecDetailLI2 = this.createElement('<li class="right">: '+productDetails.details['TV Type']+'</li>');
                var pdSpecDetailLI3 = this.createElement('<li class="left">Screen Size</li>');
                var pdSpecDetailLI4 = this.createElement('<li class="right">: '+productDetails.details['Screen Size']+'</li>');
                var pdSpecDetailLI5 = this.createElement('<li class="left">Screen Ratio </li>');
                var pdSpecDetailLI6 = this.createElement('<li class="right">: '+productDetails.details['Screen Ratio']+'</li>');
                var pdSpecDetailLI7 = this.createElement('<li class="left">TV definition</li>');
                var pdSpecDetailLI8 = this.createElement('<li class="right">: '+productDetails.details['TV Definition']+'</li>');
                pdSpecDetailUL.appendChild(pdSpecDetailLI1);
                pdSpecDetailUL.appendChild(pdSpecDetailLI2);
                pdSpecDetailUL.appendChild(pdSpecDetailLI3);
                pdSpecDetailUL.appendChild(pdSpecDetailLI4);
                pdSpecDetailUL.appendChild(pdSpecDetailLI5);
                pdSpecDetailUL.appendChild(pdSpecDetailLI6);
                pdSpecDetailUL.appendChild(pdSpecDetailLI7);
                pdSpecDetailUL.appendChild(pdSpecDetailLI8);
                pdSpecDetail.appendChild(pdSpecDetailUL);
                pdAttrHolder.appendChild(pdTitle);
                pdAttrHolder.appendChild(pdSpecDetail);
                
                pdDescHolder.appendChild(pdAttrHolder);

                targetNode.appendChild(productName);
                targetNode.appendChild(pd);
                targetNode.appendChild(pdDescHolder);
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

    Y.namespace("Phresco").ProductDetailsWidget = ProductDetailsWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
