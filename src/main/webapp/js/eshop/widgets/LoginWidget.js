Event = YUI.event,
YUI.add("loginWidget", function(Y) {
    function LoginWidget(config) {
        LoginWidget.superclass.constructor.apply(this, arguments);
    }

    LoginWidget.NAME = "loginWidget";

    LoginWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(LoginWidget, Y.Phresco.PhrescoWidget, {
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
			apiRef.set("backPage", "Login");
            var url = apiRef.get("wsURLWithoutContext");
            var config = apiRef._getConfigData();
           // var webImage = config.web.web;
		  
            var userId = 0;
			if(apiRef.get("userId"))
				userId = apiRef.get("userId");
                 
				 var myCart = this.createElement('<div class="mycart_div"></div>');
			if(userId > 0){
                var log_div = this.createElement('<div class="log_div"></div>');
                    var log_innerdiv = this.createElement('<div class="log_innerdiv">');
						var log_innerdiv1 = this.createElement('<div class="log_innerdiv1">');
							var log_heading = this.createElement('<div class="log_heading">User Already Logged In</div>');
							log_innerdiv1.appendChild(log_heading);
						log_innerdiv.appendChild(log_innerdiv1);
					log_div.appendChild(log_innerdiv);
                myCart.appendChild(log_div); 

            }else{
                var log_div = this.createElement('<div class="log_div"></div>');
                    var log_innerdiv = this.createElement('<div class="log_innerdiv"></div>');
                        var log_innerdiv1 = this.createElement('<div class="log_innerdiv1"></div>');
                            var log_heading = this.createElement('<div class="log_heading">Login</div>');
                            var log_txt_div = this.createElement('<div class="log_txt_div"></div>');
                                   
                               var log_txt1 = this.createElement('<div class="log_txt"><div id="logEmail_err_div" class="clearfix">');
                                    var log_txt_lft = this.createElement('<div class="log_txt_lft">Email Id</div>');
                                    var log_txt_rht = Y.Node.create('<div class="log_txt_rht"><input type="text" autofocus="autofocus" name="logEmail" id="logEmail" placeholder="Email" maxlength="250" /></div><span class="help-inline" id="logEmail_err"></span>');
                                log_txt1.appendChild(log_txt_lft);
                                log_txt1.appendChild(log_txt_rht);
           
                                var log_txt2 = this.createElement('<div class="log_txt"><div id="logpassword_err_div" class="clearfix">');
                                    var log_txt_lft2 = this.createElement('<div class="log_txt_lft">Password</div>');
                                    var log_txt_rht2 = Y.Node.create('<div class="log_txt_rht"><input type="password" name="logpassword" id="logpassword" placeholder="Password" maxlength="20" /></div><span class="help-inline" id="logpassword_err"></span>');
                                log_txt2.appendChild(log_txt_lft2);
                                log_txt2.appendChild(log_txt_rht2);

                                var log_txt4 = this.createElement('<div class="log_txt">');
                                    var log_bu_div = this.createElement('<div class="log_bu_div">');
                                        var log_bu_login = this.createElement('<div class="log_bu_login">');
                                            var log_reg_bu = Y.Node.create('<div class="log_reg_bu"><a href="#">Submit</a></div>');
                                                log_reg_bu.obj = this;
                                                Y.on('click' , this.userLogin , log_reg_bu);

                                        log_bu_login.appendChild(log_reg_bu);

                                        var log_bu_cancel = this.createElement('<div class="log_bu_cancel">');
                                            var log_reg_bu1 = Y.Node.create('<div class="log_reg_bu"><a href="javascript:void(0);">Cancel</a></div>');
												log_reg_bu1.obj = this;
												Y.on('click' , this.showHome , log_reg_bu1);
											
                                        log_bu_cancel.appendChild(log_reg_bu1);       
										
										
                                    log_bu_div.appendChild(log_bu_login);     
                                    log_bu_div.appendChild(log_bu_cancel);
                                log_txt4.appendChild(log_bu_div);   
                            
                            log_txt_div.appendChild(log_txt1);
                            log_txt_div.appendChild(log_txt2);
                            log_txt_div.appendChild(log_txt4);
                        
                        log_innerdiv1.appendChild(log_heading);
                        log_innerdiv1.appendChild(log_txt_div);

                            var checkout_btn = this.createElement('<div class="checkout_btn">');
                                var log_reg_bu2 = Y.Node.create('<div class="log_reg_bu"><a href="#">Register</a></div>');
                                    log_reg_bu2.obj = this;
                                    Y.on('click' , this.userRegistrationWidget , log_reg_bu2);

                                var clearDiv = this.createElement('<div style="clear:both"></div>');
                            checkout_btn.appendChild(log_reg_bu2);
                            checkout_btn.appendChild(clearDiv);
                     
                    log_innerdiv.appendChild(log_innerdiv1);
                    log_innerdiv.appendChild(checkout_btn);
                log_div.appendChild(log_innerdiv);
              myCart.appendChild(log_div);
            }

			var copydiv1 = this.createElement('<div class="log_div"></div>');
				var copyinnerdiv = this.createElement('<div class="log_innerdiv">');
					var copyinnerdiv1 = this.createElement('<div class="log_innerdiv1">');
						var copyheading = this.createElement('<div class="log_heading">');
							var copyRight = this.createElement('<strong> E-Shop Phresco &copy; Photon Infotech 2012 </strong>');
							copyheading.appendChild(copyRight);
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

    Y.namespace("Phresco").LoginWidget = LoginWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
