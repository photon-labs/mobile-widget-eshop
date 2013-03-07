YUI.add('loginSuccessWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("LoginSuccessWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "LoginSuccessWidgetTest",
			"LoginSuccessWidgetTest with success message with same data": function () {
				var output1, output2;
			
				var loginSuccessNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					
					var jsonValue = {};
					jsonValue.response = {successMessage:"Login Success"};
					jsonValue.login = {loginEmail:"john@phresco.com"};
					var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
						// place holder can be decided by specifying the attribute
						targetNode : loginSuccessNode,
						apiReference : eshopAPI
				   });
				   loginSuccessWidget.createContent(loginSuccessNode, jsonValue);
				   output1 = loginSuccessWidget.getTargetNode().get('innerHTML');
				   var successMessage = "Login Success";
				   var loginEmail = "john@phresco.com";
					var targetNode = phresco.createElement('<div></div>');
					   var myCart = phresco.createElement('<div class="mycart_div"></div>');
							var log_div = phresco.createElement('<div class="log_div"></div>');
								var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
									var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
										var log_heading = phresco.createElement('<div class="log_heading">Login</div>');
										var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
											
											var registrationStatus = phresco.createElement('<div class="log_txt"></div>');
												var statusMsg = phresco.createElement('<div class="log_txt_lft">Status : '+successMessage+'</div>');
												registrationStatus.appendChild(statusMsg);
										  
											var log_txtEmail = phresco.createElement('<div class="log_txt">');
												var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : </div>');
												var log_txt_rhtEmail = phresco.createElement('<div class="log_txt_lft">'+loginEmail+'</div>');
											log_txtEmail.appendChild(log_txt_lftEmail);
											log_txtEmail.appendChild(log_txt_rhtEmail);
									   
										log_txt_div.appendChild(registrationStatus);
										log_txt_div.appendChild(log_txtEmail);
			 
									log_innerdiv1.appendChild(log_heading);
									log_innerdiv1.appendChild(log_txt_div);

								log_innerdiv.appendChild(log_innerdiv1);
							log_div.appendChild(log_innerdiv);
						myCart.appendChild(log_div);
														
						var copydiv1 = phresco.createElement('<div class="log_div"></div>');
							var copyinnerdiv = phresco.createElement('<div class="log_innerdiv">');
								var copyinnerdiv1 = phresco.createElement('<div class="log_innerdiv1">');
									var copyheading = phresco.createElement('<div class="log_heading">');
										var copyRight = phresco.createElement('<strong> E-Shop Phresco &copy; 2011 </strong>');
										var privacyPolicy = phresco.createElement('<a class="link" href="#">Privacy Policy</a><br />');
										var poweredBy = phresco.createElement('<a class="link" href="#">powered by Photon</a>');
										copyheading.appendChild(copyRight);
										copyheading.appendChild(privacyPolicy);
										copyheading.appendChild(poweredBy);

								copyinnerdiv1.appendChild(copyheading);
							copyinnerdiv.appendChild(copyinnerdiv1);
						copydiv1.appendChild(copyinnerdiv);
					  myCart.appendChild(copydiv1); 
														
					targetNode.appendChild(myCart);
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areEqual(output1, output2, "LoginSuccessWidget Success case");
				});
			},
			
			"LoginSuccessWidgetTest with success message with different data": function () {
				var output1, output2;
			
				var loginSuccessNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					
					jsonValue = {};
					jsonValue.response = {successMessage:"Login Success"};
					jsonValue.login = {loginEmail:"john@phresco.com"};
					var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
						// place holder can be decided by specifying the attribute
						targetNode : loginSuccessNode,
						apiReference : eshopAPI
				   });
				   loginSuccessWidget.createContent(loginSuccessNode, jsonValue);
				   output1 = loginSuccessWidget.getTargetNode().get('innerHTML');
				   var successMessage = "Login Success";
				   var loginEmail = "john@phresco.com";
					var targetNode = phresco.createElement('<div></div>');
					   var myCart = phresco.createElement('<div class="mycart_div"></div>');
							var log_div = phresco.createElement('<div class="log_div"></div>');
								var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
									var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
										var log_heading = phresco.createElement('<div class="log_heading">Login</div>');
										var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
											
											var registrationStatus = phresco.createElement('<div class="log_txt"></div>');
												var statusMsg = phresco.createElement('<div class="log_txt_lft">Status : '+successMessage+'</div>');
												registrationStatus.appendChild(statusMsg);
										  
											var log_txtEmail = phresco.createElement('<div class="log_txt">');
												var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : </div>');
												var log_txt_rhtEmail = phresco.createElement('<div class="log_txt_lft">'+loginEmail+'</div>');
											log_txtEmail.appendChild(log_txt_lftEmail);
											log_txtEmail.appendChild(log_txt_rhtEmail);
									   
										log_txt_div.appendChild(registrationStatus);
										log_txt_div.appendChild(log_txtEmail);
			 
									log_innerdiv1.appendChild(log_heading);
									/* log_innerdiv1.appendChild(log_txt_div); */

								log_innerdiv.appendChild(log_innerdiv1);
							log_div.appendChild(log_innerdiv);
						myCart.appendChild(log_div);
														
						var copydiv1 = phresco.createElement('<div class="log_div"></div>');
							var copyinnerdiv = phresco.createElement('<div class="log_innerdiv">');
								var copyinnerdiv1 = phresco.createElement('<div class="log_innerdiv1">');
									var copyheading = phresco.createElement('<div class="log_heading">');
										var copyRight = phresco.createElement('<strong> E-Shop Phresco &copy; 2011 </strong>');
										var privacyPolicy = phresco.createElement('<a class="link" href="#">Privacy Policy</a><br />');
										var poweredBy = phresco.createElement('<a class="link" href="#">powered by Photon</a>');
										copyheading.appendChild(copyRight);
										copyheading.appendChild(privacyPolicy);
										copyheading.appendChild(poweredBy);

								copyinnerdiv1.appendChild(copyheading);
							copyinnerdiv.appendChild(copyinnerdiv1);
						copydiv1.appendChild(copyinnerdiv);
					  myCart.appendChild(copydiv1); 
														
					targetNode.appendChild(myCart);
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "LoginSuccessWidget Failure case");
				});
			},
			
			"LoginSuccessWidgetTest with failure message with same data": function () {
				var output1, output2;
			
				var loginSuccessNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					
					jsonValue = {};
					jsonValue.response = {successMessage:"Login failed"};
					jsonValue.login = {loginEmail:"john123@phresco.com"};
					var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
						// place holder can be decided by specifying the attribute
						targetNode : loginSuccessNode,
						apiReference : eshopAPI
				   });
				   loginSuccessWidget.createContent(loginSuccessNode, jsonValue);
				   output1 = loginSuccessWidget.getTargetNode().get('innerHTML');
				   var successMessage = "Login failed";
				   var loginEmail = "john123@phresco.com";
					var targetNode = phresco.createElement('<div></div>');
					   var myCart = phresco.createElement('<div class="mycart_div"></div>');
							var log_div = phresco.createElement('<div class="log_div"></div>');
								var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
									var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
										var log_heading = phresco.createElement('<div class="log_heading">Login</div>');
										var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
											
											var registrationStatus = phresco.createElement('<div class="log_txt"></div>');
												var statusMsg = phresco.createElement('<div class="log_txt_lft">Status : '+successMessage+'</div>');
												registrationStatus.appendChild(statusMsg);
										  
											var log_txtEmail = phresco.createElement('<div class="log_txt">');
												var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : </div>');
												var log_txt_rhtEmail = phresco.createElement('<div class="log_txt_lft">'+loginEmail+'</div>');
											log_txtEmail.appendChild(log_txt_lftEmail);
											log_txtEmail.appendChild(log_txt_rhtEmail);
									   
										log_txt_div.appendChild(registrationStatus);
										log_txt_div.appendChild(log_txtEmail);
			 
									log_innerdiv1.appendChild(log_heading);
									log_innerdiv1.appendChild(log_txt_div);

								log_innerdiv.appendChild(log_innerdiv1);
							log_div.appendChild(log_innerdiv);
						myCart.appendChild(log_div);
														
						var copydiv1 = phresco.createElement('<div class="log_div"></div>');
							var copyinnerdiv = phresco.createElement('<div class="log_innerdiv">');
								var copyinnerdiv1 = phresco.createElement('<div class="log_innerdiv1">');
									var copyheading = phresco.createElement('<div class="log_heading">');
										var copyRight = phresco.createElement('<strong> E-Shop Phresco &copy; 2011 </strong>');
										var privacyPolicy = phresco.createElement('<a class="link" href="#">Privacy Policy</a><br />');
										var poweredBy = phresco.createElement('<a class="link" href="#">powered by Photon</a>');
										copyheading.appendChild(copyRight);
										copyheading.appendChild(privacyPolicy);
										copyheading.appendChild(poweredBy);

								copyinnerdiv1.appendChild(copyheading);
							copyinnerdiv.appendChild(copyinnerdiv1);
						copydiv1.appendChild(copyinnerdiv);
					  myCart.appendChild(copydiv1); 
														
					targetNode.appendChild(myCart);
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areEqual(output1, output2, "LoginSuccessWidget success case");
				});
			},
			
			"LoginSuccessWidgetTest with failure message with different data": function () {
				var output1, output2;
			
				var loginSuccessNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					
					jsonValue = {};
					jsonValue.response = {successMessage:"Login failed"};
					jsonValue.login = {loginEmail:"john123@phresco.com"};
					var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
						// place holder can be decided by specifying the attribute
						targetNode : loginSuccessNode,
						apiReference : eshopAPI
				   });
				   loginSuccessWidget.createContent(loginSuccessNode, jsonValue);
				   output1 = loginSuccessWidget.getTargetNode().get('innerHTML');
				   var successMessage = "Login failed";
				   var loginEmail = "john123@phresco.com";
					var targetNode = phresco.createElement('<div></div>');
					   var myCart = phresco.createElement('<div class="mycart_div"></div>');
							var log_div = phresco.createElement('<div class="log_div"></div>');
								var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
									var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
										var log_heading = phresco.createElement('<div class="log_heading">Login</div>');
										var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
											
											var registrationStatus = phresco.createElement('<div class="log_txt"></div>');
												var statusMsg = phresco.createElement('<div class="log_txt_lft">Status : '+successMessage+'</div>');
												registrationStatus.appendChild(statusMsg);
										  
											var log_txtEmail = phresco.createElement('<div class="log_txt">');
												var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : </div>');
												var log_txt_rhtEmail = phresco.createElement('<div class="log_txt_lft">'+loginEmail+'</div>');
											log_txtEmail.appendChild(log_txt_lftEmail);
											log_txtEmail.appendChild(log_txt_rhtEmail);
									   
										log_txt_div.appendChild(registrationStatus);
										log_txt_div.appendChild(log_txtEmail);
			 
									log_innerdiv1.appendChild(log_heading);
									/* log_innerdiv1.appendChild(log_txt_div); */

								log_innerdiv.appendChild(log_innerdiv1);
							log_div.appendChild(log_innerdiv);
						myCart.appendChild(log_div);
														
						var copydiv1 = phresco.createElement('<div class="log_div"></div>');
							var copyinnerdiv = phresco.createElement('<div class="log_innerdiv">');
								var copyinnerdiv1 = phresco.createElement('<div class="log_innerdiv1">');
									var copyheading = phresco.createElement('<div class="log_heading">');
										var copyRight = phresco.createElement('<strong> E-Shop Phresco &copy; 2011 </strong>');
										var privacyPolicy = phresco.createElement('<a class="link" href="#">Privacy Policy</a><br />');
										var poweredBy = phresco.createElement('<a class="link" href="#">powered by Photon</a>');
										copyheading.appendChild(copyRight);
										copyheading.appendChild(privacyPolicy);
										copyheading.appendChild(poweredBy);

								copyinnerdiv1.appendChild(copyheading);
							copyinnerdiv.appendChild(copyinnerdiv1);
						copydiv1.appendChild(copyinnerdiv);
					  myCart.appendChild(copydiv1); 
														
					targetNode.appendChild(myCart);
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "LoginSuccessWidget failure case");
				});
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});