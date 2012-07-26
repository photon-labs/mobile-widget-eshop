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
YUI.add("checkoutFormWidget", function(Y) {
    function CheckoutFormWidget(config) {
        CheckoutFormWidget.superclass.constructor.apply(this, arguments);
    }

    CheckoutFormWidget.NAME = "checkoutFormWidget";

    CheckoutFormWidget.ATTRS = {        
        targetNode : {
            value : []
        },
        onSelectedListeners : {
            value : []
        }
	
    };

    Y.extend(CheckoutFormWidget, Y.Phresco.PhrescoWidget, {
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

        bind : function(e) {
            /*
             * bind is intended to be used by the Widget subclass 
             * to bind any event listeners which will drive the Widget UI.
             * 
             * It will generally bind event listeners for attribute change
             * events, to update the state of the rendered UI in response 
             * to attribute value changes, and also attach any DOM events,
             * to activate the UI.
             */

            $(document).ready(function() {
                //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
				
                          
                /*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
                
                //ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
       
                //ON MOUSEOUT REMOVE THE OVER CLASS
               
                
                /*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
                
                
                /********************************************************************************************************************
                CLOSES ALLS ON PAGE LOAD
                ********************************************************************************************************************/   
                
                $('#revieworder').click(function() {                                           
					var email = $('#email').val();
					var dfirstname = $('#deliveryfirstname').val();
					var daddress1 = $("#deliveryaddress1").val();
					var dcity = $("#deliverycity").val();
					var dstate = $("#deliverystate").val();
					var dcountry =  $("#deliverycountry").val();
					var dpostcode = $("#deliverypostcode").val();
					var dphonenumber =  $("#deliveryphonenumber").val();
					
					var bfirstname =$("#billingfirstname").val();
					var baddress1 =  $("#billingaddress1").val();
					var bcity = $("#billingcity").val();
					var bstate = $("#billingstate").val();
					var bcountry =  $("#billingcountry").val();
					var bpostcode = $("#billingpostcode").val();
					var bphonenumber =  $("#billingphonenumber").val();
				    var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					var text = /^[a-zA-Z\s]+$/;
					var string = /^[a-zA-Z0-9\s^,^.,^#,^(,^)]+$/;
					var number =  /^[0-9\s^+^-]+$/;

					if(email === "" || !regex.test(email)){ 
						$('#checkoutblock_1').css("display", "block");
					}
					else if(dfirstname === "" || dcity === "" || dstate === "" || !text.test(dfirstname) || !text.test(dcity) || !text.test(dstate)){                       
						$('#checkoutblock_1').css("display", "none"); 
						$('#checkoutblock_2').css("display", "block"); 
					}					
					else if(daddress1 === "" || !string.test(daddress1)){
						$('#checkoutblock_1').css("display", "none"); 
						$('#checkoutblock_2').css("display", "block");
					}
					else if(dpostcode === "" || dphonenumber === "" || !number.test(dpostcode) || !number.test(dphonenumber)){
						$('#checkoutblock_1').css("display", "none"); 
						$('#checkoutblock_2').css("display", "block");
					}
					
					else if(bfirstname === "" || bcity === "" || bstate === "" || !text.test(bfirstname) || !text.test(bcity) || !text.test(bstate)){                       
						$('#checkoutblock_1').css("display", "none");
						$('#checkoutblock_2').css("display", "none"); 
						$('#checkoutblock_3').css("display", "block");
					}					
					else if(baddress1 === "" || !string.test(baddress1)){
						$('#checkoutblock_1').css("display", "none");
						$('#checkoutblock_2').css("display", "none"); 
						$('#checkoutblock_3').css("display", "block");
					}
					else if(bpostcode === "" || bphonenumber === "" || !number.test(bpostcode) || !number.test(bphonenumber)){
						$('#checkoutblock_1').css("display", "none");
						$('#checkoutblock_2').css("display", "none"); 
						$('#checkoutblock_3').css("display", "block");
					}					
									
                });

				$('#checkaddress').click(function() {
				
					$("#checkaddress").attr("checked", "checked"); 
					
					if ($('#checkaddress').attr('checked')) {
					   $("#billingfirstname").val($('#deliveryfirstname').val());
					   $("#billinglastname").val($('#deliverylastname').val());
					   $("#billingcompany").val($('#deliverycompany').val());
					   $("#billingaddress1").val($('#deliveryaddress1').val());
					   $("#billingaddress2").val($('#deliveryaddress2').val());
					   $("#billingcity").val($('#deliverycity').val());
					   $("#billingstate").val($('#deliverystate').val());
					   $("#billingcountry").val($('#deliverycountry').val());
					   $("#billingpostcode").val($('#deliverypostcode').val());
					   $("#billingphonenumber").val($('#deliveryphonenumber').val());
						
					}
				});			
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
            if (true) {
                targetNode.empty();
                var selfRef=this;
                var apiRef = this.get("apiReference");
                apiRef.set("backPage", "Products");
                
                var url = apiRef.get("wsURLWithoutContext");
                var config = apiRef._getConfigData();
                var productQty = apiRef.get("productQty");
                var productDetails = productQty.productDetail;
                var cartTotal = productQty.cartTotal;
                var totalItem = productQty.totalItem;
                                
                var orderDetailback = apiRef.get("orderDetailback"); 
				if(orderDetailback !== undefined){
					var emailbk = orderDetailback.email;
					var dfirstNamebk = orderDetailback.deliveryfirstname;
					var dlastNamebk  =  orderDetailback.deliverylastname;
					var dcompanybk =  orderDetailback.deliverycompany;
					var daddress1bk =  orderDetailback.deliveryaddress1;
					var daddress2bk =  orderDetailback.deliveryaddress2;
					var dcitybk =  orderDetailback.deliverycity;
					var dstatebk =  orderDetailback.deliverystate;
					var dcountrybk =  orderDetailback.deliverycountry;
					var dpostcodebk =  orderDetailback.deliverypostcode;
					var dphonenumberbk =  orderDetailback.deliveryphonenumber;
					
					var bfirstNamebk = orderDetailback.billingfirstname;
					var blastNamebk  =  orderDetailback.billinglastname;
					var bcompanybk =  orderDetailback.billingcompany;
					var baddress1bk =  orderDetailback.billingaddress1;
					var baddress2bk =  orderDetailback.billingaddress2;
					var bcitybk =  orderDetailback.billingcity;
					var bstatebk =  orderDetailback.billingstate;
					var bcountrybk =  orderDetailback.billingcountry;
					var bpostcodebk =  orderDetailback.billingpostcode;
					var bphonenumberbk =  orderDetailback.billingphonenumber;
					var commentsbk =  orderDetailback.comments;
				}
				var emailbk = (emailbk !== undefined)?orderDetailback.email : "";
				var dfirstNamebk = (dfirstNamebk !== undefined)?orderDetailback.deliveryfirstname : "";
				var dlastNamebk = (dlastNamebk !== undefined)?orderDetailback.deliverylastname : "";
				var dcompanybk = (dcompanybk !== undefined)?orderDetailback.deliverycompany : "";
				var daddress1bk = (daddress1bk !== undefined)?orderDetailback.deliveryaddress1 : "";
				var daddress2bk = (daddress2bk !== undefined)?orderDetailback.deliveryaddress2 : "";
				var dcitybk = (dcitybk !== undefined)?orderDetailback.deliverycity : "";
				var dstatebk = (dstatebk !== undefined)?orderDetailback.deliverystate : "";
				var dcountrybk = (dcountrybk !== undefined)?orderDetailback.deliverycountry : "";
				var dpostcodebk = (dpostcodebk !== undefined)?orderDetailback.deliverypostcode : "";
				var dphonenumberbk = (dphonenumberbk !== undefined)?orderDetailback.deliveryphonenumber : "";
				
				var bfirstNamebk = (bfirstNamebk !== undefined)?orderDetailback.billingfirstname : "";
				var blastNamebk = (blastNamebk !== undefined)?orderDetailback.billinglastname : "";
				var bcompanybk = (bcompanybk !== undefined)?orderDetailback.billingcompany : "";
				var baddress1bk = (baddress1bk !== undefined)?orderDetailback.billingaddress1 : "";
				var baddress2bk = (baddress2bk !== undefined)?orderDetailback.billingaddress2 : "";
				var bcitybk = (bcitybk !== undefined)?orderDetailback.billingcity : "";
				var bstatebk = (bstatebk !== undefined)?orderDetailback.billingstate : "";
				var bcountrybk = (bcountrybk !== undefined)?orderDetailback.billingcountry : "";
				var bpostcodebk = (bpostcodebk !== undefined)?orderDetailback.billingpostcode : "";
				var bphonenumberbk = (bphonenumberbk !== undefined)?orderDetailback.billingphonenumber : "";
				var commentsbk = (commentsbk !== undefined)?orderDetailback.comments : "";
				
				
                var mycart = this.createElement('<div class="mycart_div" >');
                var mycart_head = this.createElement('<div class="mycart_head">Checkout</div>');
                var checkout_tab = Y.Node.create('<div class="checkout_tab"><a href="#">Customer Information</a></div>');
				checkout_tab.obj = this;
				checkout_tab.openDiv = "1";
                Y.on('click' , this.showCurrentTab , checkout_tab);


                var emailblock = this.createElement('<div class="bill_div"  id="checkoutblock_1" style="display:block;">');
                var emailblocksub = this.createElement('<div class="checkout_2_txt">');
                var emailblocksubul = this.createElement('<ul>');
                var emailblocksubLi1 = this.createElement('<li>Order Information will be sent to your A/C email list below.</li>');
                var emailblocksubLi2 = this.createElement('<li class="bld">');
				var labelemail = this.createElement('<label id="email_err_div">');
                var emailblocksubspan1 = this.createElement('<span class="bill_details_lft">Email address *</span>');
                var emailblocksubspan2 = Y.Node.create('<span class="bill_details_rht" id="email_err_div"><input name="email" id="email" type="text" autofocus="autofocus" value="'+ emailbk +'" /><br><span id="email_err" class="errtext"></span></span>');
				emailblocksubspan2.data = 'email';
				Y.on('click' , this.focusIt , emailblocksubspan2);
                labelemail.appendChild(emailblocksubspan1);
                labelemail.appendChild(emailblocksubspan2);
				emailblocksubLi2.appendChild(labelemail);
                emailblocksubul.appendChild(emailblocksubLi1);  
                emailblocksubul.appendChild(emailblocksubLi2);              
                emailblocksub.appendChild(emailblocksubul);
                emailblock.appendChild(emailblocksub);  

                var deliveryinfo = Y.Node.create('<div class="checkout_tab"><a href="#">Delivery Information</a></div>');
				deliveryinfo.obj = this;
				deliveryinfo.openDiv = "2";
                Y.on('click' , this.showCurrentTab , deliveryinfo);
               
			   	var deliveryinfodetails = this.createElement('<div class="bill_div"  id="checkoutblock_2" style="display:none;">');
                var deliveryinfolabel= this.createElement('<div class="bill_head">Enter your delivery address and information here</div>');
                var addressblock = this.createElement('<div class="bill_text_div">');
                var addressblocksub = this.createElement('<div class="bill_details">');
                var addressblocksubul = this.createElement('<ul>');
                
                
                var firstnameli = this.createElement('<li class="">');
				var labelfirstname = this.createElement('<label  id="deliveryfirstname_err_div">');
                var firstnamespan1 = this.createElement('<span class="bill_details_lft">First name *</span>');
                var firstnamespan2 = Y.Node.create('<span class="bill_details_rht"><input name="deliveryfirstName" id="deliveryfirstname" type="text" value="'+ dfirstNamebk +'" /><br><span id="deliveryfirstname_err"></span></span>');
				firstnamespan2.data = 'deliveryfirstname';
				Y.on('click' , this.focusIt , firstnamespan2);
				
                labelfirstname.appendChild(firstnamespan1);
                labelfirstname.appendChild(firstnamespan2);
				firstnameli.appendChild(labelfirstname);
                
                var lastnameli = this.createElement('<li class="">');				
                var lastnamelispan1 = this.createElement('<span class="bill_details_lft">Last name</span>');
                var lastnamelispan2 = Y.Node.create('<span class="bill_details_rht"><input name="deliverylastname" id="deliverylastname" type="text" value="'+ dlastNamebk +'" /></span>');
                lastnameli.appendChild(lastnamelispan1);
                lastnameli.appendChild(lastnamelispan2);
				
				lastnamelispan2.data = 'deliverylastname';
				Y.on('click' , this.focusIt , lastnamelispan2);
                
                var companyli = this.createElement('<li class="">');
                var companylispan1 = this.createElement('<span class="bill_details_lft">Company</span>');
                var companylispan2 = Y.Node.create('<span class="bill_details_rht"><input name="deliverycompany" id="deliverycompany" type="text" value="'+ dcompanybk +'" /></span>');
                companyli.appendChild(companylispan1);
                companyli.appendChild(companylispan2);
				companylispan2.data = 'deliverycompany';
				Y.on('click' , this.focusIt , companylispan2);
                
                var addressli1 = this.createElement('<li class="">');
				var labeladdress1 = this.createElement('<label  id="deliveryaddress1_err_div">');
                var addressli1span1 = this.createElement('<span class="bill_details_lft">Address 1 *</span>');
                var addressli1span2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliveryaddress1" id="deliveryaddress1" type="text" value="'+ daddress1bk +'" /><br><span id="deliveryaddress1_err"></span></span>');
                labeladdress1.appendChild(addressli1span1);
                labeladdress1.appendChild(addressli1span2);
				addressli1.appendChild(labeladdress1);
				addressli1span2.data = 'deliveryaddress1';
				Y.on('click' , this.focusIt , addressli1span2);
                
                var addressli2 = this.createElement('<li class="">');
                var addressli2span1 = this.createElement('<span class="bill_details_lft">Address 2</span>');
                var addressli2span2 = Y.Node.create('<span class="bill_details_rht"><input name="deliveryaddress2" id="deliveryaddress2" type="text" value="'+ daddress2bk +'" /></span>');
                addressli2.appendChild(addressli2span1);
                addressli2.appendChild(addressli2span2);
				addressli2span2.data = 'deliveryaddress2';
				Y.on('click' , this.focusIt , addressli2span2);
                
                var cityli = this.createElement('<li class="">');
				var labelcity = this.createElement('<label  id="deliverycity_err_div">');
                var citylispan1 = this.createElement('<span class="bill_details_lft">City *</span>');
                var citylispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliverycity" id="deliverycity" type="text" value="'+ dcitybk +'" /><br><span id="deliverycity_err"></span></span>');
                labelcity.appendChild(citylispan1);
                labelcity.appendChild(citylispan2);
				cityli.appendChild(labelcity);
				citylispan2.data = 'deliverycity';
				Y.on('click' , this.focusIt , citylispan2);
                
				
                var stateli = this.createElement('<li class="">');
				var labelstateli = this.createElement('<label  id="deliverystate_err_div">');
                var statelispan1 = this.createElement('<span class="bill_details_lft">State/Province *</span>');
                var statelispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliverystate" id="deliverystate" type="text" value="'+ dstatebk +'" /><br><span id="deliverystate_err"></span></span>');
                labelstateli.appendChild(statelispan1);
                labelstateli.appendChild(statelispan2);
				stateli.appendChild(labelstateli);
				statelispan2.data = 'deliverystate';
				Y.on('click' , this.focusIt , statelispan2);
                
                var countryli = this.createElement('<li class="">');
                var countrylispan1 = this.createElement('<span class="bill_details_lft">Country *</span>');  
				var countryArray = ["USA","India","Australia","Canada","Bangladesh"];	
				
				var countryselect = this.createElement('<select name="deliverycountry" id="deliverycountry">');
				for(var i= 0; i < countryArray.length; i++) {
				var selected = (dcountrybk === countryArray[i])?"selected='selected'": "";
				var countryvalue1 = this.createElement('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
				countryselect.appendChild(countryvalue1);
				}
				countryli.appendChild(countrylispan1);
                countryli.appendChild(countryselect);
				countryselect.data = 'deliverycountry';
				Y.on('click' , this.focusIt , countryselect);
				
                
                var postcodeli = this.createElement('<li class="">');
				var labelpostcode = this.createElement('<label  id="deliverypostcode_err_div">');
                var postcodelispan1 = this.createElement('<span class="bill_details_lft">Postcode *</span>');
                var postcodelispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliverypostcode" id="deliverypostcode"  type="text"  value="'+ dpostcodebk +'"/><br><span id="deliverypostcode_err"></span></span>');
                labelpostcode.appendChild(postcodelispan1);
                labelpostcode.appendChild(postcodelispan2);
				postcodeli.appendChild(labelpostcode);
				postcodelispan2.data = 'deliverypostcode';
				Y.on('click' , this.focusIt , postcodelispan2);

                var phonenumberli = this.createElement('<li class="">');
				var labelphonenumber = this.createElement('<label  id="deliveryphonenumber_err_div">');
                var phonenumberlispan1 = this.createElement('<span class="bill_details_lft">Phone Number *</span>');
                var phonenumberlispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliveryphonenumber" id="deliveryphonenumber" type="text" value="'+ dphonenumberbk +'" /><br><span id="deliveryphonenumber_err"></span></span>');
                labelphonenumber.appendChild(phonenumberlispan1);
                labelphonenumber.appendChild(phonenumberlispan2);
				phonenumberli.appendChild(labelphonenumber);
				phonenumberlispan2.data = 'deliveryphonenumber';
				Y.on('click' , this.focusIt , phonenumberlispan2);
                
                addressblocksubul.appendChild(firstnameli);
                addressblocksubul.appendChild(lastnameli);
                addressblocksubul.appendChild(companyli);
                addressblocksubul.appendChild(addressli1);
                addressblocksubul.appendChild(addressli2);
                addressblocksubul.appendChild(cityli);
                addressblocksubul.appendChild(stateli);
                addressblocksubul.appendChild(countryli);
                addressblocksubul.appendChild(postcodeli);
                addressblocksubul.appendChild(phonenumberli);
                addressblocksub.appendChild(addressblocksubul); 
                addressblock.appendChild(addressblocksub);
                deliveryinfodetails.appendChild(deliveryinfolabel);
                deliveryinfodetails.appendChild(addressblock);
                
                
                
                var billinginfo = Y.Node.create('<div class="checkout_tab"><a href="#">billing Information</a></div>');
				billinginfo.obj = this;
				billinginfo.openDiv = "3";
                Y.on('click' , this.showCurrentTab , billinginfo);

				var billinginfodetails = this.createElement('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
                var billinginfolabel= this.createElement('<div class="bill_head">Enter your billing address and information here</div>');				
                var billaddressblock = this.createElement('<div class="bill_text_div">');
				var billinginfosame= this.createElement('<div class="bill_text">My billing information is the same as my delivery information</div>');
				var billcheckbox = Y.Node.create('<input type="checkbox" id="checkaddress" name="checkaddress">');           
 				
                var billaddressblocksub = this.createElement('<div class="bill_details">');
                var billaddressblocksubul = this.createElement('<ul>');
                
        	        
                var billfirstnameli = this.createElement('<li class="">');
				var label_billfirstname = this.createElement('<label  id="billingfirstname_err_div">');
                var billfirstnamespan1 = this.createElement('<span class="bill_details_lft">First name *</span>');
                var billfirstnamespan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingfirstname" id="billingfirstname" type="text" value="'+ bfirstNamebk +'" /><br><span id="billingfirstname_err"></span></span');
                label_billfirstname.appendChild(billfirstnamespan1);
                label_billfirstname.appendChild(billfirstnamespan2);
				billfirstnameli.appendChild(label_billfirstname);
				
				billfirstnamespan2.data = 'billingfirstname';
				Y.on('click' , this.focusIt , billfirstnamespan2);
                
                var billlastnameli = this.createElement('<li>');
                var billlastnamelispan1 = this.createElement('<span class="bill_details_lft">Last name</span>');
                var billlastnamelispan2 = Y.Node.create('<span class="bill_details_rht"><input name="billinglastname" id="billinglastname" type="text" value="'+ blastNamebk +'" /></span>');
                billlastnameli.appendChild(billlastnamelispan1);
                billlastnameli.appendChild(billlastnamelispan2);
				
				billlastnamelispan2.data = 'billinglastname';
				Y.on('click' , this.focusIt , billlastnamelispan2);
                
                var billcompanyli = this.createElement('<li >');
                var billcompanylispan1 = this.createElement('<span class="bill_details_lft">Company</span>');
                var billcompanylispan2 = Y.Node.create('<span class="bill_details_rht"><input name="billingcompany" id="billingcompany" type="text" value="'+ bcompanybk +'" /></span>');
                billcompanyli.appendChild(billcompanylispan1);
                billcompanyli.appendChild(billcompanylispan2);
				billcompanylispan2.data = 'billingcompany';
				Y.on('click' , this.focusIt , billcompanylispan2);
                
                var billaddressli1 = this.createElement('<li class="">');
				var label_billaddress1 = this.createElement('<label  id="billingaddress1_err_div">');
                var billaddressli1span1 = this.createElement('<span class="bill_details_lft">Address 1 *</span>');
                var billaddressli1span2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingaddress1" id="billingaddress1" type="text" value="'+ baddress1bk +'" /><br><span id="billingaddress1_err"></span></span');
                label_billaddress1.appendChild(billaddressli1span1);
                label_billaddress1.appendChild(billaddressli1span2);
				billaddressli1.appendChild(label_billaddress1);
				billaddressli1span2.data = 'billingaddress1';
				Y.on('click' , this.focusIt , billaddressli1span2);
                
                var billaddressli2 = this.createElement('<li>');
                var billaddressli2span1 = this.createElement('<span class="bill_details_lft">Address 2</span>');
                var billaddressli2span2 = Y.Node.create('<span class="bill_details_rht"><input name="billingaddress2" id="billingaddress2" type="text" value="'+ baddress2bk +'" /></span>');
                billaddressli2.appendChild(billaddressli2span1);
                billaddressli2.appendChild(billaddressli2span2);
				billaddressli2span2.data = 'billingaddress2';
				Y.on('click' , this.focusIt , billaddressli2span2);
                
                var billcityli = this.createElement('<li>');
				var label_billcity = this.createElement('<label id="billingcity_err_div">');
                var billcitylispan1 = this.createElement('<span class="bill_details_lft">City *</span>');
                var billcitylispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingcity" id="billingcity" type="text" value="'+ bcitybk +'" /><br><span id="billingcity_err"></span></span>');
                label_billcity.appendChild(billcitylispan1);
                label_billcity.appendChild(billcitylispan2);
				billcityli.appendChild(label_billcity);
				billcitylispan2.data = 'billingcity';
				Y.on('click' , this.focusIt , billcitylispan2);
                
				
				var billstateli = this.createElement('<li>');
				var label_billstate = this.createElement('<label id="billingstate_err_div">');
				var billstatelispan1 = this.createElement('<span class="bill_details_lft">State/Province *</span>');                                      
				var billstatelispan2 = Y.Node.create('<span class="bill_details_rht"><input type="text" name="billingstate" id="billingstate" value="'+ bstatebk +'" ><br><span id="billingstate_err"></span></span>');
				label_billstate.appendChild(billstatelispan1);
				label_billstate.appendChild(billstatelispan2);
				billstateli.appendChild(label_billstate);
				billstatelispan2.data = 'billingstate';
				Y.on('click' , this.focusIt , billstatelispan2);
                
				
				var billcountryli = this.createElement('<li class="">');
                var billcountrylispan1 = this.createElement('<span class="bill_details_lft">Country *</span>');  
				var bcountryArray = ["USA","India","Australia","Canada","Bangladesh"];	
				
				var bcountryselect = this.createElement('<select name="billingcountry" id="billingcountry">');
				for(var i= 0; i < bcountryArray.length; i++) {
				var bselected = (bcountrybk === bcountryArray[i])?"selected='selected'": "";
				var bcountryvalue1 = this.createElement('<option value="'+ bcountryArray[i] +'" '+ bselected +'>'+ bcountryArray[i] +'</option>');
				bcountryselect.appendChild(bcountryvalue1);
				}
				billcountryli.appendChild(billcountrylispan1);
                billcountryli.appendChild(bcountryselect);
				bcountryselect.data = 'billingcountry';
				Y.on('click' , this.focusIt , bcountryselect);
				
                
                var billpostcodeli = this.createElement('<li>');
				var label_billpost = this.createElement('<label id="billingpostcode_err_div">');
                var billpostcodelispan1 = this.createElement('<span class="bill_details_lft">Postcode *</span>');
                var billpostcodelispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingpostcode" id="billingpostcode" type="text" value="'+ bpostcodebk +'" /><br><span id="billingpostcode_err"></span></span>');
                label_billpost.appendChild(billpostcodelispan1);
                label_billpost.appendChild(billpostcodelispan2);
				billpostcodeli.appendChild(label_billpost);
				billpostcodelispan2.data = 'billingpostcode';
				Y.on('click' , this.focusIt , billpostcodelispan2);


                var billphonenumberli = this.createElement('<li>');
				var label_billphone = this.createElement('<label id="billingphonenumber_err_div">');
                var billphonenumberlispan1 = this.createElement('<span class="bill_details_lft">Phone Number *</span>');
                var billphonenumberlispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingphonenumber" id="billingphonenumber" type="text" value="'+ bphonenumberbk +'" /><br><span id="billingphonenumber_err"></span></span>');
                label_billphone.appendChild(billphonenumberlispan1);
                label_billphone.appendChild(billphonenumberlispan2);
				billphonenumberli.appendChild(label_billphone);
				billphonenumberlispan2.data = 'billingphonenumber';
				Y.on('click' , this.focusIt , billphonenumberlispan2);

                
                billaddressblocksubul.appendChild(billfirstnameli);
                billaddressblocksubul.appendChild(billlastnameli);
                billaddressblocksubul.appendChild(billcompanyli);
                billaddressblocksubul.appendChild(billaddressli1);
                billaddressblocksubul.appendChild(billaddressli2);
                billaddressblocksubul.appendChild(billcityli);
                billaddressblocksubul.appendChild(billstateli);
                billaddressblocksubul.appendChild(billcountryli);
                billaddressblocksubul.appendChild(billpostcodeli);
                billaddressblocksubul.appendChild(billphonenumberli);
                billaddressblocksub.appendChild(billaddressblocksubul); 
				billaddressblock.appendChild(billinginfosame);
				billaddressblock.appendChild(billcheckbox);
                billaddressblock.appendChild(billaddressblocksub);				
                billinginfodetails.appendChild(billinginfolabel);
                billinginfodetails.appendChild(billaddressblock);
                
                
                var paymentmethod = Y.Node.create('<div class="checkout_tab"><a href="#">Payment Methods</a></div>');
				paymentmethod.obj = this;
				paymentmethod.openDiv = "4";
                Y.on('click' , this.showCurrentTab , paymentmethod);
				
                var selectpayment = this.createElement('<div class="bill_div" id="checkoutblock_4" style="display:none;">');
                var selectpaymentlabel = this.createElement('<div class="comments_text">Select a payment method from the following options</div>');
                var method = this.createElement('<div class="methods_div">');
                var methodul = this.createElement('<ul>');  
                var methodli1 = Y.Node.create('<li><span class="radio"><input name="payment" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
                var methodli2 = Y.Node.create('<li><span class="radio"><input name="payment" type="radio" value="" checked="checked" /></span><span class="method_text">Cash on delivery</span></li>');                             
                methodul.appendChild(methodli1);
                methodul.appendChild(methodli2);            
                method.appendChild(methodul);                      
                 
                var subtotal = this.createElement('<div class="prod_check_div">');
                var subtotalspan1 = this.createElement('<span class="prod_check_lft">Total Items</span>');
                var subtotalspan2 = this.createElement('<span class="prod_check_rht1">'+ totalItem +'</span>');
                var subtotalspan3 = this.createElement('<span class="prod_check_mid">:</span>');
                subtotal.appendChild(subtotalspan1);
                subtotal.appendChild(subtotalspan2);
                subtotal.appendChild(subtotalspan3);
                
                var ordertotal = this.createElement('<div class="prod_check_div">');
                var ordertotalspan1 = this.createElement('<span class="prod_check_lft">ordertotal</span>');
                var ordertotalspan2 = this.createElement('<span class="prod_check_rht1">'+ cartTotal +'</span>');
                var ordertotalspan3 = this.createElement('<span class="prod_check_mid">:</span>');
                ordertotal.appendChild(ordertotalspan1);
                ordertotal.appendChild(ordertotalspan2);
                ordertotal.appendChild(ordertotalspan3);
                var comments = this.createElement('<div class="comments_text">Cheque should be made out to Phresco</div>');
                selectpayment.appendChild(selectpaymentlabel);
                selectpayment.appendChild(method);
                selectpayment.appendChild(subtotal);
                selectpayment.appendChild(ordertotal);  
                selectpayment.appendChild(comments);                    
                
                var ordercomments = Y.Node.create('<div class="checkout_tab"><a href="#">Order Comments</a></div>');
				ordercomments.obj = this;
				ordercomments.openDiv = "5";
                Y.on('click' , this.showCurrentTab , ordercomments);
				
                var ordercmdblock = this.createElement('<div class="bill_div" id="checkoutblock_5" style="display:none;">'); 
				
                var commnettext = this.createElement('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
                var commnethead = this.createElement('<div class="comments_head">Order Comments</div>');
                var commentbox = Y.Node.create('<div class="com_commentbox"><textarea name="comments" id="comments" cols="" rows="" value="'+ commentsbk +'" ></textarea></div>');
                ordercmdblock.appendChild(commnettext);
                ordercmdblock.appendChild(commnethead);
                ordercmdblock.appendChild(commentbox);
				commentbox.data = 'comments';
				Y.on('click' , this.focusIt , commentbox);
                
                var buttons = this.createElement('<div class="checkout_btn">');
                var buttonblock = this.createElement('<div class="mycart_btn_mid">');
                var revieworder = Y.Node.create('<div class="mycart_mid_bu" id="revieworder"><a href="#">Review Order</a></div>');
                revieworder.obj = this;
                Y.on('click' , this.showSubmitOrder , revieworder);
                var cancel = Y.Node.create('<div class="mycart_mid_bu"><a href="#">Cancel</a></div>');                                      
                cancel.obj = selfRef;
                cancel.data = '1'; // need a category id 1 hardcode any one id
                Y.on('click' , this.showProducts , cancel);
                Y.on('blur', function(e) {
                    console.info(this);
                    orderFormFields = [this._node.attributes['id'].nodeValue];
                    var apiRef = selfRef.get("apiReference");
                    var validated = selfRef.validateFormFields(orderFormFields, apiRef);
                }, '.required');
                
                buttonblock.appendChild(revieworder);
                buttonblock.appendChild(cancel);                  
                var clear = this.createElement('<div style="clear:both"></div>');
                buttons.appendChild(buttonblock); 
                buttons.appendChild(clear); 
                
                
                mycart.appendChild(mycart_head);        
                mycart.appendChild(checkout_tab);       
                mycart.appendChild(emailblock);     
                mycart.appendChild(deliveryinfo);
                mycart.appendChild(deliveryinfodetails);    
                mycart.appendChild(billinginfo);    
                mycart.appendChild(billinginfodetails); 
                mycart.appendChild(paymentmethod);
                mycart.appendChild(selectpayment);  
                mycart.appendChild(ordercomments);
                mycart.appendChild(ordercmdblock);
                mycart.appendChild(buttons);                
                targetNode.appendChild(mycart);

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

            this.bind();
        },
		focusIt:function(){
			$('#'+this.data).focus();
		},
		setBilling : function(){
			if ($("#checkaddress").attr("checked") === undefined ) {
				$("#checkaddress").removeAttr("checked");
			}else{
				$("#checkaddress").attr("checked", "checked"); 
			}
		},
       	showCurrentTab: function(){

			for(var i=1; i<=5; i++){
				$("#checkoutblock_"+i).hide();
			}
			$("#checkoutblock_"+this.openDiv).show();
		},
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        }
    });

    Y.namespace("Phresco").CheckoutFormWidget = CheckoutFormWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
