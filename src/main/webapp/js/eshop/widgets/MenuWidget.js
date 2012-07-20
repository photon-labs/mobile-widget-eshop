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
YUI.add("menuWidget", function(Y) {
    function MenuWidget(config) {
        MenuWidget.superclass.constructor.apply(this, arguments);
    }

    MenuWidget.NAME = "menuWidget";

    MenuWidget.ATTRS = {        
    };

    Y.extend(MenuWidget, Y.Phresco.PhrescoWidget, {
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
            this.set("navigation", jsonData);
        },

        createContent : function(targetNode) {

            var innerWrap = this.createElement('<div class="inner_wrap">');
            var headerLogo = this.createElement('<div class="header" style="text-align: center;"><img src="images/eshop/logo.png" /></div>');
            var bodyIconRows = this.createElement('<div class="body_icon_row">');

            var firstRowIcons = this.createElement('<div class="icons_row">');
            var firstRowUL = this.createElement('<ul>');
            var homeLI = this.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/home_icon.png" /></div><div class="fonts">Home</div></a></li>');
            var registerLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/register_icon.png" /></div><div class="fonts">Register</div></a></li>');
            registerLI.obj = this;
            registerLI.id = 'register-tab';
            Y.on('click' , this.showTab, registerLI);

            var myCartLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/my_cart_icon.png" /></div><div class="fonts">My Cart</div></a></li>');
            myCartLI.obj = this;
            myCartLI.id = 'cart-tab';
            Y.on('click' , this.showTab, myCartLI);
            
            firstRowUL.appendChild(homeLI);
            firstRowUL.appendChild(registerLI);
            firstRowUL.appendChild(myCartLI);
            firstRowIcons.appendChild(firstRowUL);

            var firstRowClearBoth = this.createElement('<div style="clear:both;"></div>');
            firstRowIcons.appendChild(firstRowClearBoth);

            var secondRowIcons = this.createElement('<div class="icons_row">');
            var secondRowUL = this.createElement('<ul>');
            var searchLI = this.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/search_icon.png" /></div><div class="fonts">Search</div></a></li>');
            var browseLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/browse_icon.png" /></div><div class="fonts">Browse</div></a></li>');
            browseLI.obj = this;
			browseLI.id = "browse-tab";
            Y.on('click' , this.showCategories , browseLI);
            
            var loginLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/loginicon.png" /></div><div class="fonts">Login</div></a></li>');
            loginLI.obj = this;
            loginLI.id = 'login-tab';
            Y.on('click' , this.showTab, loginLI);

			secondRowUL.appendChild(searchLI);
            secondRowUL.appendChild(browseLI);
            secondRowUL.appendChild(loginLI);
            secondRowIcons.appendChild(secondRowUL);

            var secondRowClearBoth = this.createElement('<div style="clear:both;"></div>');
            secondRowIcons.appendChild(secondRowClearBoth);

            var thirdRowIcons = this.createElement('<div class="icons_row">');
            var thirdRowUL = this.createElement('<ul>');
            var settingLI = this.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/setting_icon.png" /></div><div class="fonts">Settings</div></a></li>');
            var offerLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/special_offer_icon.png" /></div><div class="fonts">Special Offers</div></a></li>');
            offerLI.obj = this;
            offerLI.id= 'special-tab';
            Y.on('click' , this.showTab, offerLI);
            
            var eventsLI = this.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/events_icon.png" /></div><div class="fonts">Events</div></a></li>');
            thirdRowUL.appendChild(settingLI);
            thirdRowUL.appendChild(offerLI);
            thirdRowUL.appendChild(eventsLI);
            thirdRowIcons.appendChild(thirdRowUL);

            var thirdRowClearBoth = this.createElement('<div style="clear:both;"></div>');
            thirdRowIcons.appendChild(thirdRowClearBoth);

            bodyIconRows.appendChild(firstRowIcons);
            bodyIconRows.appendChild(secondRowIcons);
            bodyIconRows.appendChild(thirdRowIcons);

            innerWrap.appendChild(headerLogo);
            innerWrap.appendChild(bodyIconRows);
            targetNode.appendChild(innerWrap);

            $('#splash').hide();
            $('#container').show();
            $("html").css("background","none"); 
                
        }
    });

    Y.namespace("Phresco").MenuWidget = MenuWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
