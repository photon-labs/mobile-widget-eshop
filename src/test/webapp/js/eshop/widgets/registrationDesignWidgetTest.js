/*
 * PHR_HTML5MobileWidget
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
YUI.add('registrationDesignWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("RegistrationDesignWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "RegistrationDesignWidgetTest",
			"RegistrationDesignWidgetTest with same data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var regNode = Y.Node.create('<div id="container"></div>');
					// instantiate RegistrationWidget with the HTML
					var registrationWidget = new Y.Phresco.RegistrationWidget({
						// place holder can be decided by specifying the attribute
						targetNode : regNode,
						apiReference : eshopapi
				   });
					registrationWidget.render();
					var output1 = registrationWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var myCart = phrescoWidget.createElement('<div class="mycart_div"></div>');
						var log_div = phrescoWidget.createElement('<div class="log_div"></div>');
							var log_innerdiv = phrescoWidget.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phrescoWidget.createElement('<div class="log_heading">Register</div>');
									var log_txt_div = phrescoWidget.createElement('<div class="log_txt_div"></div>');
										
										var log_txtfname = phrescoWidget.createElement('<div class="log_txt"><div id="regfirstname_err_div" class="clearfix">');
											var log_txt_lftfname = phrescoWidget.createElement('<div class="log_txt_lft">First Name</div>');
											var log_txt_rhtfname = Y.Node.create('<div class="log_txt_rht"><input type="text" name="regfirstname" id="regfirstname" placeholder="First Name" autofocus="autofocus" maxlength="40"/></div><span class="help-inline" id="regfirstname_err"></span>');
										log_txtfname.appendChild(log_txt_lftfname);
										log_txtfname.appendChild(log_txt_rhtfname);
				   
									   var log_txtlname = phrescoWidget.createElement('<div class="log_txt"><div id="reglastname_err_div" class="clearfix">');
											var log_txt_lftlname = phrescoWidget.createElement('<div class="log_txt_lft">Last Name</div>');
											var log_txt_rhtlname = Y.Node.create('<div class="log_txt_rht"><input type="text" name="reglastname" id="reglastname" placeholder="Last Name" maxlength="40"/></div><span class="help-inline" id="reglastname_err"></span>');
										log_txtlname.appendChild(log_txt_lftlname);
										log_txtlname.appendChild(log_txt_rhtlname);
				   
									   var log_txt1 = phrescoWidget.createElement('<div class="log_txt"><div id="regemail_err_div" class="clearfix">');
											var log_txt_lft = phrescoWidget.createElement('<div class="log_txt_lft">Email Id</div>');
											var log_txt_rht = Y.Node.create('<div class="log_txt_rht"><input type="text" name="regemail" id="regemail" placeholder="Email" maxlength="250"/></div><span class="help-inline" id="regemail_err"></span>');
										log_txt1.appendChild(log_txt_lft);
										log_txt1.appendChild(log_txt_rht);
				   
										var log_txt2 = phrescoWidget.createElement('<div class="log_txt"><div id="regpassword_err_div" class="clearfix">');
											var log_txt_lft2 = phrescoWidget.createElement('<div class="log_txt_lft">Password</div>');
											var log_txt_rht2 = Y.Node.create('<div class="log_txt_rht"><input type="password" name="regpassword" id="regpassword" placeholder="Password" maxlength="20"  /></div><span class="help-inline" id="regpassword_err"></span>');
										log_txt2.appendChild(log_txt_lft2);
										log_txt2.appendChild(log_txt_rht2);

										var log_txt3 = phrescoWidget.createElement('<div class="log_txt"><div id="regphonenumber_err_div" class="clearfix">');
											var log_txt_lft3 = phrescoWidget.createElement('<div class="log_txt_lft">Phone</div>');
											var log_txt_rht3 = Y.Node.create('<div class="log_txt_rht"><input type="text" name="regphonenumber" id="regphonenumber" placeholder="Phone Number" maxlength="20" /></div><span class="help-inline" id="regphonenumber_err"></span>');
										log_txt3.appendChild(log_txt_lft3);
										log_txt3.appendChild(log_txt_rht3);

										var log_txt4 = phrescoWidget.createElement('<div class="log_txt">');
											var log_bu_div = phrescoWidget.createElement('<div class="log_bu_div">');
												var log_bu_login = phrescoWidget.createElement('<div class="log_bu_login">');
													var log_reg_bu = Y.Node.create('<div class="log_reg_bu"><a href="#">Register</a></div>');
														log_reg_bu.obj = phrescoWidget;
														Y.on('click' , phrescoWidget.userRegister , log_reg_bu);

												log_bu_login.appendChild(log_reg_bu);

												var log_bu_cancel = phrescoWidget.createElement('<div class="log_bu_cancel">');
													var log_reg_bu1 = Y.Node.create('<div class="log_reg_bu"><a href="javascript:void(0);">Cancel</a></div>');
														log_reg_bu1.obj = phrescoWidget;
														Y.on('click' , phrescoWidget.showHome , log_reg_bu1);
													
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

									var checkout_btn = phrescoWidget.createElement('<div class="checkout_btn">');
										var log_reg_bu2 = Y.Node.create('<div class="log_reg_bu"><a href="#">Login</a></div>');
											log_reg_bu2.obj = phrescoWidget;
											Y.on('click' , phrescoWidget.userLoginWidget , log_reg_bu2);

										var clearDiv = phrescoWidget.createElement('<div style="clear:both"></div>');
									checkout_btn.appendChild(log_reg_bu2);
									checkout_btn.appendChild(clearDiv);
							
							log_innerdiv.appendChild(log_innerdiv1);
							log_innerdiv.appendChild(checkout_btn);
						log_div.appendChild(log_innerdiv);
					  myCart.appendChild(log_div);
					

					var copydiv1 = phrescoWidget.createElement('<div class="log_div"></div>');
						var copyinnerdiv = phrescoWidget.createElement('<div class="log_innerdiv">');
							var copyinnerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1">');
								var copyheading = phrescoWidget.createElement('<div class="log_heading">');
									var copyRight = phrescoWidget.createElement('<strong> E-Shop Phresco &copy; Photon Infotech 2012 </strong>');
									var privacyPolicy = phrescoWidget.createElement('<a class="link" href="#"></a><br />');
									copyheading.appendChild(copyRight);


							copyinnerdiv1.appendChild(copyheading);
						copyinnerdiv.appendChild(copyinnerdiv1);
					copydiv1.appendChild(copyinnerdiv);
				  myCart.appendChild(copydiv1); 
					
					targetNode.appendChild(myCart);

					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areEqual(output1, output2, "RegistrationWidget Success case");
				});
			},
			
			"RegistrationDesignWidgetTest with different data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var helloNode = Y.Node.create('<div id="container"></div>');
					// instantiate RegistrationWidget with the HTML
					var registrationWidget = new Y.Phresco.RegistrationWidget({
						// place holder can be decided by specifying the attribute
						targetNode : helloNode,
						apiReference : eshopapi
				   });
					registrationWidget.render();
					var output1 = registrationWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var helloNode = Y.Node.create('<div id="container"></div>');
					// instantiate RegistrationWidget with the HTML
					var registrationWidget = new Y.Phresco.RegistrationWidget({
						// place holder can be decided by specifying the attribute
						targetNode : helloNode,
						apiReference : eshopapi
				   });
					registrationWidget.render();
					var output1 = registrationWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var myCart = phrescoWidget.createElement('<div class="mycart_div"></div>');
						var log_div = phrescoWidget.createElement('<div class="log_div"></div>');
							var log_innerdiv = phrescoWidget.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phrescoWidget.createElement('<div class="log_heading">Register</div>');
									var log_txt_div = phrescoWidget.createElement('<div class="log_txt_div"></div>');
										
										var log_txtfname = phrescoWidget.createElement('<div class="log_txt"><div id="regfirstname_err_div" class="clearfix">');
											var log_txt_lftfname = phrescoWidget.createElement('<div class="log_txt_lft">First Name</div>');
											var log_txt_rhtfname = Y.Node.create('<div class="log_txt_rht"><input type="text" name="regfirstname" id="regfirstname" placeholder="First Name" autofocus="autofocus" maxlength="40"/></div><span class="help-inline" id="regfirstname_err"></span>');
										log_txtfname.appendChild(log_txt_lftfname);
										log_txtfname.appendChild(log_txt_rhtfname);
				   
									   var log_txtlname = phrescoWidget.createElement('<div class="log_txt"><div id="reglastname_err_div" class="clearfix">');
											var log_txt_lftlname = phrescoWidget.createElement('<div class="log_txt_lft">Last Name</div>');
											var log_txt_rhtlname = Y.Node.create('<div class="log_txt_rht"><input type="text" name="reglastname" id="reglastname" placeholder="Last Name" maxlength="40"/></div><span class="help-inline" id="reglastname_err"></span>');
										log_txtlname.appendChild(log_txt_lftlname);
										log_txtlname.appendChild(log_txt_rhtlname);
				   
									   var log_txt1 = phrescoWidget.createElement('<div class="log_txt"><div id="regemail_err_div" class="clearfix">');
											var log_txt_lft = phrescoWidget.createElement('<div class="log_txt_lft">Email Id</div>');
											var log_txt_rht = Y.Node.create('<div class="log_txt_rht"><input type="text" name="regemail" id="regemail" placeholder="Email" maxlength="250"/></div><span class="help-inline" id="regemail_err"></span>');
										log_txt1.appendChild(log_txt_lft);
										log_txt1.appendChild(log_txt_rht);
				   
										var log_txt2 = phrescoWidget.createElement('<div class="log_txt"><div id="regpassword_err_div" class="clearfix">');
											var log_txt_lft2 = phrescoWidget.createElement('<div class="log_txt_lft">Password</div>');
											var log_txt_rht2 = Y.Node.create('<div class="log_txt_rht"><input type="password" name="regpassword" id="regpassword" placeholder="Password" maxlength="20"  /></div><span class="help-inline" id="regpassword_err"></span>');
										log_txt2.appendChild(log_txt_lft2);
										log_txt2.appendChild(log_txt_rht2);

										var log_txt3 = phrescoWidget.createElement('<div class="log_txt"><div id="regphonenumber_err_div" class="clearfix">');
											var log_txt_lft3 = phrescoWidget.createElement('<div class="log_txt_lft">Phone</div>');
											var log_txt_rht3 = Y.Node.create('<div class="log_txt_rht"><input type="text" name="regphonenumber" id="regphonenumber" placeholder="Phone Number" maxlength="20" /></div><span class="help-inline" id="regphonenumber_err"></span>');
										log_txt3.appendChild(log_txt_lft3);
										log_txt3.appendChild(log_txt_rht3);

										var log_txt4 = phrescoWidget.createElement('<div class="log_txt">');
											var log_bu_div = phrescoWidget.createElement('<div class="log_bu_div">');
												var log_bu_login = phrescoWidget.createElement('<div class="log_bu_login">');
													var log_reg_bu = Y.Node.create('<div class="log_reg_bu"><a href="#">Register</a></div>');
														log_reg_bu.obj = phrescoWidget;
														Y.on('click' , phrescoWidget.userRegister , log_reg_bu);

												log_bu_login.appendChild(log_reg_bu);

												var log_bu_cancel = phrescoWidget.createElement('<div class="log_bu_cancel">');
													var log_reg_bu1 = Y.Node.create('<div class="log_reg_bu"><a href="javascript:void(0);">Cancel</a></div>');
														log_reg_bu1.obj = phrescoWidget;
														Y.on('click' , phrescoWidget.showHome , log_reg_bu1);
													
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

									var checkout_btn = phrescoWidget.createElement('<div class="checkout_btn">');
										var log_reg_bu2 = Y.Node.create('<div class="log_reg_bu"><a href="#">Login</a></div>');
											log_reg_bu2.obj = phrescoWidget;
											Y.on('click' , phrescoWidget.userLoginWidget , log_reg_bu2);

										var clearDiv = phrescoWidget.createElement('<div style="clear:both"></div>');
									checkout_btn.appendChild(log_reg_bu2);
									checkout_btn.appendChild(clearDiv);
							
							log_innerdiv.appendChild(log_innerdiv1);
							log_innerdiv.appendChild(checkout_btn);
						log_div.appendChild(log_innerdiv);
					  myCart.appendChild(log_div);
					

					var copydiv1 = phrescoWidget.createElement('<div class="log_div"></div>');
						var copyinnerdiv = phrescoWidget.createElement('<div class="log_innerdiv">');
							var copyinnerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1">');
								var copyheading = phrescoWidget.createElement('<div class="log_heading1">');
									var copyRight = phrescoWidget.createElement('<strong> E-Shop Phresco &copy; Photon Infotech 2012 </strong>');
									var privacyPolicy = phrescoWidget.createElement('<a class="link" href="#"></a><br />');
									copyheading.appendChild(copyRight);


							copyinnerdiv1.appendChild(copyheading);
						copyinnerdiv.appendChild(copyinnerdiv1);
					copydiv1.appendChild(copyinnerdiv);
				  myCart.appendChild(copydiv1); 
					
					targetNode.appendChild(myCart);

					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "RegistrationWidget Failure case");
				});
			}
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});