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
YUI.add("headerWidget", function(Y) {
    function HeaderWidget(config) {
        HeaderWidget.superclass.constructor.apply(this, arguments);
    }

    HeaderWidget.NAME = "headerWidget";

    HeaderWidget.ATTRS = {        
        color : {
            value : []
        },
        imgUrl : {
            value : []
        },
        hideWidgets: {
            value : []
        },
        onSearchListeners : {
            value : []
        }
    };

    Y.extend(HeaderWidget, Y.Phresco.PhrescoWidget, {
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

            var apiRef = this.get("apiReference");
            var userId = 0;
			if(apiRef.get("userId")){
				userId = apiRef.get("userId");
			}
            var headerInner = this.createElement('<div class="headerInner">');
            var btnContainer = this.createElement('<div class="btn_container">');

            var backBtn = Y.Node.create('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Back</p></div></a>');
            backBtn.obj = this;
            Y.on('click' , this.showBackPage , backBtn);

            btnContainer.appendChild(backBtn);
            var logo = this.createElement('<div class="logo"><img src="images/eshop/logo.png" alt="image" />');
            headerInner.appendChild(btnContainer);
            headerInner.appendChild(logo);
			if(userId > 0){
				var btnContainer1 = this.createElement('<div class="btn_container1">');
				var backBtn1 = Y.Node.create('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Logout</p></div></a>');
				backBtn1.obj = this;
				Y.on('click' , this.doLogout , backBtn1);
				btnContainer1.appendChild(backBtn1);
				headerInner.appendChild(btnContainer1);
			}
			
            targetNode.appendChild(headerInner);
        },
        addSearchListener : function(widget) {
            var listeners = this.get("onSearchListeners");
            listeners.push(widget);
            this.set("widgets", widget);
            this.set("onSearchListeners", listeners);
        },
        searchProducts : function() {
            var widgetObj = this.obj;
            console.info('widgetObj = ', widgetObj);
            var searchCriteria = jQuery.trim($("#searchText").val());
            console.info('searchCriteria = ' , searchCriteria);
            
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                console.info('targetNode = ', hideWidgets[i]);
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onSearchListeners");

            for (var i = 0; i < listeners.length; i++) {
                var target = widgetObj.get("widgets").get("targetNode");
                $(target).mask("Loading...");
                apiRef.searchProducts(widgetObj.get("widgets"), searchCriteria, listeners[i]);
            }
           
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        }
    });

    Y.namespace("Phresco").HeaderWidget = HeaderWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
