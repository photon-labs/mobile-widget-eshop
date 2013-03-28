YUI.add('checkoutFormViewWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("CheckoutFormViewWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "CheckoutFormViewWidgetTest",
			"CheckoutFormViewWidgetTest with same data": function () {
				var output1, output2, iScroll;
			
				var checkoutViewNode = Y.Node.create('<div></div>');
				
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var checkoutFormViewWidget = new Y.Phresco.CheckoutFormViewWidget({
						targetNode : checkoutViewNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var pricequantity = { totalItem:1, cartTotal:800 };
					eshopAPI.set("productQty", pricequantity);
					
					var orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
					eshopAPI.set("orderDetail", orderDetail);
					
					checkoutFormViewWidget.render();
					var output1 = checkoutFormViewWidget.getTargetNode().get('innerHTML');
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
						

						var targetNode = phresco.createElement('<div></div>');
						var mycart = phresco.createElement('<div class="mycart_div">');
						var mycart_head = phresco.createElement('<div class="mycart_head">Checkout</div>');
						var checkout_tab = Y.Node.create('<div class="checkout_tab"><a href="#">Customer Information</a></div>');

						var emailblock = phresco.createElement('<div class="bill_div" id="checkoutblock_1" style="display:block;">');
						var emailblocksub = phresco.createElement('<div class="checkout_2_txt" >');
						var emailblocksubul = phresco.createElement('<ul>');
						var emailblocksubLi1 = phresco.createElement('<li>Order Information will be sent to your A/C email list below.</li>');
						var emailblocksubLi2 = phresco.createElement('<li class="bld">');
						var emailblocksubspan1 = phresco.createElement('<span class="bill_details_lft">Email address</span>');
						var emailblocksubspan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.email +'</span>');
						emailblocksubLi2.appendChild(emailblocksubspan1);
						emailblocksubLi2.appendChild(emailblocksubspan2);
						emailblocksubul.appendChild(emailblocksubLi1);  
						emailblocksubul.appendChild(emailblocksubLi2);              
						emailblocksub.appendChild(emailblocksubul);
						emailblock.appendChild(emailblocksub);  

						var deliveryinfo = Y.Node.create('<div class="checkout_tab" ><a href="#">Delivery Information</a></div>');
						
						var deliveryinfodetails = phresco.createElement('<div class="bill_div" id="checkoutblock_2" style="display:none;">');
						var deliveryinfolabel= phresco.createElement('<div class="bill_head">Delivery address and information here</div>');
						var addressblock = phresco.createElement('<div class="bill_text_div">');
						var addressblocksub = phresco.createElement('<div class="bill_details">');
						var addressblocksubul = phresco.createElement('<ul>');
						
					  
						
						var firstnameli = phresco.createElement('<li>');
						var firstnamespan1 = phresco.createElement('<span class="bill_details_lft">First name</span>');
						var firstnamespan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryfirstname +'</span>');
						firstnameli.appendChild(firstnamespan1);
						firstnameli.appendChild(firstnamespan2);
						
						var lastnameli = phresco.createElement('<li>');
						var lastnamelispan1 = phresco.createElement('<span class="bill_details_lft">Last name</span>');
						var lastnamelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverylastname +'</span>');
						lastnameli.appendChild(lastnamelispan1);
						lastnameli.appendChild(lastnamelispan2);
						
						var companyli = phresco.createElement('<li>');
						var companylispan1 = phresco.createElement('<span class="bill_details_lft">Company</span>');
						var companylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverycompany +'</span>');
						companyli.appendChild(companylispan1);
						companyli.appendChild(companylispan2);
						
						var addressli1 = phresco.createElement('<li>');
						var addressli1span1 = phresco.createElement('<span class="bill_details_lft">Address 1</span>');
						var addressli1span2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryaddress1 +'</span>');
						addressli1.appendChild(addressli1span1);
						addressli1.appendChild(addressli1span2);
						
						var addressli2 = phresco.createElement('<li>');
						var addressli2span1 = phresco.createElement('<span class="bill_details_lft">Address 2</span>');
						var addressli2span2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryaddress2 +'</span>');
						addressli2.appendChild(addressli2span1);
						addressli2.appendChild(addressli2span2);
						
						var cityli = phresco.createElement('<li>');
						var citylispan1 = phresco.createElement('<span class="bill_details_lft">City</span>');
						var citylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverycity +'</span>');
						cityli.appendChild(citylispan1);
						cityli.appendChild(citylispan2);
						
						var stateli = phresco.createElement('<li>');
						var statelispan1 = phresco.createElement('<span class="bill_details_lft">State/Province</span>');                                      
						var statelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverystate +'</span>');
						stateli.appendChild(statelispan1);
						stateli.appendChild(statelispan2);
						
						var countryli = phresco.createElement('<li>');
						var countrylispan1 = phresco.createElement('<span class="bill_details_lft">Country</span>');                                   
						var countrylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverycountry +'</span>');
						countryli.appendChild(countrylispan1);
						countryli.appendChild(countrylispan2);
						
						var postcodeli = phresco.createElement('<li>');
						var postcodelispan1 = phresco.createElement('<span class="bill_details_lft">Postcode</span>');
						var postcodelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverypostcode +'</span>');
						postcodeli.appendChild(postcodelispan1);
						postcodeli.appendChild(postcodelispan2);

						var phonenumberli = phresco.createElement('<li>');
						var phonenumberlispan1 = phresco.createElement('<span class="bill_details_lft">Phone Number</span>');
						var phonenumberlispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryphonenumber +'</span>');
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
						
						var billinginfo = phresco.createElement('<div class="checkout_tab" ><a href="#">billing Information</a></div>');
						billinginfo.obj = phresco;
						billinginfo.openDiv = "3";
						Y.on('click' , phresco.showCurrentTab , billinginfo);
						var billinginfodetails = phresco.createElement('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
						var billinginfolabel= phresco.createElement('<div class="bill_head">Billing address and information here</div>');
						var billaddressblock = phresco.createElement('<div class="bill_text_div">');
						var billaddressblocksub = phresco.createElement('<div class="bill_details">');
						var billaddressblocksubul = phresco.createElement('<ul>');
						

						
						var billfirstnameli = phresco.createElement('<li>');
						var billfirstnamespan1 = phresco.createElement('<span class="bill_details_lft">First name</span>');
						var billfirstnamespan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingfirstname +'</span>');
						billfirstnameli.appendChild(billfirstnamespan1);
						billfirstnameli.appendChild(billfirstnamespan2);
						
						var billlastnameli = phresco.createElement('<li>');
						var billlastnamelispan1 = phresco.createElement('<span class="bill_details_lft">Last name</span>');
						var billlastnamelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billinglastname +'</span>');
						billlastnameli.appendChild(billlastnamelispan1);
						billlastnameli.appendChild(billlastnamelispan2);
						
						var billcompanyli = phresco.createElement('<li>');
						var billcompanylispan1 = phresco.createElement('<span class="bill_details_lft">Company</span>');
						var billcompanylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingcompany +'</span>');
						billcompanyli.appendChild(billcompanylispan1);
						billcompanyli.appendChild(billcompanylispan2);
						
						var billaddressli1 = phresco.createElement('<li>');
						var billaddressli1span1 = phresco.createElement('<span class="bill_details_lft">Address 1</span>');
						var billaddressli1span2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingaddress1 +'</span>');
						billaddressli1.appendChild(billaddressli1span1);
						billaddressli1.appendChild(billaddressli1span2);
						
						var billaddressli2 = phresco.createElement('<li>');
						var billaddressli2span1 = phresco.createElement('<span class="bill_details_lft">Address 2</span>');
						var billaddressli2span2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingaddress2 +'</span>');
						billaddressli2.appendChild(billaddressli2span1);
						billaddressli2.appendChild(billaddressli2span2);
						
						var billcityli = phresco.createElement('<li>');
						var billcitylispan1 = phresco.createElement('<span class="bill_details_lft">City</span>');
						var billcitylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingcity +'</span>');
						billcityli.appendChild(billcitylispan1);
						billcityli.appendChild(billcitylispan2);
						
						var billstateli = phresco.createElement('<li>');
						var billstatelispan1 = phresco.createElement('<span class="bill_details_lft">State/Province</span>');                                      
						var billstatelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingstate +'</span>');
						billstateli.appendChild(billstatelispan1);
						billstateli.appendChild(billstatelispan2);
						
						var billcountryli = phresco.createElement('<li>');
						var billcountrylispan1 = phresco.createElement('<span class="bill_details_lft">Country</span>');                                   
						var billcountrylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingcountry +'</span>');
						billcountryli.appendChild(billcountrylispan1);
						billcountryli.appendChild(billcountrylispan2);
						
						var billpostcodeli = phresco.createElement('<li>');
						var billpostcodelispan1 = phresco.createElement('<span class="bill_details_lft">Postcode</span>');
						var billpostcodelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingpostcode +'</span>');
						billpostcodeli.appendChild(billpostcodelispan1);
						billpostcodeli.appendChild(billpostcodelispan2);

						var billphonenumberli = phresco.createElement('<li>');
						var billphonenumberlispan1 = phresco.createElement('<span class="bill_details_lft">Phone Number</span>');
						var billphonenumberlispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingphonenumber +'</span>');
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

						var selectpayment = phresco.createElement('<div class="bill_div" id="checkoutblock_4" style="display:none;">');
						var selectpaymentlabel = phresco.createElement('<div class="comments_text">Select a payment method from the following options</div>');
						var method = phresco.createElement('<div class="methods_div">');
						var methodul = phresco.createElement('<ul>');  
						var methodli1 = phresco.createElement('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
						var methodli2 = phresco.createElement('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cash on delivery</span></li>');                             
						methodul.appendChild(methodli1);
						methodul.appendChild(methodli2);            
						method.appendChild(methodul);                      
						 
						var subtotal = phresco.createElement('<div class="prod_check_div">');
						var subtotalspan1 = phresco.createElement('<span class="prod_check_lft">Total Item</span>');
						var subtotalspan2 = phresco.createElement('<span class="prod_check_rht1">1 </span>');
						var subtotalspan3 = phresco.createElement('<span class="prod_check_mid">:</span>');
						subtotal.appendChild(subtotalspan1);
						subtotal.appendChild(subtotalspan2);
						subtotal.appendChild(subtotalspan3);
						
						var ordertotal = phresco.createElement('<div class="prod_check_div">');
						var ordertotalspan1 = phresco.createElement('<span class="prod_check_lft">ordertotal</span>');
						var ordertotalspan2 = phresco.createElement('<span class="prod_check_rht1">800</span>');
						var ordertotalspan3 = phresco.createElement('<span class="prod_check_mid">:</span>');
						ordertotal.appendChild(ordertotalspan1);
						ordertotal.appendChild(ordertotalspan2);
						ordertotal.appendChild(ordertotalspan3);
						var comments = phresco.createElement('<div class="comments_text">Cheque should be made out to Phresco</div>');
						selectpayment.appendChild(selectpaymentlabel);
						selectpayment.appendChild(method);
						selectpayment.appendChild(subtotal);
						selectpayment.appendChild(ordertotal);  
						selectpayment.appendChild(comments);                    
						
						var ordercomments = Y.Node.create('<div class="checkout_tab"><a href="#">Order Comments</a></div>');

						var ordercmdblock = phresco.createElement('<div class="bill_div" id="checkoutblock_5" style="display:none;">'); 
						var commnettext = phresco.createElement('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
						var commnethead = phresco.createElement('<div class="comments_head">Order Comments</div>');
						var commentbox = phresco.createElement('<div class="com_commentbox">'+ orderDetail.comments +'</div>');
						ordercmdblock.appendChild(commnettext);
						ordercmdblock.appendChild(commnethead);
						ordercmdblock.appendChild(commentbox);
						
						var buttons = phresco.createElement('<div class="checkout_btn">');
						var buttonblock = phresco.createElement('<div class="mycart_btn_mid">');
						var revieworder = Y.Node.create('<div class="mycart_mid_bu"><a href="#">Submit Order</a></div>');

						var cancel = phresco.createElement('<div class="mycart_mid_bu"><a href="#">Back</a></div>');
			
						buttonblock.appendChild(revieworder);
						buttonblock.appendChild(cancel);                  
						var clear = phresco.createElement('<div style="clear:both"></div>');
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
						
						output2 = targetNode.get('innerHTML');
				
					Y.Assert.areEqual(output1, output2, "CheckOutFormView Success case");
				});
			},
			
			"CheckoutFormViewWidgetTest with different data": function () {
				var output1, output2;
			
				var checkoutViewNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var checkoutFormViewWidget = new Y.Phresco.CheckoutFormViewWidget({
						targetNode : checkoutViewNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var pricequantity = { totalItem:1, cartTotal:800 };
					eshopAPI.set("productQty", pricequantity);
					
					var orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
					eshopAPI.set("orderDetail", orderDetail);
					
					checkoutFormViewWidget.render();
					var output1 = checkoutFormViewWidget.getTargetNode().get('innerHTML');
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
					

					var targetNode = phresco.createElement('<div></div>');
					var mycart = phresco.createElement('<div class="mycart_div">');
					var mycart_head = phresco.createElement('<div class="mycart_head">Checkout</div>');
					var checkout_tab = Y.Node.create('<div class="checkout_tab"><a href="#">Customer Information</a></div>');

					var emailblock = phresco.createElement('<div class="bill_div" id="checkoutblock_1" style="display:block;">');
					var emailblocksub = phresco.createElement('<div class="checkout_2_txt" >');
					var emailblocksubul = phresco.createElement('<ul>');
					var emailblocksubLi1 = phresco.createElement('<li>Order Information will be sent to your A/C email list below.</li>');
					var emailblocksubLi2 = phresco.createElement('<li class="bld">');
					var emailblocksubspan1 = phresco.createElement('<span class="bill_details_lft">Email address</span>');
					var emailblocksubspan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.email +'</span>');
					emailblocksubLi2.appendChild(emailblocksubspan1);
					emailblocksubLi2.appendChild(emailblocksubspan2);
					emailblocksubul.appendChild(emailblocksubLi1);  
					emailblocksubul.appendChild(emailblocksubLi2);              
					emailblocksub.appendChild(emailblocksubul);
					emailblock.appendChild(emailblocksub);  

					var deliveryinfo = Y.Node.create('<div class="checkout_tab" ><a href="#">Delivery Information</a></div>');
					
					var deliveryinfodetails = phresco.createElement('<div class="bill_div" id="checkoutblock_2" style="display:none;">');
					var deliveryinfolabel= phresco.createElement('<div class="bill_head">Delivery address and information here</div>');
					var addressblock = phresco.createElement('<div class="bill_text_div">');
					var addressblocksub = phresco.createElement('<div class="bill_details">');
					var addressblocksubul = phresco.createElement('<ul>');
					
				  
					
					var firstnameli = phresco.createElement('<li>');
					var firstnamespan1 = phresco.createElement('<span class="bill_details_lft">First name</span>');
					var firstnamespan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryfirstname +'</span>');
					firstnameli.appendChild(firstnamespan1);
					firstnameli.appendChild(firstnamespan2);
					
					var lastnameli = phresco.createElement('<li>');
					var lastnamelispan1 = phresco.createElement('<span class="bill_details_lft">Last name</span>');
					var lastnamelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverylastname +'</span>');
					lastnameli.appendChild(lastnamelispan1);
					lastnameli.appendChild(lastnamelispan2);
					
					var companyli = phresco.createElement('<li>');
					var companylispan1 = phresco.createElement('<span class="bill_details_lft">Company</span>');
					var companylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverycompany +'</span>');
					companyli.appendChild(companylispan1);
					companyli.appendChild(companylispan2);
					
					var addressli1 = phresco.createElement('<li>');
					var addressli1span1 = phresco.createElement('<span class="bill_details_lft">Address 1</span>');
					var addressli1span2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryaddress1 +'</span>');
					addressli1.appendChild(addressli1span1);
					addressli1.appendChild(addressli1span2);
					
					var addressli2 = phresco.createElement('<li>');
					var addressli2span1 = phresco.createElement('<span class="bill_details_lft">Address 2</span>');
					var addressli2span2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryaddress2 +'</span>');
					addressli2.appendChild(addressli2span1);
					addressli2.appendChild(addressli2span2);
					
					var cityli = phresco.createElement('<li>');
					var citylispan1 = phresco.createElement('<span class="bill_details_lft">City</span>');
					var citylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverycity +'</span>');
					cityli.appendChild(citylispan1);
					cityli.appendChild(citylispan2);
					
					var stateli = phresco.createElement('<li>');
					var statelispan1 = phresco.createElement('<span class="bill_details_lft">State/Province</span>');                                      
					var statelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverystate +'</span>');
					stateli.appendChild(statelispan1);
					stateli.appendChild(statelispan2);
					
					var countryli = phresco.createElement('<li>');
					var countrylispan1 = phresco.createElement('<span class="bill_details_lft">Country</span>');                                   
					var countrylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverycountry +'</span>');
					countryli.appendChild(countrylispan1);
					countryli.appendChild(countrylispan2);
					
					var postcodeli = phresco.createElement('<li>');
					var postcodelispan1 = phresco.createElement('<span class="bill_details_lft">Postcode</span>');
					var postcodelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliverypostcode +'</span>');
					postcodeli.appendChild(postcodelispan1);
					postcodeli.appendChild(postcodelispan2);

					var phonenumberli = phresco.createElement('<li>');
					var phonenumberlispan1 = phresco.createElement('<span class="bill_details_lft">Phone Number</span>');
					var phonenumberlispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.deliveryphonenumber +'</span>');
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
					
					var billinginfo = phresco.createElement('<div class="checkout_tab" ><a href="#">billing Information</a></div>');
					billinginfo.obj = phresco;
					billinginfo.openDiv = "3";
					Y.on('click' , phresco.showCurrentTab , billinginfo);
					var billinginfodetails = phresco.createElement('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
					var billinginfolabel= phresco.createElement('<div class="bill_head">Billing address and information here</div>');
					var billaddressblock = phresco.createElement('<div class="bill_text_div">');
					var billaddressblocksub = phresco.createElement('<div class="bill_details">');
					var billaddressblocksubul = phresco.createElement('<ul>');
					

					
					var billfirstnameli = phresco.createElement('<li>');
					var billfirstnamespan1 = phresco.createElement('<span class="bill_details_lft">First name</span>');
					var billfirstnamespan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingfirstname +'</span>');
					billfirstnameli.appendChild(billfirstnamespan1);
					billfirstnameli.appendChild(billfirstnamespan2);
					
					var billlastnameli = phresco.createElement('<li>');
					var billlastnamelispan1 = phresco.createElement('<span class="bill_details_lft">Last name</span>');
					var billlastnamelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billinglastname +'</span>');
					billlastnameli.appendChild(billlastnamelispan1);
					billlastnameli.appendChild(billlastnamelispan2);
					
					var billcompanyli = phresco.createElement('<li>');
					var billcompanylispan1 = phresco.createElement('<span class="bill_details_lft">Company</span>');
					var billcompanylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingcompany +'</span>');
					billcompanyli.appendChild(billcompanylispan1);
					billcompanyli.appendChild(billcompanylispan2);
					
					var billaddressli1 = phresco.createElement('<li>');
					var billaddressli1span1 = phresco.createElement('<span class="bill_details_lft">Address 1</span>');
					var billaddressli1span2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingaddress1 +'</span>');
					billaddressli1.appendChild(billaddressli1span1);
					billaddressli1.appendChild(billaddressli1span2);
					
					var billaddressli2 = phresco.createElement('<li>');
					var billaddressli2span1 = phresco.createElement('<span class="bill_details_lft">Address 2</span>');
					var billaddressli2span2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingaddress2 +'</span>');
					billaddressli2.appendChild(billaddressli2span1);
					billaddressli2.appendChild(billaddressli2span2);
					
					var billcityli = phresco.createElement('<li>');
					var billcitylispan1 = phresco.createElement('<span class="bill_details_lft">City</span>');
					var billcitylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingcity +'</span>');
					billcityli.appendChild(billcitylispan1);
					billcityli.appendChild(billcitylispan2);
					
					var billstateli = phresco.createElement('<li>');
					var billstatelispan1 = phresco.createElement('<span class="bill_details_lft">State/Province</span>');                                      
					var billstatelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingstate +'</span>');
					billstateli.appendChild(billstatelispan1);
					billstateli.appendChild(billstatelispan2);
					
					var billcountryli = phresco.createElement('<li>');
					var billcountrylispan1 = phresco.createElement('<span class="bill_details_lft">Country</span>');                                   
					var billcountrylispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingcountry +'</span>');
					billcountryli.appendChild(billcountrylispan1);
					billcountryli.appendChild(billcountrylispan2);
					
					var billpostcodeli = phresco.createElement('<li>');
					var billpostcodelispan1 = phresco.createElement('<span class="bill_details_lft">Postcode</span>');
					var billpostcodelispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingpostcode +'</span>');
					billpostcodeli.appendChild(billpostcodelispan1);
					billpostcodeli.appendChild(billpostcodelispan2);

					var billphonenumberli = phresco.createElement('<li>');
					var billphonenumberlispan1 = phresco.createElement('<span class="bill_details_lft">Phone Number</span>');
					var billphonenumberlispan2 = phresco.createElement('<span class="bill_details_rht">'+ orderDetail.billingphonenumber +'</span>');
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

					var selectpayment = phresco.createElement('<div class="bill_div" id="checkoutblock_4" style="display:none;">');
					var selectpaymentlabel = phresco.createElement('<div class="comments_text">Select a payment method from the following options</div>');
					var method = phresco.createElement('<div class="methods_div">');
					var methodul = phresco.createElement('<ul>');  
					var methodli1 = phresco.createElement('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
					var methodli2 = phresco.createElement('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cash on delivery</span></li>');                             
					methodul.appendChild(methodli1);
					methodul.appendChild(methodli2);            
					method.appendChild(methodul);                      
					 
					var subtotal = phresco.createElement('<div class="prod_check_div">');
					var subtotalspan1 = phresco.createElement('<span class="prod_check_lft">Total Item</span>');
					var subtotalspan2 = phresco.createElement('<span class="prod_check_rht1">1 </span>');
					var subtotalspan3 = phresco.createElement('<span class="prod_check_mid">:</span>');
					subtotal.appendChild(subtotalspan1);
					subtotal.appendChild(subtotalspan2);
					subtotal.appendChild(subtotalspan3);
					
					var ordertotal = phresco.createElement('<div class="prod_check_div">');
					var ordertotalspan1 = phresco.createElement('<span class="prod_check_lft">ordertotal</span>');
					var ordertotalspan2 = phresco.createElement('<span class="prod_check_rht1">800</span>');
					var ordertotalspan3 = phresco.createElement('<span class="prod_check_mid">:</span>');
					ordertotal.appendChild(ordertotalspan1);
					ordertotal.appendChild(ordertotalspan2);
					ordertotal.appendChild(ordertotalspan3);
					var comments = phresco.createElement('<div class="comments_text">Cheque should be made out to Phresco</div>');
					selectpayment.appendChild(selectpaymentlabel);
					selectpayment.appendChild(method);
					selectpayment.appendChild(subtotal);
					selectpayment.appendChild(ordertotal);  
					selectpayment.appendChild(comments);                    
					
					var ordercomments = Y.Node.create('<div class="checkout_tab"><a href="#">Order Comments</a></div>');

					var ordercmdblock = phresco.createElement('<div class="bill_div" id="checkoutblock_5" style="display:none;">'); 
					var commnettext = phresco.createElement('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
					var commnethead = phresco.createElement('<div class="comments_head">Order Comments</div>');
					var commentbox = phresco.createElement('<div class="com_commentbox">'+ orderDetail.comments +'</div>');
					ordercmdblock.appendChild(commnettext);
					ordercmdblock.appendChild(commnethead);
					ordercmdblock.appendChild(commentbox);
					
					var buttons = phresco.createElement('<div class="checkout_btn">');
					var buttonblock = phresco.createElement('<div class="mycart_btn_mid">');
					var revieworder = Y.Node.create('<div class="mycart_mid_bu"><a href="#">Submit Order</a></div>');

					var cancel = phresco.createElement('<div class="mycart_mid_bu"><a href="#">Back</a></div>');
		
					buttonblock.appendChild(revieworder);
					buttonblock.appendChild(cancel);                  
					var clear = phresco.createElement('<div style="clear:both"></div>');
					buttons.appendChild(buttonblock); 
					buttons.appendChild(clear); 
					
					
					//mycart.appendChild(mycart_head);        
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
					
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "CheckOutFormView Failure case");
				});
			}
		});
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});	
	