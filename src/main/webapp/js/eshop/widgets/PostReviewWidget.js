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
YUI.add("postReviewWidget", function(Y) {
    function PostReviewWidget(config) {
        PostReviewWidget.superclass.constructor.apply(this, arguments);
    }

    PostReviewWidget.NAME = "postReviewWidget";

    PostReviewWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(PostReviewWidget, Y.Phresco.PhrescoWidget, {
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
			console.info('jason data =' , jsonData.id);
			if(apiRef.get("userId")){
				var userId = apiRef.get("userId");
			}		
            var myCart = this.createElement('<div class="mycart_div">');
            var myCartHead = this.createElement('<div class="product_name">Post Review</div>');
           
               var writeareviewDiv = this.createElement('<div class="tab_text" id="writeareview">');
                    var reviewForm = this.createElement('<form id="contact" method="post" action="form.html">');
                    var reviewFieldset = this.createElement('<fieldset>');

                    var reviewRating = this.createElement('<div></div>');
					var reviewRatingTitle = this.createElement('<label for="name"><span class="comments_text">Rate this</span></label>');
					var ratingStarSpan = this.createElement('<span class="ratingStarSpan"></span>');
					
					for (var i = 1; i <= 5; i++) {
						var starImage = 'start_dis.png';
						var star = Y.Node.create('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/start_dis.png" width="16" height="16" title="' + i + '"></a>');
						star.obj = this;
						star.data = i;
						Y.on('click' , this.addRating , star);
						ratingStarSpan.appendChild(star);
					}
					var starValueBox = this.createElement('<input type="hidden" name="starValue" id="starValue" size="2">');
					var productId = this.createElement('<input type="hidden" name="productId" id="productId" value="'+jsonData.id+'">');
					reviewRating.appendChild(reviewRatingTitle);
					reviewRating.appendChild(ratingStarSpan);
					reviewRating.appendChild(productId);
					reviewRating.appendChild(starValueBox);
					
                    var reviewComment = this.createElement('<label for="comments"><span class="comments_text">Comments</span></label>');
					var reviewCommentBox = this.createElement('<textarea  autofocus="autofocus" name="comments" id="comments" placeholder="Your comments" cols="60" rows="7" scale="no" class="com_commentbox"</textarea>');
					reviewComment.appendChild(reviewCommentBox);
					
                    reviewFieldset.appendChild(reviewRating);
                    reviewFieldset.appendChild(reviewComment);
					
                    var reviewSubmit = this.createElement('<div class="postreviewbutton">');
					var reviewSubmitButton = Y.Node.create('<input type="button" value="Submit" class="buttonstyle"/>');
                    reviewSubmitButton.obj = this;
					reviewSubmitButton.data = jsonData.id;
					Y.on('click' , this.reviewSubmitFn , reviewSubmitButton);
					
						
					var reviewCancelButton = Y.Node.create('<input type="button" value="Cancel" class="buttonstyle"/>');
                    reviewCancelButton.obj = this;
					reviewCancelButton.data = jsonData.id;
					Y.on('click' , this.loginPop , reviewCancelButton);
					
					reviewSubmit.appendChild(reviewSubmitButton);
					reviewSubmit.appendChild(reviewCancelButton);
					reviewFieldset.appendChild(reviewSubmit);
					
                    reviewForm.appendChild(reviewFieldset);

                writeareviewDiv.appendChild(reviewForm);
				
            targetNode.appendChild(writeareviewDiv);
            
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
        },
		addRating:function(){
           var starId = this.data;
		  $("#starValue").val(starId);
		   for(var i=1; i<= starId; i++){
			$("#starImage_"+i).html('<img src="images/eshop/start.png" width="16" height="16" title="' + i + '">');
		   }
   		   for(var j=starId+1; j <= 5; j++){
			$("#starImage_"+j).html('<img src="images/eshop/start_dis.png" width="16" height="16" title="' + j + '">');
		   }
		
        }
    });

    Y.namespace("Phresco").PostReviewWidget = PostReviewWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
