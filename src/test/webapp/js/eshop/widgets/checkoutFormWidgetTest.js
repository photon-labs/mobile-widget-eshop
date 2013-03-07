YUI.add('checkoutFormWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("CheckoutFormWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "CheckoutFormWidgetTest",
			"CheckoutFormWidgetTest with same data": function () {
				var output1, output2;
			
				var checkoutNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var checkoutFormWidget = new Y.Phresco.CheckoutFormWidget({
						targetNode : checkoutNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var pricequantity = { totalItem:1, cartTotal:600 };
					eshopAPI.set("productQty", pricequantity);
					
					var orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
					eshopAPI.set("orderDetailback", orderDetail);
					
					checkoutFormWidget.render();
					var output1 = checkoutFormWidget.getTargetNode().get('innerHTML');
					
					if(orderDetail !== undefined){
						var emailbk = orderDetail.email;
						var dfirstNamebk = orderDetail.deliveryfirstname;
						var dlastNamebk  =  orderDetail.deliverylastname;
						var dcompanybk =  orderDetail.deliverycompany;
						var daddress1bk =  orderDetail.deliveryaddress1;
						var daddress2bk =  orderDetail.deliveryaddress2;
						var dcitybk =  orderDetail.deliverycity;
						var dstatebk =  orderDetail.deliverystate;
						var dcountrybk =  orderDetail.deliverycountry;
						var dpostcodebk =  orderDetail.deliverypostcode;
						var dphonenumberbk =  orderDetail.deliveryphonenumber;
						
						var bfirstNamebk = orderDetail.billingfirstname;
						var blastNamebk  =  orderDetail.billinglastname;
						var bcompanybk =  orderDetail.billingcompany;
						var baddress1bk =  orderDetail.billingaddress1;
						var baddress2bk =  orderDetail.billingaddress2;
						var bcitybk =  orderDetail.billingcity;
						var bstatebk =  orderDetail.billingstate;
						var bcountrybk =  orderDetail.billingcountry;
						var bpostcodebk =  orderDetail.billingpostcode;
						var bphonenumberbk =  orderDetail.billingphonenumber;
						var commentsbk =  orderDetail.comments;
					}
					var emailbk = (emailbk !== undefined)?orderDetail.email : "";
					var dfirstNamebk = (dfirstNamebk !== undefined)?orderDetail.deliveryfirstname : "";
					var dlastNamebk = (dlastNamebk !== undefined)?orderDetail.deliverylastname : "";
					var dcompanybk = (dcompanybk !== undefined)?orderDetail.deliverycompany : "";
					var daddress1bk = (daddress1bk !== undefined)?orderDetail.deliveryaddress1 : "";
					var daddress2bk = (daddress2bk !== undefined)?orderDetail.deliveryaddress2 : "";
					var dcitybk = (dcitybk !== undefined)?orderDetail.deliverycity : "";
					var dstatebk = (dstatebk !== undefined)?orderDetail.deliverystate : "";
					var dcountrybk = (dcountrybk !== undefined)?orderDetail.deliverycountry : "";
					var dpostcodebk = (dpostcodebk !== undefined)?orderDetail.deliverypostcode : "";
					var dphonenumberbk = (dphonenumberbk !== undefined)?orderDetail.deliveryphonenumber : "";
					
					var bfirstNamebk = (bfirstNamebk !== undefined)?orderDetail.billingfirstname : "";
					var blastNamebk = (blastNamebk !== undefined)?orderDetail.billinglastname : "";
					var bcompanybk = (bcompanybk !== undefined)?orderDetail.billingcompany : "";
					var baddress1bk = (baddress1bk !== undefined)?orderDetail.billingaddress1 : "";
					var baddress2bk = (baddress2bk !== undefined)?orderDetail.billingaddress2 : "";
					var bcitybk = (bcitybk !== undefined)?orderDetail.billingcity : "";
					var bstatebk = (bstatebk !== undefined)?orderDetail.billingstate : "";
					var bcountrybk = (bcountrybk !== undefined)?orderDetail.billingcountry : "";
					var bpostcodebk = (bpostcodebk !== undefined)?orderDetail.billingpostcode : "";
					var bphonenumberbk = (bphonenumberbk !== undefined)?orderDetail.billingphonenumber : "";
					var commentsbk = (commentsbk !== undefined)?orderDetail.comments : "";
					
					var targetNode = phresco.createElement('<div></div>');
					var mycart = phresco.createElement('<div class="mycart_div" >');
					var mycart_head = phresco.createElement('<div class="mycart_head">Checkout</div>');
					var checkout_tab = Y.Node.create('<div class="checkout_tab"><a href="#">Customer Information</a></div>');


					var emailblock = phresco.createElement('<div class="bill_div"  id="checkoutblock_1" style="display:block;">');
					var emailblocksub = phresco.createElement('<div class="checkout_2_txt">');
					var emailblocksubul = phresco.createElement('<ul>');
					var emailblocksubLi1 = phresco.createElement('<li>Order Information will be sent to your A/C email list below.</li>');
					var emailblocksubLi2 = phresco.createElement('<li class="bld">');
					var labelemail = phresco.createElement('<label id="email_err_div">');
					var emailblocksubspan1 = phresco.createElement('<span class="bill_details_lft">Email address *</span>');
					var emailblocksubspan2 = Y.Node.create('<span class="bill_details_rht" id="email_err_div"><input name="email" id="email" type="text" autofocus="autofocus" value="'+ emailbk +'" /><br><span id="email_err" class="errtext"></span></span>');
					emailblocksubspan2.data = 'email';
					Y.on('click' , phresco.focusIt , emailblocksubspan2);
					labelemail.appendChild(emailblocksubspan1);
					labelemail.appendChild(emailblocksubspan2);
					emailblocksubLi2.appendChild(labelemail);
					emailblocksubul.appendChild(emailblocksubLi1);  
					emailblocksubul.appendChild(emailblocksubLi2);              
					emailblocksub.appendChild(emailblocksubul);
					emailblock.appendChild(emailblocksub);  

					var deliveryinfo = Y.Node.create('<div class="checkout_tab"><a href="#">Delivery Information</a></div>');
				   
					var deliveryinfodetails = phresco.createElement('<div class="bill_div"  id="checkoutblock_2" style="display:none;">');
					var deliveryinfolabel= phresco.createElement('<div class="bill_head">Enter your delivery address and information here</div>');
					var addressblock = phresco.createElement('<div class="bill_text_div">');
					var addressblocksub = phresco.createElement('<div class="bill_details">');
					var addressblocksubul = phresco.createElement('<ul>');
					
					
					var firstnameli = phresco.createElement('<li class="">');
					var labelfirstname = phresco.createElement('<label  id="deliveryfirstname_err_div">');
					var firstnamespan1 = phresco.createElement('<span class="bill_details_lft">First name *</span>');
					var firstnamespan2 = Y.Node.create('<span class="bill_details_rht"><input name="deliveryfirstName" id="deliveryfirstname" type="text" value="'+ dfirstNamebk +'" /><br><span id="deliveryfirstname_err"></span></span>');
					firstnamespan2.data = 'deliveryfirstname';
					
					labelfirstname.appendChild(firstnamespan1);
					labelfirstname.appendChild(firstnamespan2);
					firstnameli.appendChild(labelfirstname);
					
					var lastnameli = phresco.createElement('<li class="">');				
					var lastnamelispan1 = phresco.createElement('<span class="bill_details_lft">Last name</span>');
					var lastnamelispan2 = Y.Node.create('<span class="bill_details_rht"><input name="deliverylastname" id="deliverylastname" type="text" value="'+ dlastNamebk +'" /></span>');
					lastnameli.appendChild(lastnamelispan1);
					lastnameli.appendChild(lastnamelispan2);
					
					lastnamelispan2.data = 'deliverylastname';
					
					var companyli = phresco.createElement('<li class="">');
					var companylispan1 = phresco.createElement('<span class="bill_details_lft">Company</span>');
					var companylispan2 = Y.Node.create('<span class="bill_details_rht"><input name="deliverycompany" id="deliverycompany" type="text" value="'+ dcompanybk +'" /></span>');
					companyli.appendChild(companylispan1);
					companyli.appendChild(companylispan2);
					companylispan2.data = 'deliverycompany';
					
					var addressli1 = phresco.createElement('<li class="">');
					var labeladdress1 = phresco.createElement('<label  id="deliveryaddress1_err_div">');
					var addressli1span1 = phresco.createElement('<span class="bill_details_lft">Address 1 *</span>');
					var addressli1span2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliveryaddress1" id="deliveryaddress1" type="text" value="'+ daddress1bk +'" /><br><span id="deliveryaddress1_err"></span></span>');
					labeladdress1.appendChild(addressli1span1);
					labeladdress1.appendChild(addressli1span2);
					addressli1.appendChild(labeladdress1);
					addressli1span2.data = 'deliveryaddress1';
					
					var addressli2 = phresco.createElement('<li class="">');
					var addressli2span1 = phresco.createElement('<span class="bill_details_lft">Address 2</span>');
					var addressli2span2 = Y.Node.create('<span class="bill_details_rht"><input name="deliveryaddress2" id="deliveryaddress2" type="text" value="'+ daddress2bk +'" /></span>');
					addressli2.appendChild(addressli2span1);
					addressli2.appendChild(addressli2span2);
					addressli2span2.data = 'deliveryaddress2';
					
					var cityli = phresco.createElement('<li class="">');
					var labelcity = phresco.createElement('<label  id="deliverycity_err_div">');
					var citylispan1 = phresco.createElement('<span class="bill_details_lft">City *</span>');
					var citylispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliverycity" id="deliverycity" type="text" value="'+ dcitybk +'" /><br><span id="deliverycity_err"></span></span>');
					labelcity.appendChild(citylispan1);
					labelcity.appendChild(citylispan2);
					cityli.appendChild(labelcity);
					citylispan2.data = 'deliverycity';
					
					
					var stateli = phresco.createElement('<li class="">');
					var labelstateli = phresco.createElement('<label  id="deliverystate_err_div">');
					var statelispan1 = phresco.createElement('<span class="bill_details_lft">State/Province *</span>');
					var statelispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliverystate" id="deliverystate" type="text" value="'+ dstatebk +'" /><br><span id="deliverystate_err"></span></span>');
					labelstateli.appendChild(statelispan1);
					labelstateli.appendChild(statelispan2);
					stateli.appendChild(labelstateli);
					statelispan2.data = 'deliverystate';
					
					var countryli = phresco.createElement('<li class="">');
					var countrylispan1 = phresco.createElement('<span class="bill_details_lft">Country *</span>');  
					var countryArray = ["USA","India","Australia","Canada","Bangladesh"];	
					
					var countryselect = phresco.createElement('<select name="deliverycountry" id="deliverycountry">');
					for(var i= 0; i < countryArray.length; i++) {
					var selected = (dcountrybk === countryArray[i])?"selected='selected'": "";
					var countryvalue1 = phresco.createElement('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
					countryselect.appendChild(countryvalue1);
					}
					countryli.appendChild(countrylispan1);
					countryli.appendChild(countryselect);
					countryselect.data = 'deliverycountry';
					
					
					var postcodeli = phresco.createElement('<li class="">');
					var labelpostcode = phresco.createElement('<label  id="deliverypostcode_err_div">');
					var postcodelispan1 = phresco.createElement('<span class="bill_details_lft">Postcode *</span>');
					var postcodelispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliverypostcode" id="deliverypostcode"  type="text"  value="'+ dpostcodebk +'"/><br><span id="deliverypostcode_err"></span></span>');
					labelpostcode.appendChild(postcodelispan1);
					labelpostcode.appendChild(postcodelispan2);
					postcodeli.appendChild(labelpostcode);
					postcodelispan2.data = 'deliverypostcode';

					var phonenumberli = phresco.createElement('<li class="">');
					var labelphonenumber = phresco.createElement('<label  id="deliveryphonenumber_err_div">');
					var phonenumberlispan1 = phresco.createElement('<span class="bill_details_lft">Phone Number *</span>');
					var phonenumberlispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliveryphonenumber" id="deliveryphonenumber" type="text" value="'+ dphonenumberbk +'" /><br><span id="deliveryphonenumber_err"></span></span>');
					labelphonenumber.appendChild(phonenumberlispan1);
					labelphonenumber.appendChild(phonenumberlispan2);
					phonenumberli.appendChild(labelphonenumber);
					phonenumberlispan2.data = 'deliveryphonenumber';
					
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

					var billinginfodetails = phresco.createElement('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
					var billinginfolabel= phresco.createElement('<div class="bill_head">Enter your billing address and information here</div>');				
					var billaddressblock = phresco.createElement('<div class="bill_text_div">');
					var billinginfosame= phresco.createElement('<div class="bill_text">My billing information is the same as my delivery information</div>');
					var billcheckbox = Y.Node.create('<input type="checkbox" id="checkaddress" name="checkaddress">');           
					
					var billaddressblocksub = phresco.createElement('<div class="bill_details">');
					var billaddressblocksubul = phresco.createElement('<ul>');
					
						
					var billfirstnameli = phresco.createElement('<li class="">');
					var label_billfirstname = phresco.createElement('<label  id="billingfirstname_err_div">');
					var billfirstnamespan1 = phresco.createElement('<span class="bill_details_lft">First name *</span>');
					var billfirstnamespan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingfirstname" id="billingfirstname" type="text" value="'+ bfirstNamebk +'" /><br><span id="billingfirstname_err"></span></span');
					label_billfirstname.appendChild(billfirstnamespan1);
					label_billfirstname.appendChild(billfirstnamespan2);
					billfirstnameli.appendChild(label_billfirstname);
					
					billfirstnamespan2.data = 'billingfirstname';
					
					var billlastnameli = phresco.createElement('<li>');
					var billlastnamelispan1 = phresco.createElement('<span class="bill_details_lft">Last name</span>');
					var billlastnamelispan2 = Y.Node.create('<span class="bill_details_rht"><input name="billinglastname" id="billinglastname" type="text" value="'+ blastNamebk +'" /></span>');
					billlastnameli.appendChild(billlastnamelispan1);
					billlastnameli.appendChild(billlastnamelispan2);
					
					billlastnamelispan2.data = 'billinglastname';
					
					var billcompanyli = phresco.createElement('<li >');
					var billcompanylispan1 = phresco.createElement('<span class="bill_details_lft">Company</span>');
					var billcompanylispan2 = Y.Node.create('<span class="bill_details_rht"><input name="billingcompany" id="billingcompany" type="text" value="'+ bcompanybk +'" /></span>');
					billcompanyli.appendChild(billcompanylispan1);
					billcompanyli.appendChild(billcompanylispan2);
					billcompanylispan2.data = 'billingcompany';
					
					var billaddressli1 = phresco.createElement('<li class="">');
					var label_billaddress1 = phresco.createElement('<label  id="billingaddress1_err_div">');
					var billaddressli1span1 = phresco.createElement('<span class="bill_details_lft">Address 1 *</span>');
					var billaddressli1span2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingaddress1" id="billingaddress1" type="text" value="'+ baddress1bk +'" /><br><span id="billingaddress1_err"></span></span');
					label_billaddress1.appendChild(billaddressli1span1);
					label_billaddress1.appendChild(billaddressli1span2);
					billaddressli1.appendChild(label_billaddress1);
					billaddressli1span2.data = 'billingaddress1';
					
					var billaddressli2 = phresco.createElement('<li>');
					var billaddressli2span1 = phresco.createElement('<span class="bill_details_lft">Address 2</span>');
					var billaddressli2span2 = Y.Node.create('<span class="bill_details_rht"><input name="billingaddress2" id="billingaddress2" type="text" value="'+ baddress2bk +'" /></span>');
					billaddressli2.appendChild(billaddressli2span1);
					billaddressli2.appendChild(billaddressli2span2);
					billaddressli2span2.data = 'billingaddress2';
					
					var billcityli = phresco.createElement('<li>');
					var label_billcity = phresco.createElement('<label id="billingcity_err_div">');
					var billcitylispan1 = phresco.createElement('<span class="bill_details_lft">City *</span>');
					var billcitylispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingcity" id="billingcity" type="text" value="'+ bcitybk +'" /><br><span id="billingcity_err"></span></span>');
					label_billcity.appendChild(billcitylispan1);
					label_billcity.appendChild(billcitylispan2);
					billcityli.appendChild(label_billcity);
					billcitylispan2.data = 'billingcity';
					
					
					var billstateli = phresco.createElement('<li>');
					var label_billstate = phresco.createElement('<label id="billingstate_err_div">');
					var billstatelispan1 = phresco.createElement('<span class="bill_details_lft">State/Province *</span>');                                      
					var billstatelispan2 = Y.Node.create('<span class="bill_details_rht"><input type="text" name="billingstate" id="billingstate" value="'+ bstatebk +'" ><br><span id="billingstate_err"></span></span>');
					label_billstate.appendChild(billstatelispan1);
					label_billstate.appendChild(billstatelispan2);
					billstateli.appendChild(label_billstate);
					billstatelispan2.data = 'billingstate';
					
					
					var billcountryli = phresco.createElement('<li class="">');
					var billcountrylispan1 = phresco.createElement('<span class="bill_details_lft">Country *</span>');  
					var bcountryArray = ["USA","India","Australia","Canada","Bangladesh"];	
					
					var bcountryselect = phresco.createElement('<select name="billingcountry" id="billingcountry">');
					for(var i= 0; i < bcountryArray.length; i++) {
					var bselected = (bcountrybk === bcountryArray[i])?"selected='selected'": "";
					var bcountryvalue1 = phresco.createElement('<option value="'+ bcountryArray[i] +'" '+ bselected +'>'+ bcountryArray[i] +'</option>');
					bcountryselect.appendChild(bcountryvalue1);
					}
					billcountryli.appendChild(billcountrylispan1);
					billcountryli.appendChild(bcountryselect);
					bcountryselect.data = 'billingcountry';
					
					var billpostcodeli = phresco.createElement('<li>');
					var label_billpost = phresco.createElement('<label id="billingpostcode_err_div">');
					var billpostcodelispan1 = phresco.createElement('<span class="bill_details_lft">Postcode *</span>');
					var billpostcodelispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingpostcode" id="billingpostcode" type="text" value="'+ bpostcodebk +'" /><br><span id="billingpostcode_err"></span></span>');
					label_billpost.appendChild(billpostcodelispan1);
					label_billpost.appendChild(billpostcodelispan2);
					billpostcodeli.appendChild(label_billpost);
					billpostcodelispan2.data = 'billingpostcode';


					var billphonenumberli = phresco.createElement('<li>');
					var label_billphone = phresco.createElement('<label id="billingphonenumber_err_div">');
					var billphonenumberlispan1 = phresco.createElement('<span class="bill_details_lft">Phone Number *</span>');
					var billphonenumberlispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingphonenumber" id="billingphonenumber" type="text" value="'+ bphonenumberbk +'" /><br><span id="billingphonenumber_err"></span></span>');
					label_billphone.appendChild(billphonenumberlispan1);
					label_billphone.appendChild(billphonenumberlispan2);
					billphonenumberli.appendChild(label_billphone);
					billphonenumberlispan2.data = 'billingphonenumber';
					
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
					var selectpayment = phresco.createElement('<div class="bill_div" id="checkoutblock_4" style="display:none;">');
					var selectpaymentlabel = phresco.createElement('<div class="comments_text">Select a payment method from the following options</div>');
					var method = phresco.createElement('<div class="methods_div">');
					var methodul = phresco.createElement('<ul>');  
					var methodli1 = Y.Node.create('<li><span class="radio"><input name="payment" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
					var methodli2 = Y.Node.create('<li><span class="radio"><input name="payment" type="radio" value="" checked="checked" /></span><span class="method_text">Cash on delivery</span></li>');                             
					methodul.appendChild(methodli1);
					methodul.appendChild(methodli2);            
					method.appendChild(methodul);                      
					 
					var subtotal = phresco.createElement('<div class="prod_check_div">');
					var subtotalspan1 = phresco.createElement('<span class="prod_check_lft">Total Items</span>');
					var subtotalspan2 = phresco.createElement('<span class="prod_check_rht1">1</span>');
					var subtotalspan3 = phresco.createElement('<span class="prod_check_mid">:</span>');
					subtotal.appendChild(subtotalspan1);
					subtotal.appendChild(subtotalspan2);
					subtotal.appendChild(subtotalspan3);
					
					var ordertotal = phresco.createElement('<div class="prod_check_div">');
					var ordertotalspan1 = phresco.createElement('<span class="prod_check_lft">ordertotal</span>');
					var ordertotalspan2 = phresco.createElement('<span class="prod_check_rht1">600</span>');
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
					var commentbox = Y.Node.create('<div class="com_commentbox"><textarea name="comments" id="comments" cols="" rows="" value="'+ commentsbk +'" ></textarea></div>');
					ordercmdblock.appendChild(commnettext);
					ordercmdblock.appendChild(commnethead);
					ordercmdblock.appendChild(commentbox);
					commentbox.data = 'comments';
					
					var buttons = phresco.createElement('<div class="checkout_btn">');
					var buttonblock = phresco.createElement('<div class="mycart_btn_mid">');
					var revieworder = Y.Node.create('<div class="mycart_mid_bu" id="revieworder"><a href="#">Review Order</a></div>');

					var cancel = Y.Node.create('<div class="mycart_mid_bu"><a href="#">Cancel</a></div>');                                      
				 
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
				
					Y.Assert.areEqual(output1, output2, "CheckOutForm Success case");
				});
			},
			
			"CheckoutFormWidgetTest with different data": function () {
				var output1, output2;
				wsConfig.getWsConfig(function(response){
					var checkoutNode = Y.Node.create('<div></div>');
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var checkoutFormWidget = new Y.Phresco.CheckoutFormWidget({
						targetNode : checkoutNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var pricequantity = { totalItem:1, cartTotal:600 };
					eshopAPI.set("productQty", pricequantity);
					
					var orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
					eshopAPI.set("orderDetailback", orderDetail);
					
					checkoutFormWidget.render();
					var output1 = checkoutFormWidget.getTargetNode().get('innerHTML');
					
					if(orderDetail !== undefined){
						var emailbk = orderDetail.email;
						var dfirstNamebk = orderDetail.deliveryfirstname;
						var dlastNamebk  =  orderDetail.deliverylastname;
						var dcompanybk =  orderDetail.deliverycompany;
						var daddress1bk =  orderDetail.deliveryaddress1;
						var daddress2bk =  orderDetail.deliveryaddress2;
						var dcitybk =  orderDetail.deliverycity;
						var dstatebk =  orderDetail.deliverystate;
						var dcountrybk =  orderDetail.deliverycountry;
						var dpostcodebk =  orderDetail.deliverypostcode;
						var dphonenumberbk =  orderDetail.deliveryphonenumber;
						
						var bfirstNamebk = orderDetail.billingfirstname;
						var blastNamebk  =  orderDetail.billinglastname;
						var bcompanybk =  orderDetail.billingcompany;
						var baddress1bk =  orderDetail.billingaddress1;
						var baddress2bk =  orderDetail.billingaddress2;
						var bcitybk =  orderDetail.billingcity;
						var bstatebk =  orderDetail.billingstate;
						var bcountrybk =  orderDetail.billingcountry;
						var bpostcodebk =  orderDetail.billingpostcode;
						var bphonenumberbk =  orderDetail.billingphonenumber;
						var commentsbk =  orderDetail.comments;
					}
					var emailbk = (emailbk !== undefined)?orderDetail.email : "";
					var dfirstNamebk = (dfirstNamebk !== undefined)?orderDetail.deliveryfirstname : "";
					var dlastNamebk = (dlastNamebk !== undefined)?orderDetail.deliverylastname : "";
					var dcompanybk = (dcompanybk !== undefined)?orderDetail.deliverycompany : "";
					var daddress1bk = (daddress1bk !== undefined)?orderDetail.deliveryaddress1 : "";
					var daddress2bk = (daddress2bk !== undefined)?orderDetail.deliveryaddress2 : "";
					var dcitybk = (dcitybk !== undefined)?orderDetail.deliverycity : "";
					var dstatebk = (dstatebk !== undefined)?orderDetail.deliverystate : "";
					var dcountrybk = (dcountrybk !== undefined)?orderDetail.deliverycountry : "";
					var dpostcodebk = (dpostcodebk !== undefined)?orderDetail.deliverypostcode : "";
					var dphonenumberbk = (dphonenumberbk !== undefined)?orderDetail.deliveryphonenumber : "";
					
					var bfirstNamebk = (bfirstNamebk !== undefined)?orderDetail.billingfirstname : "";
					var blastNamebk = (blastNamebk !== undefined)?orderDetail.billinglastname : "";
					var bcompanybk = (bcompanybk !== undefined)?orderDetail.billingcompany : "";
					var baddress1bk = (baddress1bk !== undefined)?orderDetail.billingaddress1 : "";
					var baddress2bk = (baddress2bk !== undefined)?orderDetail.billingaddress2 : "";
					var bcitybk = (bcitybk !== undefined)?orderDetail.billingcity : "";
					var bstatebk = (bstatebk !== undefined)?orderDetail.billingstate : "";
					var bcountrybk = (bcountrybk !== undefined)?orderDetail.billingcountry : "";
					var bpostcodebk = (bpostcodebk !== undefined)?orderDetail.billingpostcode : "";
					var bphonenumberbk = (bphonenumberbk !== undefined)?orderDetail.billingphonenumber : "";
					var commentsbk = (commentsbk !== undefined)?orderDetail.comments : "";
					
					var targetNode = phresco.createElement('<div></div>');
					var mycart = phresco.createElement('<div class="mycart_div" >');
					var mycart_head = phresco.createElement('<div class="mycart_head">Checkout</div>');
					var checkout_tab = Y.Node.create('<div class="checkout_tab"><a href="#">Customer Information</a></div>');


					var emailblock = phresco.createElement('<div class="bill_div"  id="checkoutblock_1" style="display:block;">');
					var emailblocksub = phresco.createElement('<div class="checkout_2_txt">');
					var emailblocksubul = phresco.createElement('<ul>');
					var emailblocksubLi1 = phresco.createElement('<li>Order Information will be sent to your A/C email list below.</li>');
					var emailblocksubLi2 = phresco.createElement('<li class="bld">');
					var labelemail = phresco.createElement('<label id="email_err_div">');
					var emailblocksubspan1 = phresco.createElement('<span class="bill_details_lft">Email address *</span>');
					var emailblocksubspan2 = Y.Node.create('<span class="bill_details_rht" id="email_err_div"><input name="email" id="email" type="text" autofocus="autofocus" value="'+ emailbk +'" /><br><span id="email_err" class="errtext"></span></span>');
					emailblocksubspan2.data = 'email';
					Y.on('click' , phresco.focusIt , emailblocksubspan2);
					labelemail.appendChild(emailblocksubspan1);
					labelemail.appendChild(emailblocksubspan2);
					emailblocksubLi2.appendChild(labelemail);
					emailblocksubul.appendChild(emailblocksubLi1);  
					emailblocksubul.appendChild(emailblocksubLi2);              
					emailblocksub.appendChild(emailblocksubul);
					emailblock.appendChild(emailblocksub);  

					var deliveryinfo = Y.Node.create('<div class="checkout_tab"><a href="#">Delivery Information</a></div>');
				   
					var deliveryinfodetails = phresco.createElement('<div class="bill_div"  id="checkoutblock_2" style="display:none;">');
					var deliveryinfolabel= phresco.createElement('<div class="bill_head">Enter your delivery address and information here</div>');
					var addressblock = phresco.createElement('<div class="bill_text_div">');
					var addressblocksub = phresco.createElement('<div class="bill_details">');
					var addressblocksubul = phresco.createElement('<ul>');
					
					
					var firstnameli = phresco.createElement('<li class="">');
					var labelfirstname = phresco.createElement('<label  id="deliveryfirstname_err_div">');
					var firstnamespan1 = phresco.createElement('<span class="bill_details_lft">First name *</span>');
					var firstnamespan2 = Y.Node.create('<span class="bill_details_rht"><input name="deliveryfirstName" id="deliveryfirstname" type="text" value="'+ dfirstNamebk +'" /><br><span id="deliveryfirstname_err"></span></span>');
					firstnamespan2.data = 'deliveryfirstname';
					
					labelfirstname.appendChild(firstnamespan1);
					labelfirstname.appendChild(firstnamespan2);
					firstnameli.appendChild(labelfirstname);
					
					var lastnameli = phresco.createElement('<li class="">');				
					var lastnamelispan1 = phresco.createElement('<span class="bill_details_lft">Last name</span>');
					var lastnamelispan2 = Y.Node.create('<span class="bill_details_rht"><input name="deliverylastname" id="deliverylastname" type="text" value="'+ dlastNamebk +'" /></span>');
					lastnameli.appendChild(lastnamelispan1);
					lastnameli.appendChild(lastnamelispan2);
					
					lastnamelispan2.data = 'deliverylastname';
					
					var companyli = phresco.createElement('<li class="">');
					var companylispan1 = phresco.createElement('<span class="bill_details_lft">Company</span>');
					var companylispan2 = Y.Node.create('<span class="bill_details_rht"><input name="deliverycompany" id="deliverycompany" type="text" value="'+ dcompanybk +'" /></span>');
					companyli.appendChild(companylispan1);
					companyli.appendChild(companylispan2);
					companylispan2.data = 'deliverycompany';
					
					var addressli1 = phresco.createElement('<li class="">');
					var labeladdress1 = phresco.createElement('<label  id="deliveryaddress1_err_div">');
					var addressli1span1 = phresco.createElement('<span class="bill_details_lft">Address 1 *</span>');
					var addressli1span2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliveryaddress1" id="deliveryaddress1" type="text" value="'+ daddress1bk +'" /><br><span id="deliveryaddress1_err"></span></span>');
					labeladdress1.appendChild(addressli1span1);
					labeladdress1.appendChild(addressli1span2);
					addressli1.appendChild(labeladdress1);
					addressli1span2.data = 'deliveryaddress1';
					
					var addressli2 = phresco.createElement('<li class="">');
					var addressli2span1 = phresco.createElement('<span class="bill_details_lft">Address 2</span>');
					var addressli2span2 = Y.Node.create('<span class="bill_details_rht"><input name="deliveryaddress2" id="deliveryaddress2" type="text" value="'+ daddress2bk +'" /></span>');
					addressli2.appendChild(addressli2span1);
					addressli2.appendChild(addressli2span2);
					addressli2span2.data = 'deliveryaddress2';
					
					var cityli = phresco.createElement('<li class="">');
					var labelcity = phresco.createElement('<label  id="deliverycity_err_div">');
					var citylispan1 = phresco.createElement('<span class="bill_details_lft">City *</span>');
					var citylispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliverycity" id="deliverycity" type="text" value="'+ dcitybk +'" /><br><span id="deliverycity_err"></span></span>');
					labelcity.appendChild(citylispan1);
					labelcity.appendChild(citylispan2);
					cityli.appendChild(labelcity);
					citylispan2.data = 'deliverycity';
					
					
					var stateli = phresco.createElement('<li class="">');
					var labelstateli = phresco.createElement('<label  id="deliverystate_err_div">');
					var statelispan1 = phresco.createElement('<span class="bill_details_lft">State/Province *</span>');
					var statelispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliverystate" id="deliverystate" type="text" value="'+ dstatebk +'" /><br><span id="deliverystate_err"></span></span>');
					labelstateli.appendChild(statelispan1);
					labelstateli.appendChild(statelispan2);
					stateli.appendChild(labelstateli);
					statelispan2.data = 'deliverystate';
					
					var countryli = phresco.createElement('<li class="">');
					var countrylispan1 = phresco.createElement('<span class="bill_details_lft">Country *</span>');  
					var countryArray = ["USA","India","Australia","Canada","Bangladesh"];	
					
					var countryselect = phresco.createElement('<select name="deliverycountry" id="deliverycountry">');
					for(var i= 0; i < countryArray.length; i++) {
					var selected = (dcountrybk === countryArray[i])?"selected='selected'": "";
					var countryvalue1 = phresco.createElement('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
					countryselect.appendChild(countryvalue1);
					}
					countryli.appendChild(countrylispan1);
					countryli.appendChild(countryselect);
					countryselect.data = 'deliverycountry';
					
					
					var postcodeli = phresco.createElement('<li class="">');
					var labelpostcode = phresco.createElement('<label  id="deliverypostcode_err_div">');
					var postcodelispan1 = phresco.createElement('<span class="bill_details_lft">Postcode *</span>');
					var postcodelispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliverypostcode" id="deliverypostcode"  type="text"  value="'+ dpostcodebk +'"/><br><span id="deliverypostcode_err"></span></span>');
					labelpostcode.appendChild(postcodelispan1);
					labelpostcode.appendChild(postcodelispan2);
					postcodeli.appendChild(labelpostcode);
					postcodelispan2.data = 'deliverypostcode';

					var phonenumberli = phresco.createElement('<li class="">');
					var labelphonenumber = phresco.createElement('<label  id="deliveryphonenumber_err_div">');
					var phonenumberlispan1 = phresco.createElement('<span class="bill_details_lft">Phone Number *</span>');
					var phonenumberlispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="deliveryphonenumber" id="deliveryphonenumber" type="text" value="'+ dphonenumberbk +'" /><br><span id="deliveryphonenumber_err"></span></span>');
					labelphonenumber.appendChild(phonenumberlispan1);
					labelphonenumber.appendChild(phonenumberlispan2);
					phonenumberli.appendChild(labelphonenumber);
					phonenumberlispan2.data = 'deliveryphonenumber';
					
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

					var billinginfodetails = phresco.createElement('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
					var billinginfolabel= phresco.createElement('<div class="bill_head">Enter your billing address and information here</div>');				
					var billaddressblock = phresco.createElement('<div class="bill_text_div">');
					var billinginfosame= phresco.createElement('<div class="bill_text">My billing information is the same as my delivery information</div>');
					var billcheckbox = Y.Node.create('<input type="checkbox" id="checkaddress" name="checkaddress">');           
					
					var billaddressblocksub = phresco.createElement('<div class="bill_details">');
					var billaddressblocksubul = phresco.createElement('<ul>');
					
						
					var billfirstnameli = phresco.createElement('<li class="">');
					var label_billfirstname = phresco.createElement('<label  id="billingfirstname_err_div">');
					var billfirstnamespan1 = phresco.createElement('<span class="bill_details_lft">First name *</span>');
					var billfirstnamespan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingfirstname" id="billingfirstname" type="text" value="'+ bfirstNamebk +'" /><br><span id="billingfirstname_err"></span></span');
					label_billfirstname.appendChild(billfirstnamespan1);
					label_billfirstname.appendChild(billfirstnamespan2);
					billfirstnameli.appendChild(label_billfirstname);
					
					billfirstnamespan2.data = 'billingfirstname';
					
					var billlastnameli = phresco.createElement('<li>');
					var billlastnamelispan1 = phresco.createElement('<span class="bill_details_lft">Last name</span>');
					var billlastnamelispan2 = Y.Node.create('<span class="bill_details_rht"><input name="billinglastname" id="billinglastname" type="text" value="'+ blastNamebk +'" /></span>');
					billlastnameli.appendChild(billlastnamelispan1);
					billlastnameli.appendChild(billlastnamelispan2);
					
					billlastnamelispan2.data = 'billinglastname';
					
					var billcompanyli = phresco.createElement('<li >');
					var billcompanylispan1 = phresco.createElement('<span class="bill_details_lft">Company</span>');
					var billcompanylispan2 = Y.Node.create('<span class="bill_details_rht"><input name="billingcompany" id="billingcompany" type="text" value="'+ bcompanybk +'" /></span>');
					billcompanyli.appendChild(billcompanylispan1);
					billcompanyli.appendChild(billcompanylispan2);
					billcompanylispan2.data = 'billingcompany';
					
					var billaddressli1 = phresco.createElement('<li class="">');
					var label_billaddress1 = phresco.createElement('<label  id="billingaddress1_err_div">');
					var billaddressli1span1 = phresco.createElement('<span class="bill_details_lft">Address 1 *</span>');
					var billaddressli1span2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingaddress1" id="billingaddress1" type="text" value="'+ baddress1bk +'" /><br><span id="billingaddress1_err"></span></span');
					label_billaddress1.appendChild(billaddressli1span1);
					label_billaddress1.appendChild(billaddressli1span2);
					billaddressli1.appendChild(label_billaddress1);
					billaddressli1span2.data = 'billingaddress1';
					
					var billaddressli2 = phresco.createElement('<li>');
					var billaddressli2span1 = phresco.createElement('<span class="bill_details_lft">Address 2</span>');
					var billaddressli2span2 = Y.Node.create('<span class="bill_details_rht"><input name="billingaddress2" id="billingaddress2" type="text" value="'+ baddress2bk +'" /></span>');
					billaddressli2.appendChild(billaddressli2span1);
					billaddressli2.appendChild(billaddressli2span2);
					billaddressli2span2.data = 'billingaddress2';
					
					var billcityli = phresco.createElement('<li>');
					var label_billcity = phresco.createElement('<label id="billingcity_err_div">');
					var billcitylispan1 = phresco.createElement('<span class="bill_details_lft">City *</span>');
					var billcitylispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingcity" id="billingcity" type="text" value="'+ bcitybk +'" /><br><span id="billingcity_err"></span></span>');
					label_billcity.appendChild(billcitylispan1);
					label_billcity.appendChild(billcitylispan2);
					billcityli.appendChild(label_billcity);
					billcitylispan2.data = 'billingcity';
					
					
					var billstateli = phresco.createElement('<li>');
					var label_billstate = phresco.createElement('<label id="billingstate_err_div">');
					var billstatelispan1 = phresco.createElement('<span class="bill_details_lft">State/Province *</span>');                                      
					var billstatelispan2 = Y.Node.create('<span class="bill_details_rht"><input type="text" name="billingstate" id="billingstate" value="'+ bstatebk +'" ><br><span id="billingstate_err"></span></span>');
					label_billstate.appendChild(billstatelispan1);
					label_billstate.appendChild(billstatelispan2);
					billstateli.appendChild(label_billstate);
					billstatelispan2.data = 'billingstate';
					
					
					var billcountryli = phresco.createElement('<li class="">');
					var billcountrylispan1 = phresco.createElement('<span class="bill_details_lft">Country *</span>');  
					var bcountryArray = ["USA","India","Australia","Canada","Bangladesh"];	
					
					var bcountryselect = phresco.createElement('<select name="billingcountry" id="billingcountry">');
					for(var i= 0; i < bcountryArray.length; i++) {
					var bselected = (bcountrybk === bcountryArray[i])?"selected='selected'": "";
					var bcountryvalue1 = phresco.createElement('<option value="'+ bcountryArray[i] +'" '+ bselected +'>'+ bcountryArray[i] +'</option>');
					bcountryselect.appendChild(bcountryvalue1);
					}
					billcountryli.appendChild(billcountrylispan1);
					billcountryli.appendChild(bcountryselect);
					bcountryselect.data = 'billingcountry';
					
					var billpostcodeli = phresco.createElement('<li>');
					var label_billpost = phresco.createElement('<label id="billingpostcode_err_div">');
					var billpostcodelispan1 = phresco.createElement('<span class="bill_details_lft">Postcode *</span>');
					var billpostcodelispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingpostcode" id="billingpostcode" type="text" value="'+ bpostcodebk +'" /><br><span id="billingpostcode_err"></span></span>');
					label_billpost.appendChild(billpostcodelispan1);
					label_billpost.appendChild(billpostcodelispan2);
					billpostcodeli.appendChild(label_billpost);
					billpostcodelispan2.data = 'billingpostcode';


					var billphonenumberli = phresco.createElement('<li>');
					var label_billphone = phresco.createElement('<label id="billingphonenumber_err_div">');
					var billphonenumberlispan1 = phresco.createElement('<span class="bill_details_lft">Phone Number *</span>');
					var billphonenumberlispan2 = Y.Node.create('<span class="bill_details_rht" ><input name="billingphonenumber" id="billingphonenumber" type="text" value="'+ bphonenumberbk +'" /><br><span id="billingphonenumber_err"></span></span>');
					label_billphone.appendChild(billphonenumberlispan1);
					label_billphone.appendChild(billphonenumberlispan2);
					billphonenumberli.appendChild(label_billphone);
					billphonenumberlispan2.data = 'billingphonenumber';
					
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
					var selectpayment = phresco.createElement('<div class="bill_div" id="checkoutblock_4" style="display:none;">');
					var selectpaymentlabel = phresco.createElement('<div class="comments_text">Select a payment method from the following options</div>');
					var method = phresco.createElement('<div class="methods_div">');
					var methodul = phresco.createElement('<ul>');  
					var methodli1 = Y.Node.create('<li><span class="radio"><input name="payment" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
					var methodli2 = Y.Node.create('<li><span class="radio"><input name="payment" type="radio" value="" checked="checked" /></span><span class="method_text">Cash on delivery</span></li>');                             
					methodul.appendChild(methodli1);
					methodul.appendChild(methodli2);            
					method.appendChild(methodul);                      
					 
					var subtotal = phresco.createElement('<div class="prod_check_div">');
					var subtotalspan1 = phresco.createElement('<span class="prod_check_lft">Total Items</span>');
					var subtotalspan2 = phresco.createElement('<span class="prod_check_rht1">1</span>');
					var subtotalspan3 = phresco.createElement('<span class="prod_check_mid">:</span>');
					subtotal.appendChild(subtotalspan1);
					subtotal.appendChild(subtotalspan2);
					subtotal.appendChild(subtotalspan3);
					
					var ordertotal = phresco.createElement('<div class="prod_check_div">');
					var ordertotalspan1 = phresco.createElement('<span class="prod_check_lft">ordertotal</span>');
					var ordertotalspan2 = phresco.createElement('<span class="prod_check_rht1">600</span>');
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
					var commentbox = Y.Node.create('<div class="com_commentbox"><textarea name="comments" id="comments" cols="" rows="" value="'+ commentsbk +'" ></textarea></div>');
					ordercmdblock.appendChild(commnettext);
					ordercmdblock.appendChild(commnethead);
					ordercmdblock.appendChild(commentbox);
					commentbox.data = 'comments';
					
					var buttons = phresco.createElement('<div class="checkout_btn">');
					var buttonblock = phresco.createElement('<div class="mycart_btn_mid">');
					var revieworder = Y.Node.create('<div class="mycart_mid_bu" id="revieworder"><a href="#">Review Order</a></div>');

					var cancel = Y.Node.create('<div class="mycart_mid_bu"><a href="#">Cancel</a></div>');                                      
				 
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
					Y.Assert.areNotEqual(output1, output2, "CheckoutForm Failure case");
				});
			}
		});
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});