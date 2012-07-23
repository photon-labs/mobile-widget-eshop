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
YUI.add("loginSuccessWidget", function(Y) {
    function LoginSuccessWidget(config) {
        LoginSuccessWidget.superclass.constructor.apply(this, arguments);
    }

    LoginSuccessWidget.NAME = "loginSuccessWidget";

    LoginSuccessWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(LoginSuccessWidget, Y.Phresco.PhrescoWidget, {
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
             /* this.publish("myEvent", {
                defaultFn: this._defMyEventFn,
                bubbles:false
             }); */

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
                document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
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

            // this._uiSetAttrA(this.get("attrA"));
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
		    //console.info('jasondata = ',jsonData);
            
            var userId = 0;
			if(apiRef.get("userId"))
				userId = apiRef.get("userId");
            //console.info('userId =',userId);

            var myCart = this.createElement('<div class="mycart_div"></div>');
                var log_div = this.createElement('<div class="log_div"></div>');
                    var log_innerdiv = this.createElement('<div class="log_innerdiv"></div>');
                        var log_innerdiv1 = this.createElement('<div class="log_innerdiv1"></div>');
                            var log_heading = this.createElement('<div class="log_heading">Login</div>');
                            var log_txt_div = this.createElement('<div class="log_txt_div"></div>');
                                
                                var registrationStatus = this.createElement('<div class="log_txt"></div>');
                                    var statusMsg = this.createElement('<div class="log_txt_lft">Status : '+jsonData.response.successMessage+'</div>');
                                    registrationStatus.appendChild(statusMsg);
                              
                                var log_txtEmail = this.createElement('<div class="log_txt">');
                                    var log_txt_lftEmail = this.createElement('<div class="log_txt_lft">Email : </div>');
                                    var log_txt_rhtEmail = this.createElement('<div class="log_txt_lft">'+jsonData.login.loginEmail+'</div>');
                                log_txtEmail.appendChild(log_txt_lftEmail);
                                log_txtEmail.appendChild(log_txt_rhtEmail);
                           
                            log_txt_div.appendChild(registrationStatus);
                            log_txt_div.appendChild(log_txtEmail);
 
                        log_innerdiv1.appendChild(log_heading);
                        log_innerdiv1.appendChild(log_txt_div);

                    log_innerdiv.appendChild(log_innerdiv1);
                log_div.appendChild(log_innerdiv);
            myCart.appendChild(log_div);
                             				
			var copydiv1 = this.createElement('<div class="log_div"></div>');
				var copyinnerdiv = this.createElement('<div class="log_innerdiv">');
					var copyinnerdiv1 = this.createElement('<div class="log_innerdiv1">');
						var copyheading = this.createElement('<div class="log_heading">');
							var copyRight = this.createElement('<strong> E-Shop Phresco &copy; 2011 </strong>');
							var privacyPolicy = this.createElement('<a class="link" href="#">Privacy Policy</a><br />');
							var poweredBy = this.createElement('<a class="link" href="#">powered by Photon</a>');
							copyheading.appendChild(copyRight);
							copyheading.appendChild(privacyPolicy);
							copyheading.appendChild(poweredBy);

					copyinnerdiv1.appendChild(copyheading);
				copyinnerdiv.appendChild(copyinnerdiv1);
			copydiv1.appendChild(copyinnerdiv);
		  myCart.appendChild(copydiv1); 
											
			targetNode.appendChild(myCart);
            
            if ($('#container').is(":visible")) {
                    this.renderWidgets();
                }
        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        
    });

    Y.namespace("Phresco").LoginSuccessWidget = LoginSuccessWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
