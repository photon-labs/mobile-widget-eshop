Event = YUI.event,
YUI.add("registrationWidget", function(Y) {
    function RegistrationWidget(config) {
        RegistrationWidget.superclass.constructor.apply(this, arguments);
    }

    RegistrationWidget.NAME = "registrationWidget";

    RegistrationWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(RegistrationWidget, Y.Phresco.PhrescoWidget, {
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
			apiRef.set("backPage", "Registration");
            var url = apiRef.get("wsURLWithoutContext");
            var config = apiRef._getConfigData();
           // var webImage = config.web.web;
		  
            var userId = 0;
			if(apiRef.get("userId"))
				userId = apiRef.get("userId");
     
	 var myCart = this.createElement('<div class="mycart_div"></div>');

			if(userId > 0){
                     var log_div = this.createElement('<div class="log_div"></div>');
                        var log_innerdiv = this.createElement('<div class="log_innerdiv"></div>');
                            var log_innerdiv1 = this.createElement('<div class="log_innerdiv1"></div>');
                                var log_heading = this.createElement('<div class="log_heading">User Already Logged In</div>');
                            log_innerdiv1.appendChild(log_heading);    
                        log_innerdiv.appendChild(log_innerdiv1);              
                    log_div.appendChild(log_innerdiv);
                myCart.appendChild(log_div); 

            }else{
 
				var log_div = this.createElement('<div class="log_div"></div>');
                    var log_innerdiv = this.createElement('<div class="log_innerdiv"></div>');
                        var log_innerdiv1 = this.createElement('<div class="log_innerdiv1"></div>');
                            var log_heading = this.createElement('<div class="log_heading">Register</div>');
                            var log_txt_div = this.createElement('<div class="log_txt_div"></div>');
                                
                                var log_txtfname = this.createElement('<div class="log_txt"><div id="regfirstname_err_div" class="clearfix">');
                                    var log_txt_lftfname = this.createElement('<div class="log_txt_lft">First Name</div>');
                                    var log_txt_rhtfname = Y.Node.create('<div class="log_txt_rht"><input type="text" name="regfirstname" id="regfirstname" placeholder="First Name" autofocus="autofocus" maxlength="40"/></div><span class="help-inline" id="regfirstname_err"></span>');
                                log_txtfname.appendChild(log_txt_lftfname);
                                log_txtfname.appendChild(log_txt_rhtfname);
           
                               var log_txtlname = this.createElement('<div class="log_txt"><div id="reglastname_err_div" class="clearfix">');
                                    var log_txt_lftlname = this.createElement('<div class="log_txt_lft">Last Name</div>');
                                    var log_txt_rhtlname = Y.Node.create('<div class="log_txt_rht"><input type="text" name="reglastname" id="reglastname" placeholder="Last Name" maxlength="40"/></div><span class="help-inline" id="reglastname_err"></span>');
                                log_txtlname.appendChild(log_txt_lftlname);
                                log_txtlname.appendChild(log_txt_rhtlname);
           
                               var log_txt1 = this.createElement('<div class="log_txt"><div id="regemail_err_div" class="clearfix">');
                                    var log_txt_lft = this.createElement('<div class="log_txt_lft">Email Id</div>');
                                    var log_txt_rht = Y.Node.create('<div class="log_txt_rht"><input type="text" name="regemail" id="regemail" placeholder="Email" maxlength="250"/></div><span class="help-inline" id="regemail_err"></span>');
                                log_txt1.appendChild(log_txt_lft);
                                log_txt1.appendChild(log_txt_rht);
           
                                var log_txt2 = this.createElement('<div class="log_txt"><div id="regpassword_err_div" class="clearfix">');
                                    var log_txt_lft2 = this.createElement('<div class="log_txt_lft">Password</div>');
                                    var log_txt_rht2 = Y.Node.create('<div class="log_txt_rht"><input type="password" name="regpassword" id="regpassword" placeholder="Password" maxlength="20"  /></div><span class="help-inline" id="regpassword_err"></span>');
                                log_txt2.appendChild(log_txt_lft2);
                                log_txt2.appendChild(log_txt_rht2);

                                var log_txt3 = this.createElement('<div class="log_txt"><div id="regphonenumber_err_div" class="clearfix">');
                                    var log_txt_lft3 = this.createElement('<div class="log_txt_lft">Phone</div>');
                                    var log_txt_rht3 = Y.Node.create('<div class="log_txt_rht"><input type="phone" name="regphonenumber" id="regphonenumber" placeholder="Phone Number" maxlength="20" /></div><span class="help-inline" id="regphonenumber_err"></span>');
                                log_txt3.appendChild(log_txt_lft3);
                                log_txt3.appendChild(log_txt_rht3);

                                var log_txt4 = this.createElement('<div class="log_txt">');
                                    var log_bu_div = this.createElement('<div class="log_bu_div">');
                                        var log_bu_login = this.createElement('<div class="log_bu_login">');
                                            var log_reg_bu = Y.Node.create('<div class="log_reg_bu"><a href="#">Register</a></div>');
                                                log_reg_bu.obj = this;
                                                Y.on('click' , this.userRegister , log_reg_bu);

                                        log_bu_login.appendChild(log_reg_bu);

                                        var log_bu_cancel = this.createElement('<div class="log_bu_cancel">');
                                            var log_reg_bu1 = Y.Node.create('<div class="log_reg_bu"><a href="javascript:void(0);">Cancel</a></div>');
												log_reg_bu1.obj = this;
												Y.on('click' , this.showHome , log_reg_bu1);
											
                                        log_bu_cancel.appendChild(log_reg_bu1);       
                                    log_bu_div.appendChild(log_bu_login);     
                                    log_bu_div.appendChild(log_bu_cancel);
                                log_txt4.appendChild(log_bu_div);   
                            
                            log_txt_div.appendChild(log_txtfname);
                            log_txt_div.appendChild(log_txtlname);
                            log_txt_div.appendChild(log_txt1);
                            log_txt_div.appendChild(log_txt2);
                            log_txt_div.appendChild(log_txt3);
                            log_txt_div.appendChild(log_txt4);
                        
                        log_innerdiv1.appendChild(log_heading);
                        log_innerdiv1.appendChild(log_txt_div);

                            var checkout_btn = this.createElement('<div class="checkout_btn">');
                                var log_reg_bu2 = Y.Node.create('<div class="log_reg_bu"><a href="#">Login</a></div>');
                                    log_reg_bu2.obj = this;
                                    Y.on('click' , this.userLoginWidget , log_reg_bu2);

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
							var privacyPolicy = this.createElement('<a class="link" href="#"></a><br />');
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

    Y.namespace("Phresco").RegistrationWidget = RegistrationWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
