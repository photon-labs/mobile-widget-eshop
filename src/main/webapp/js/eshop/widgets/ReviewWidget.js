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
YUI.add("reviewWidget", function(Y) {
    function ReviewWidget(config) {
        ReviewWidget.superclass.constructor.apply(this, arguments);
    }

    ReviewWidget.NAME = "reviewWidget";

    ReviewWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(ReviewWidget, Y.Phresco.PhrescoWidget, {
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
                var url = apiRef.get("wsURLWithoutContext");
                var config = apiRef._getConfigData();
                var productReview = jsonData.reviewData.review;
            
                var userId = 0;
                if(apiRef.get("userId")){
                     userId = apiRef.get("userId");
                     }

                var mainDiv = this.createElement('<div class="mycart_div">');
                    var reviedTitleDiv = this.createElement('<div class="mycart_head">Customer Reviews </div>');
                    
                    if(userId > 0){
                       var postReviewText = Y.Node.create('<a href="#" class="mycart_head_span">Post Review</a>');
                       postReviewText.obj = this;
                       postReviewText.data = jsonData.productId;
                       Y.on('click' , this.postReviewPage , postReviewText);
                       reviedTitleDiv.appendChild(postReviewText);
                    }

                    mainDiv.appendChild(reviedTitleDiv);
                    
                    var reviewDiv = this.createElement('<div class="review_div">');
                    
                    if(productReview.ratings){
                        var avgreviewDiv = this.createElement('<div class="review_head">Average Customer Review ('+productReview.average+')</div>');
                        reviewDiv.appendChild(avgreviewDiv);
                        var starTotal = 0;
                        for(var i=productReview.ratings.rating.length-1; i >= 0; i--){
                            var starCount = productReview.ratings.rating[i];
                            starTotal = Number(starTotal) + Number(starCount['value']);
                        }
                        
                        
                        for(var i=productReview.ratings.rating.length-1; i >= 0; i--){
                            var ratingValue = productReview.ratings.rating[i];
                                                  var barWidth = 0;
                            barWidth = (Number(ratingValue['value']) * Number(100))/ Number(starTotal);
                            // To menion the star count in %
                            if(barWidth > 0 ){
                                var percentageBar = Math.round(barWidth) + '%';
                            }else{ var percentageBar = '0 %';}
                            
                            // Star Count
                            var starVal = 'Vote';
                            if(ratingValue['value'] > 1){
                                var starVal = 'Votes';
                            }
                            
                            var review_star_ratio1 = this.createElement('<div class="review_star_ratio">');
                                var review_star_lft1Div1 = this.createElement('<div class="review_star_lft"> ' + ratingValue['key'] + '  Star</div>');
                                var review_star_rht1 = this.createElement('<div class="review_star_rht">');
                                    //percentageBar
                                    var review_ratio_bar1= this.createElement('<div class="review_ratio_bar" style="width:'+Math.round(barWidth)+'%"></div><span class="review_ratio_bar_span"> '+ratingValue['value']+' </span>');  
                                review_star_rht1.appendChild(review_ratio_bar1);
                                review_star_lft1Div1.appendChild(review_star_rht1);
                            review_star_ratio1.appendChild(review_star_lft1Div1);
                           reviewDiv.appendChild(review_star_ratio1);
                        }   
                    
                    
                    mainDiv.appendChild(reviewDiv);
                    
                    for(var j=0; j<productReview.comments.length; j++) {
                        var reviewDetail = productReview.comments[j];
                        var star_bar = this.createElement('<div class="star_bar">');
                            var star_bar_arrow = this.createElement('<div class="star_bar_arrow">');
                                var aLink = this.createElement('<a href="#">');
                                    var ratingDone = false;
                                    for (var i = 0; i < 5; i++) {
                                        var starImage = 'start.png';
                                        if (reviewDetail.rating === i) {
                                            ratingDone = true;
                                        }
                                    if (ratingDone === true) {
                                        starImage = 'start_dis.png';
                                    }
                                    var aSpan1 = this.createElement('<span ><img src="images/eshop/' + starImage + '" border="0" alt="image" /></span>');
                                    aLink.appendChild(aSpan1);

                                }
                                var aDiv = this.createElement('<div class="star_text">'+reviewDetail['comment']+'</div>');
                                var userDiv = this.createElement('<div class="star_text">by : '+reviewDetail['user']+'</div>');
                                var commentDateDiv = this.createElement('<div class="star_text">on :'+reviewDetail['commentDate']+'</div>');
                                aLink.appendChild(aDiv);
                                aLink.appendChild(userDiv);
                                aLink.appendChild(commentDateDiv);
                            star_bar_arrow.appendChild(aLink);
                        star_bar.appendChild(star_bar_arrow);
                    mainDiv.appendChild(star_bar);
                    }
                  }
                    
                targetNode.appendChild(mainDiv);
            } else {
                var loading = this.createElement('<label>Loading...</label>');
                targetNode.appendChild(loading);
            }

            $(document).ready(function(){
                var myScroll = new iScroll('scroller');
                document.addEventListener('touchmove', function (e) { 
                    e.preventDefault(); 
                }, false);
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

    Y.namespace("Phresco").ReviewWidget = ReviewWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
