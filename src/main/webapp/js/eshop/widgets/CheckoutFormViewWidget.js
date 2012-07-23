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
YUI.add("checkoutFormViewWidget", function(Y) {
    function CheckoutFormViewWidget(config) {
        CheckoutFormViewWidget.superclass.constructor.apply(this, arguments);
    }

    CheckoutFormViewWidget.NAME = "checkoutFormViewWidget";

    CheckoutFormViewWidget.ATTRS = {        
        targetNode : {
            value : []
        },
        onSelectedListeners : {
            value : []
        }
    };

    Y.extend(CheckoutFormViewWidget, Y.Phresco.PhrescoWidget, {
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

			$(document).ready(function() {
                //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
               
                  
                
                /*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
                
                //ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
              
                    
                //ON MOUSEOUT REMOVE THE OVER CLASS
              
                
                /*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
                
                
                /********************************************************************************************************************
                CLOSES ALLS ON PAGE LOAD
                ********************************************************************************************************************/   
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
                var apiRef = this.get("apiReference");
                apiRef.set("backPage", "Products");
                
                var url = apiRef.get("wsURLWithoutContext");
                var productQty = apiRef.get("productQty");
                var productDetails = productQty.productDetail;
                var cartTotal = productQty.cartTotal;
                var totalItem = productQty.totalItem;
				
				var orderDetailback = apiRef.get("orderDetail"); 
				apiRef.set("orderDetailback", orderDetailback);
                
                var orderDetail = apiRef.get("orderDetail", orderDetail); 
                var orderdetailDelivery = {};
                orderdetailDelivery.firstname = orderDetail.deliveryfirstname;
                orderdetailDelivery.lastname  =  orderDetail.deliverylastname;
                orderdetailDelivery.company =  orderDetail.deliverycompany;
                orderdetailDelivery.address1 =  orderDetail.deliveryaddress1;
                orderdetailDelivery.address2 =  orderDetail.deliveryaddress2;
                orderdetailDelivery.state =  orderDetail.deliverystate;
                orderdetailDelivery.country =  orderDetail.deliverycountry;
                orderdetailDelivery.postcode =  orderDetail.deliverypostcode;
                orderdetailDelivery.deliveryphonenumber =  orderDetail.deliveryphonenumber;
                
                var orderdetailBilling = {};
                orderdetailBilling.firstName = orderDetail.billingfirstname;
                orderdetailBilling.lastName  =  orderDetail.billinglastname;
                orderdetailBilling.company =  orderDetail.billingcompany;
                orderdetailBilling.address1 =  orderDetail.billingaddress1;
                orderdetailBilling.address2 =  orderDetail.billingaddress2;
                orderdetailBilling.state =  orderDetail.billingstate;
                orderdetailBilling.country =  orderDetail.billingcountry;
                orderdetailBilling.postcode =  orderDetail.billingpostcode;
                orderdetailBilling.phonenumber =  orderDetail.billingphonenumber;
                
                    
                var orderdetailDeliveryget = apiRef.set("orderdetailDelivery", orderdetailDelivery); // for inserting purpose
                var orderdetailBillingget = apiRef.set("orderdetailBilling", orderdetailBilling); // for inserting purpose
                var productDetails = apiRef.set("productDetails", productDetails);// for inserting purpose
                var cartTotalget = apiRef.set("cartTotal", cartTotal);// for inserting purpose
                var totalItemget = apiRef.set("totalItem", totalItem);// for inserting purpose
                var customerEmail = apiRef.set("customerEmail", orderDetail.email);
                var comment = apiRef.set("comments", orderDetail.comments);

                var mycart = this.createElement('<div class="mycart_div">');
                var mycart_head = this.createElement('<div class="mycart_head">Checkout</div>');
                var checkout_tab = Y.Node.create('<div class="checkout_tab"><a href="#">Customer Information</a></div>');
				checkout_tab.obj = this;
				checkout_tab.openDiv = "1";
                Y.on('click' , this.showCurrentTab , checkout_tab);
                var emailblock = this.createElement('<div class="bill_div" id="checkoutblock_1" style="display:block;">');
                var emailblocksub = this.createElement('<div class="checkout_2_txt" >');
                var emailblocksubul = this.createElement('<ul>');
                var emailblocksubLi1 = this.createElement('<li>Order Information will be sent to your A/C email list below.</li>');
                var emailblocksubLi2 = this.createElement('<li class="bld">');
                var emailblocksubspan1 = this.createElement('<span class="bill_details_lft">Email address</span>');
                var emailblocksubspan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.email +'</span>');
                emailblocksubLi2.appendChild(emailblocksubspan1);
                emailblocksubLi2.appendChild(emailblocksubspan2);
                emailblocksubul.appendChild(emailblocksubLi1);  
                emailblocksubul.appendChild(emailblocksubLi2);              
                emailblocksub.appendChild(emailblocksubul);
                emailblock.appendChild(emailblocksub);  

                var deliveryinfo = Y.Node.create('<div class="checkout_tab" ><a href="#">Delivery Information</a></div>');
				deliveryinfo.obj = this;
				deliveryinfo.openDiv = "2";
                Y.on('click' , this.showCurrentTab , deliveryinfo);
				
                var deliveryinfodetails = this.createElement('<div class="bill_div" id="checkoutblock_2" style="display:none;">');
                var deliveryinfolabel= this.createElement('<div class="bill_head">Delivery address and information here</div>');
                var addressblock = this.createElement('<div class="bill_text_div">');
                var addressblocksub = this.createElement('<div class="bill_details">');
                var addressblocksubul = this.createElement('<ul>');
                
              
                
                var firstnameli = this.createElement('<li>');
                var firstnamespan1 = this.createElement('<span class="bill_details_lft">First name</span>');
                var firstnamespan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryfirstname +'</span>');
                firstnameli.appendChild(firstnamespan1);
                firstnameli.appendChild(firstnamespan2);
                
                var lastnameli = this.createElement('<li>');
                var lastnamelispan1 = this.createElement('<span class="bill_details_lft">Last name</span>');
                var lastnamelispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliverylastname +'</span>');
                lastnameli.appendChild(lastnamelispan1);
                lastnameli.appendChild(lastnamelispan2);
                
                var companyli = this.createElement('<li>');
                var companylispan1 = this.createElement('<span class="bill_details_lft">Company</span>');
                var companylispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliverycompany +'</span>');
                companyli.appendChild(companylispan1);
                companyli.appendChild(companylispan2);
                
                var addressli1 = this.createElement('<li>');
                var addressli1span1 = this.createElement('<span class="bill_details_lft">Address 1</span>');
                var addressli1span2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryaddress1 +'</span>');
                addressli1.appendChild(addressli1span1);
                addressli1.appendChild(addressli1span2);
                
                var addressli2 = this.createElement('<li>');
                var addressli2span1 = this.createElement('<span class="bill_details_lft">Address 2</span>');
                var addressli2span2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryaddress2 +'</span>');
                addressli2.appendChild(addressli2span1);
                addressli2.appendChild(addressli2span2);
                
                var cityli = this.createElement('<li>');
                var citylispan1 = this.createElement('<span class="bill_details_lft">City</span>');
                var citylispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliverycity +'</span>');
                cityli.appendChild(citylispan1);
                cityli.appendChild(citylispan2);
                
                var stateli = this.createElement('<li>');
                var statelispan1 = this.createElement('<span class="bill_details_lft">State/Province</span>');                                      
                var statelispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliverystate +'</span>');
                stateli.appendChild(statelispan1);
                stateli.appendChild(statelispan2);
                
                var countryli = this.createElement('<li>');
                var countrylispan1 = this.createElement('<span class="bill_details_lft">Country</span>');                                   
                var countrylispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliverycountry +'</span>');
                countryli.appendChild(countrylispan1);
                countryli.appendChild(countrylispan2);
                
                var postcodeli = this.createElement('<li>');
                var postcodelispan1 = this.createElement('<span class="bill_details_lft">Postcode</span>');
                var postcodelispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliverypostcode +'</span>');
                postcodeli.appendChild(postcodelispan1);
                postcodeli.appendChild(postcodelispan2);

                var phonenumberli = this.createElement('<li>');
                var phonenumberlispan1 = this.createElement('<span class="bill_details_lft">Phone Number</span>');
                var phonenumberlispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryphonenumber +'</span>');
                phonenumberli.appendChild(phonenumberlispan1);
                phonenumberli.appendChild(phonenumberlispan2);
                

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
                addressblock.appendChild(addressblocksub);;
                deliveryinfodetails.appendChild(deliveryinfolabel);
				
				deliveryinfodetails.appendChild(addressblock);	
				
                var billinginfo = this.createElement('<div class="checkout_tab" ><a href="#">billing Information</a></div>');
				billinginfo.obj = this;
				billinginfo.openDiv = "3";
                Y.on('click' , this.showCurrentTab , billinginfo);
                var billinginfodetails = this.createElement('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
                var billinginfolabel= this.createElement('<div class="bill_head">Billing address and information here</div>');
                var billaddressblock = this.createElement('<div class="bill_text_div">');
                var billaddressblocksub = this.createElement('<div class="bill_details">');
                var billaddressblocksubul = this.createElement('<ul>');
                

                
                var billfirstnameli = this.createElement('<li>');
                var billfirstnamespan1 = this.createElement('<span class="bill_details_lft">First name</span>');
                var billfirstnamespan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billingfirstname +'</span>');
                billfirstnameli.appendChild(billfirstnamespan1);
                billfirstnameli.appendChild(billfirstnamespan2);
                
                var billlastnameli = this.createElement('<li>');
                var billlastnamelispan1 = this.createElement('<span class="bill_details_lft">Last name</span>');
                var billlastnamelispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billinglastname +'</span>');
                billlastnameli.appendChild(billlastnamelispan1);
                billlastnameli.appendChild(billlastnamelispan2);
                
                var billcompanyli = this.createElement('<li>');
                var billcompanylispan1 = this.createElement('<span class="bill_details_lft">Company</span>');
                var billcompanylispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billingcompany +'</span>');
                billcompanyli.appendChild(billcompanylispan1);
                billcompanyli.appendChild(billcompanylispan2);
                
                var billaddressli1 = this.createElement('<li>');
                var billaddressli1span1 = this.createElement('<span class="bill_details_lft">Address 1</span>');
                var billaddressli1span2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billingaddress1 +'</span>');
                billaddressli1.appendChild(billaddressli1span1);
                billaddressli1.appendChild(billaddressli1span2);
                
                var billaddressli2 = this.createElement('<li>');
                var billaddressli2span1 = this.createElement('<span class="bill_details_lft">Address 2</span>');
                var billaddressli2span2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billingaddress2 +'</span>');
                billaddressli2.appendChild(billaddressli2span1);
                billaddressli2.appendChild(billaddressli2span2);
                
                var billcityli = this.createElement('<li>');
                var billcitylispan1 = this.createElement('<span class="bill_details_lft">City</span>');
                var billcitylispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billingcity +'</span>');
                billcityli.appendChild(billcitylispan1);
                billcityli.appendChild(billcitylispan2);
                
                var billstateli = this.createElement('<li>');
                var billstatelispan1 = this.createElement('<span class="bill_details_lft">State/Province</span>');                                      
                var billstatelispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billingstate +'</span>');
                billstateli.appendChild(billstatelispan1);
                billstateli.appendChild(billstatelispan2);
                
                var billcountryli = this.createElement('<li>');
                var billcountrylispan1 = this.createElement('<span class="bill_details_lft">Country</span>');                                   
                var billcountrylispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billingcountry +'</span>');
                billcountryli.appendChild(billcountrylispan1);
                billcountryli.appendChild(billcountrylispan2);
                
                var billpostcodeli = this.createElement('<li>');
                var billpostcodelispan1 = this.createElement('<span class="bill_details_lft">Postcode</span>');
                var billpostcodelispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billingpostcode +'</span>');
                billpostcodeli.appendChild(billpostcodelispan1);
                billpostcodeli.appendChild(billpostcodelispan2);

                var billphonenumberli = this.createElement('<li>');
                var billphonenumberlispan1 = this.createElement('<span class="bill_details_lft">Phone Number</span>');
                var billphonenumberlispan2 = this.createElement('<span class="bill_details_rht">'+ orderDetail.billingphonenumber +'</span>');
                billphonenumberli.appendChild(billphonenumberlispan1);
                billphonenumberli.appendChild(billphonenumberlispan2);
                

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
                var methodli1 = this.createElement('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
                var methodli2 = this.createElement('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cash on delivery</span></li>');                             
                methodul.appendChild(methodli1);
                methodul.appendChild(methodli2);            
                method.appendChild(methodul);                      
                 
                var subtotal = this.createElement('<div class="prod_check_div">');
                var subtotalspan1 = this.createElement('<span class="prod_check_lft">Total Item</span>');
                var subtotalspan2 = this.createElement('<span class="prod_check_rht1">'+ totalItem +' </span>');
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
                var commentbox = this.createElement('<div class="com_commentbox">'+ orderDetail.comments +'</div>');
                ordercmdblock.appendChild(commnettext);
                ordercmdblock.appendChild(commnethead);
                ordercmdblock.appendChild(commentbox);
                
                var buttons = this.createElement('<div class="checkout_btn">');
                var buttonblock = this.createElement('<div class="mycart_btn_mid">');
                var revieworder = Y.Node.create('<div class="mycart_mid_bu"><a href="#">Submit Order</a></div>');
                revieworder.obj = this;             
                Y.on('click' , this.showOrderSuccess , revieworder);
                var cancel = this.createElement('<div class="mycart_mid_bu"><a href="#">Back</a></div>');
                cancel.obj = this;
                cancel.data = 2;
                Y.on('click' , this.showProductOrder , cancel);
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

    Y.namespace("Phresco").CheckoutFormViewWidget = CheckoutFormViewWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
