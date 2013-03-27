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
YUI.add('loginDesignWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("LoginDesignWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "LoginDesignWidgetTest",
			"LoginDesignWidgetTest with same data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var loginNode = Y.Node.create('<div id="container"></div>');
					// instantiate Login Widget with the HTML
					var loginWdget = new Y.Phresco.LoginWidget({
						// place holder can be decided by specifying the attribute
						targetNode : loginNode,
						apiReference : eshopapi
				   });
					loginWdget.render();
					var output1 = loginWdget.getTargetNode().get('innerHTML');  
					
					var targetNode = phrescoWidget.createElement('<div></div>');
					var myCart = phrescoWidget.createElement('<div class="mycart_div"></div>');
						var log_div = phrescoWidget.createElement('<div class="log_div"></div>');
							var log_innerdiv = phrescoWidget.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phrescoWidget.createElement('<div class="log_heading">Login</div>');
									var log_txt_div = phrescoWidget.createElement('<div class="log_txt_div"></div>');
										   
									   var log_txt1 = phrescoWidget.createElement('<div class="log_txt"><div id="logEmail_err_div" class="clearfix">');
											var log_txt_lft = phrescoWidget.createElement('<div class="log_txt_lft">Email Id</div>');
											var log_txt_rht = Y.Node.create('<div class="log_txt_rht"><input type="text" autofocus="autofocus" name="logEmail" id="logEmail" placeholder="Email" maxlength="250" /></div><span class="help-inline" id="logEmail_err"></span>');
										log_txt1.appendChild(log_txt_lft);
										log_txt1.appendChild(log_txt_rht);
				   
										var log_txt2 = phrescoWidget.createElement('<div class="log_txt"><div id="logpassword_err_div" class="clearfix">');
											var log_txt_lft2 = phrescoWidget.createElement('<div class="log_txt_lft">Password</div>');
											var log_txt_rht2 = Y.Node.create('<div class="log_txt_rht"><input type="password" name="logpassword" id="logpassword" placeholder="Password" maxlength="20" /></div><span class="help-inline" id="logpassword_err"></span>');
										log_txt2.appendChild(log_txt_lft2);
										log_txt2.appendChild(log_txt_rht2);

										var log_txt4 = phrescoWidget.createElement('<div class="log_txt">');
											var log_bu_div = phrescoWidget.createElement('<div class="log_bu_div">');
												var log_bu_login = phrescoWidget.createElement('<div class="log_bu_login">');
													var log_reg_bu = Y.Node.create('<div class="log_reg_bu"><a href="#">Submit</a></div>');
														log_reg_bu.obj = phrescoWidget;
														Y.on('click' , phrescoWidget.userLogin , log_reg_bu);

												log_bu_login.appendChild(log_reg_bu);

												var log_bu_cancel = phrescoWidget.createElement('<div class="log_bu_cancel">');
													var log_reg_bu1 = Y.Node.create('<div class="log_reg_bu"><a href="javascript:void(0);">Cancel</a></div>');
														log_reg_bu1.obj = phrescoWidget;
														Y.on('click' , phrescoWidget.showHome , log_reg_bu1);
													
												log_bu_cancel.appendChild(log_reg_bu1);       
												
												
											log_bu_div.appendChild(log_bu_login);     
											log_bu_div.appendChild(log_bu_cancel);
										log_txt4.appendChild(log_bu_div);   
									
									log_txt_div.appendChild(log_txt1);
									log_txt_div.appendChild(log_txt2);
									log_txt_div.appendChild(log_txt4);
								
								log_innerdiv1.appendChild(log_heading);
								log_innerdiv1.appendChild(log_txt_div);

									var checkout_btn = phrescoWidget.createElement('<div class="checkout_btn">');
										var log_reg_bu2 = Y.Node.create('<div class="log_reg_bu"><a href="#">Register</a></div>');
											log_reg_bu2.obj = phrescoWidget;
											Y.on('click' , phrescoWidget.userRegistrationWidget , log_reg_bu2);

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
									copyheading.appendChild(copyRight);
							copyinnerdiv1.appendChild(copyheading);
						copyinnerdiv.appendChild(copyinnerdiv1);
					copydiv1.appendChild(copyinnerdiv);
				  myCart.appendChild(copydiv1); 

					targetNode.appendChild(myCart);
					var output2 = targetNode.get('innerHTML');  
				
					Y.Assert.areEqual(output1, output2, "LoginWidget Success case");
				});
			},
			
			"LoginDesignWidgetTest with different data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var configuration = response.host + "/" + response.context;
					var phrescoWidget = new Y.Phresco.PhrescoWidget({config : configuration});
					var loginNode = Y.Node.create('<div id="container"></div>');
					// instantiate NavigationWidget with the HTML
					var loginWdget = new Y.Phresco.LoginWidget({
						// place holder can be decided by specifying the attribute
						targetNode : loginNode,
						apiReference : eshopapi
				   });
					loginWdget.render();
					var output1 = loginWdget.getTargetNode().get('innerHTML'); 
					
					var targetNode = phrescoWidget.createElement('<div></div>');
					var myCart = phrescoWidget.createElement('<div class="mycart_div"></div>');
					
						var log_div = phrescoWidget.createElement('<div class="log_div"></div>');
							var log_innerdiv = phrescoWidget.createElement('<div class="log_innerdiv">');
								var log_innerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1">');
									var log_heading = phrescoWidget.createElement('<div class="log_heading">User Already Logged In</div>');
									log_innerdiv1.appendChild(log_heading);
								log_innerdiv.appendChild(log_innerdiv1);
							log_div.appendChild(log_innerdiv);
						myCart.appendChild(log_div); 
						

					
						var log_div = phrescoWidget.createElement('<div class="log_div"></div>');
							var log_innerdiv = phrescoWidget.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phrescoWidget.createElement('<div class="log_heading">Login</div>');
									var log_txt_div = phrescoWidget.createElement('<div class="log_txt_div"></div>');
										   
									   var log_txt1 = phrescoWidget.createElement('<div class="log_txt"><div id="logEmail_err_div" class="clearfix">');
											var log_txt_lft = phrescoWidget.createElement('<div class="log_txt_lft">Email Id</div>');
											var log_txt_rht = Y.Node.create('<div class="log_txt_rht"><input type="text" autofocus="autofocus" name="logEmail" id="logEmail" placeholder="Email" maxlength="250" /></div><span class="help-inline" id="logEmail_err"></span>');
										log_txt1.appendChild(log_txt_lft);
										log_txt1.appendChild(log_txt_rht);
				   
										var log_txt2 = phrescoWidget.createElement('<div class="log_txt"><div id="logpassword_err_div" class="clearfix">');
											var log_txt_lft2 = phrescoWidget.createElement('<div class="log_txt_lft">Password</div>');
											var log_txt_rht2 = Y.Node.create('<div class="log_txt_rht"><input type="password" name="logpassword" id="logpassword" placeholder="Password" maxlength="20" /></div><span class="help-inline" id="logpassword_err"></span>');
										log_txt2.appendChild(log_txt_lft2);
										log_txt2.appendChild(log_txt_rht2);

										var log_txt4 = phrescoWidget.createElement('<div class="log_txt">');
											var log_bu_div = phrescoWidget.createElement('<div class="log_bu_div">');
												var log_bu_login = phrescoWidget.createElement('<div class="log_bu_login">');
													var log_reg_bu = Y.Node.create('<div class="log_reg_bu"><a href="#">Submit</a></div>');
														log_reg_bu.obj = phrescoWidget;
														Y.on('click' , phrescoWidget.userLogin , log_reg_bu);

												log_bu_login.appendChild(log_reg_bu);

												var log_bu_cancel = phrescoWidget.createElement('<div class="log_bu_cancel">');
													var log_reg_bu1 = Y.Node.create('<div class="log_reg_bu"><a href="javascript:void(0);">Cancel</a></div>');
														log_reg_bu1.obj = phrescoWidget;
														Y.on('click' , phrescoWidget.showHome , log_reg_bu1);
													
												log_bu_cancel.appendChild(log_reg_bu1);       
												
												
											log_bu_div.appendChild(log_bu_login);     
											log_bu_div.appendChild(log_bu_cancel);
										log_txt4.appendChild(log_bu_div);   
									
									log_txt_div.appendChild(log_txt1);
									log_txt_div.appendChild(log_txt2);
									log_txt_div.appendChild(log_txt4);
								
								log_innerdiv1.appendChild(log_heading);
								log_innerdiv1.appendChild(log_txt_div);

									var checkout_btn = phrescoWidget.createElement('<div class="checkout_btn">');
										var log_reg_bu2 = Y.Node.create('<div class="log_reg_bu"><a href="#">Register</a></div>');
											log_reg_bu2.obj = phrescoWidget;
											Y.on('click' , phrescoWidget.userRegistrationWidget , log_reg_bu2);

										var clearDiv = phrescoWidget.createElement('<div style="clear:both"></div>');
									checkout_btn.appendChild(log_reg_bu2);
									checkout_btn.appendChild(clearDiv);
							 
							log_innerdiv.appendChild(log_innerdiv1);
							log_innerdiv.appendChild(checkout_btn);
						log_div.appendChild(log_innerdiv);
					  myCart.appendChild(log_div);
					

					var copydiv1 = phrescoWidget.createElement('<div class="log_div"></div>');
						var copyinnerdiv = phrescoWidget.createElement('<div class="log_innerdiv1">');
							var copyinnerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1">');
								var copyheading = phrescoWidget.createElement('<div class="log_heading">');
									var copyRight = phrescoWidget.createElement('<strong> E-Shop Phresco &copy; Photon Infotech 2012 </strong>');
									copyheading.appendChild(copyRight);
							copyinnerdiv1.appendChild(copyheading);
						copyinnerdiv.appendChild(copyinnerdiv1);
					copydiv1.appendChild(copyinnerdiv);
				  myCart.appendChild(copydiv1); 

					targetNode.appendChild(myCart);
					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "LoginWidget Failure case");
				});
			}
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});