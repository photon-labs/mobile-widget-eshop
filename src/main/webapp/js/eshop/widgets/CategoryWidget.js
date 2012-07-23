/*
 * ###
 * PHR_HTML5MobileWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
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
YUI.add("categoryWidget", function(Y) {
    function CategoryWidget(config) {
        CategoryWidget.superclass.constructor.apply(this, arguments);
    }

    CategoryWidget.NAME = "categoryWidget";

    CategoryWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(CategoryWidget, Y.Phresco.PhrescoWidget, {
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
            this.createContent(this.getTargetNode(), null);
        },

        bind : function() {
            var targetNode = this.getTargetNode();
            //Y.on('click', this.onClickBookButton, bookButton);
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
            this.createContent(this.getTargetNode(), jsonData);
        },
        createContent : function(targetNode, jsonData) {

            if (jsonData != null) {
                targetNode.empty();
                var apiRef = this.get("apiReference");
                apiRef.set("backPage", "Categories");
                var url = apiRef.wsURLWithoutContext;
				var config = apiRef._getConfigData();
                var webImage = config.imagePath.mobile;
                
                var categoryList = this.createElement('<div class="cat_lister">');
                var navUL = this.createElement('<ul>');

                for (var i = 0; i < jsonData.category.length; i++) {
                    var category = jsonData.category[i];
                    var imageURL = url + '/' + webImage + category.image;
                    var navLI = this.createElement('<li>');
                    //var navLIA = Y.Node.create('<span id=' + category['id'] + '"><a id="displayProducts" href="javascript:void(0);">' + category['name'] + '</a></span>');
                    var navLIA = Y.Node.create('<a href="#"><span class="listicon"><img src="' + imageURL + '" title="image" border="0"  /></span><span class="listicontext">' + category['name'] + '<span> (' + category.productCount + ')</span></span></a>');

                    navLIA.obj = this;
                    navLIA.data = category['id'];
					navLIA.id = "browse-tab";
                    Y.on('click' , this.showProducts , navLIA);
                    
                    navLI.appendChild(navLIA);
                    navUL.appendChild(navLI);
                }
                
                //divMore.appendChild(moreUL);
                categoryList.appendChild(navUL);
                targetNode.appendChild(categoryList);

                if ($('#container').is(":visible")) {
                    this.renderWidgets();
                } else {
                    
                }
            }
			/* for highlighting purpose */
            $('#special-tab').removeClass("active");
            $('#cart-tab').removeClass("active");
			$('#browse-tab').addClass("active");
			
			$('.footer li.browse').addClass("browse_active");
			$('.footer li.spl_offer').removeClass("spl_offer_active");
			$('.footer li.mycart').removeClass("mycart_active");
			
			/* highlighting end */
            $(document).ready(function(){
                var myScroll = new iScroll('scroller');
                document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
                document.addEventListener('DOMContentLoaded', myScroll, false);
            });
        },
    });

    Y.namespace("Phresco").CategoryWidget = CategoryWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
