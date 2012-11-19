YUI.add('registerSuccessWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("RegisterSuccessWidgetTest");

		//add test cases
		var testCase = new Y.Test.Case({

			name: "RegisterSuccessWidgetTest",
			"RegisterSuccessWidgetTest with success with same data": function () {
				var output1, output2;
				
				var registerSuccessNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget();
				
				var jsonValue = {};
				jsonValue.response = {successMessage:"Success", message:"Inserted"};
				jsonValue.register = {firstName:"sathish", lastName:"s", email:"sathish@gmail.com"};
				var registerSuccessWidget = new Y.Phresco.RegistrationSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : registerSuccessNode,
					apiReference : eshopAPI
			   });
			  registerSuccessWidget.createContent(registerSuccessNode, jsonValue);
			   output1 = registerSuccessWidget.getTargetNode().get('innerHTML');
			   var targetNode = phresco.createElement('<div></div>');
				   var myCart = phresco.createElement('<div class="mycart_div"></div>');
						var log_div = phresco.createElement('<div class="log_div"></div>');
							var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phresco.createElement('<div class="log_heading">Register</div>');
									var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
										
										var registrationStatus = phresco.createElement('<div class="log_txt">');
											var statusMsg1 = phresco.createElement('<div class="log_txt_lft">Register Status:</div>');
											var statusMsg2 = phresco.createElement('<div class="log_txt_lft">'+jsonValue.response.successMessage+'</div>');
											registrationStatus.appendChild(statusMsg1);
											registrationStatus.appendChild(statusMsg2);

										var userStatus = phresco.createElement('<div class="log_txt">');
											var userstatusMsg1 = phresco.createElement('<div class="log_txt_lft">User Status: </div>');
											var userstatusMsg2 = phresco.createElement('<div class="log_txt_lft">'+jsonValue.response.message+'  </div>');
											userStatus.appendChild(userstatusMsg1);
											userStatus.appendChild(userstatusMsg2);

										var log_txtfname = phresco.createElement('<div class="log_txt">');
											var log_txt_lftfname = phresco.createElement('<div class="log_txt_lft">Name : </div>');
											var log_txt_rhtfname = phresco.createElement('<div class="log_txt_lft">'+jsonValue.register.firstName+' '+jsonValue.register.lastName+'</div>');
										log_txtfname.appendChild(log_txt_lftfname);
										log_txtfname.appendChild(log_txt_rhtfname);
									   
										var log_txtEmail = phresco.createElement('<div class="log_txt">');
											var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : </div>');
											var log_txt_rhtEmail = phresco.createElement('<div class="log_txt_lft">'+jsonValue.register.email+'</div>');
										log_txtEmail.appendChild(log_txt_lftEmail);
										log_txtEmail.appendChild(log_txt_rhtEmail);
								   
									log_txt_div.appendChild(registrationStatus);
									log_txt_div.appendChild(userStatus);
									log_txt_div.appendChild(log_txtfname);
									log_txt_div.appendChild(log_txtEmail);
		 
								log_innerdiv1.appendChild(log_heading);
								log_innerdiv1.appendChild(log_txt_div);

							log_innerdiv.appendChild(log_innerdiv1);
						log_div.appendChild(log_innerdiv);
					myCart.appendChild(log_div);

					var copydiv1 = phresco.createElement('<div class="log_div"></div>');
						var copyinnerdiv = phresco.createElement('<div class="log_innerdiv">');
							var copyinnerdiv1 = phresco.createElement('<div class="log_innerdiv1">');
								var copyheading = phresco.createElement('<div class="copywrite">');
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
			
				Y.Assert.areEqual(output1, output2, "RegisterSuccessWidget Success case");
			},
			
			"RegisterSuccessWidgetTest with success message with different data": function () {
				var output1, output2;
			
				var registerSuccessNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget();
				
				jsonValue = {};
				jsonValue.response = {successMessage:"Success", message:"Inserted"};
				jsonValue.register = {firstName:"sathish", lastName:"s", email:"sathish@gmail.com"};
				var registerSuccessWidget = new Y.Phresco.RegistrationSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : registerSuccessNode,
					apiReference : eshopAPI
			   });
			   registerSuccessWidget.createContent(registerSuccessNode, jsonValue);
			   output1 = registerSuccessWidget.getTargetNode().get('innerHTML');
			   var targetNode = phresco.createElement('<div></div>');
				   var myCart = phresco.createElement('<div class="mycart_div"></div>');
						var log_div = phresco.createElement('<div class="log_div"></div>');
							var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phresco.createElement('<div class="log_heading">Register</div>');
									var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
										
										var registrationStatus = phresco.createElement('<div class="log_txt">');
											var statusMsg1 = phresco.createElement('<div class="log_txt_lft">Register Status:</div>');
											var statusMsg2 = phresco.createElement('<div class="log_txt_lft">'+jsonValue.response.successMessage+'</div>');
											registrationStatus.appendChild(statusMsg1);
											registrationStatus.appendChild(statusMsg2);

										var userStatus = phresco.createElement('<div class="log_txt">');
											var userstatusMsg1 = phresco.createElement('<div class="log_txt_lft">User Status: </div>');
											var userstatusMsg2 = phresco.createElement('<div class="log_txt_lft">'+jsonValue.response.message+'  </div>');
											userStatus.appendChild(userstatusMsg1);
											userStatus.appendChild(userstatusMsg2);

										var log_txtfname = phresco.createElement('<div class="log_txt">');
											var log_txt_lftfname = phresco.createElement('<div class="log_txt_lft">Name : </div>');
											var log_txt_rhtfname = phresco.createElement('<div class="log_txt_lft">'+jsonValue.register.firstName+' '+jsonValue.register.lastName+'</div>');
										log_txtfname.appendChild(log_txt_lftfname);
										log_txtfname.appendChild(log_txt_rhtfname);
									   
										var log_txtEmail = phresco.createElement('<div class="log_txt">');
											var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : </div>');
											var log_txt_rhtEmail = phresco.createElement('<div class="log_txt_lft">'+jsonValue.register.email+'</div>');
										log_txtEmail.appendChild(log_txt_lftEmail);
										log_txtEmail.appendChild(log_txt_rhtEmail);
								   
									log_txt_div.appendChild(registrationStatus);
									log_txt_div.appendChild(userStatus);
									log_txt_div.appendChild(log_txtfname);
									log_txt_div.appendChild(log_txtEmail);
		 
								log_innerdiv1.appendChild(log_heading);
								//log_innerdiv1.appendChild(log_txt_div);

							log_innerdiv.appendChild(log_innerdiv1);
						log_div.appendChild(log_innerdiv);
					myCart.appendChild(log_div);

					var copydiv1 = phresco.createElement('<div class="log_div"></div>');
						var copyinnerdiv = phresco.createElement('<div class="log_innerdiv">');
							var copyinnerdiv1 = phresco.createElement('<div class="log_innerdiv1">');
								var copyheading = phresco.createElement('<div class="copywrite">');
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
			
				Y.Assert.areNotEqual(output1, output2, "RegisterSuccessWidget Failure case");
			},
			
			"RegisterSuccessWidgetTest with failure message with same data": function () {
				var output1, output2;
			
				var registerSuccessNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget();
				
				jsonValue = {};
				jsonValue.response = {successMessage:"Already exist", message:"Failed"};
				jsonValue.register = {firstName:"sathish", lastName:"s", email:"sathish@gmail.com"};
				var registerSuccessWidget = new Y.Phresco.RegistrationSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : registerSuccessNode,
					apiReference : eshopAPI
			   });
			   registerSuccessWidget.createContent(registerSuccessNode, jsonValue);
			   output1 = registerSuccessWidget.getTargetNode().get('innerHTML');
			   var targetNode = phresco.createElement('<div></div>');
				   var myCart = phresco.createElement('<div class="mycart_div"></div>');
						var log_div = phresco.createElement('<div class="log_div"></div>');
							var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phresco.createElement('<div class="log_heading">Register</div>');
									var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
										
										var registrationStatus = phresco.createElement('<div class="log_txt">');
											var statusMsg1 = phresco.createElement('<div class="log_txt_lft">Register Status:</div>');
											var statusMsg2 = phresco.createElement('<div class="log_txt_lft">'+jsonValue.response.successMessage+'</div>');
											registrationStatus.appendChild(statusMsg1);
											registrationStatus.appendChild(statusMsg2);

										var userStatus = phresco.createElement('<div class="log_txt">');
											var userstatusMsg1 = phresco.createElement('<div class="log_txt_lft">User Status: </div>');
											var userstatusMsg2 = phresco.createElement('<div class="log_txt_lft">'+jsonValue.response.message+'  </div>');
											userStatus.appendChild(userstatusMsg1);
											userStatus.appendChild(userstatusMsg2);

										var log_txtfname = phresco.createElement('<div class="log_txt">');
											var log_txt_lftfname = phresco.createElement('<div class="log_txt_lft">Name : </div>');
											var log_txt_rhtfname = phresco.createElement('<div class="log_txt_lft">'+jsonValue.register.firstName+' '+jsonValue.register.lastName+'</div>');
										log_txtfname.appendChild(log_txt_lftfname);
										log_txtfname.appendChild(log_txt_rhtfname);
									   
										var log_txtEmail = phresco.createElement('<div class="log_txt">');
											var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : </div>');
											var log_txt_rhtEmail = phresco.createElement('<div class="log_txt_lft">'+jsonValue.register.email+'</div>');
										log_txtEmail.appendChild(log_txt_lftEmail);
										log_txtEmail.appendChild(log_txt_rhtEmail);
								   
									log_txt_div.appendChild(registrationStatus);
									log_txt_div.appendChild(userStatus);
									log_txt_div.appendChild(log_txtfname);
									log_txt_div.appendChild(log_txtEmail);
		 
								log_innerdiv1.appendChild(log_heading);
								log_innerdiv1.appendChild(log_txt_div);

							log_innerdiv.appendChild(log_innerdiv1);
						log_div.appendChild(log_innerdiv);
					myCart.appendChild(log_div);

					var copydiv1 = phresco.createElement('<div class="log_div"></div>');
						var copyinnerdiv = phresco.createElement('<div class="log_innerdiv">');
							var copyinnerdiv1 = phresco.createElement('<div class="log_innerdiv1">');
								var copyheading = phresco.createElement('<div class="copywrite">');
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
			
				Y.Assert.areEqual(output1, output2, "RegisterSuccessWidget Success case");
			},
			
			"RegisterSuccessWidgetTest with failure message with different data": function () {
				var output1, output2;
			
				var registerSuccessNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget();
				
				jsonValue = {};
				jsonValue.response = {successMessage:"Already exist", message:"Failed"};
				jsonValue.register = {firstName:"sathish", lastName:"s", email:"sathish@gmail.com"};
				var registerSuccessWidget = new Y.Phresco.RegistrationSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : registerSuccessNode,
					apiReference : eshopAPI
			   });
			   registerSuccessWidget.createContent(registerSuccessNode, jsonValue);
			   output1 = registerSuccessWidget.getTargetNode().get('innerHTML');
			   var targetNode = phresco.createElement('<div></div>');
				   var myCart = phresco.createElement('<div class="mycart_div"></div>');
						var log_div = phresco.createElement('<div class="log_div"></div>');
							var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phresco.createElement('<div class="log_heading">Register</div>');
									var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
										
										var registrationStatus = phresco.createElement('<div class="log_txt">');
											var statusMsg1 = phresco.createElement('<div class="log_txt_lft">Register Status:</div>');
											var statusMsg2 = phresco.createElement('<div class="log_txt_lft">'+jsonValue.response.successMessage+'</div>');
											registrationStatus.appendChild(statusMsg1);
											registrationStatus.appendChild(statusMsg2);

										var userStatus = phresco.createElement('<div class="log_txt">');
											var userstatusMsg1 = phresco.createElement('<div class="log_txt_lft">User Status: </div>');
											var userstatusMsg2 = phresco.createElement('<div class="log_txt_lft">'+jsonValue.response.message+'  </div>');
											userStatus.appendChild(userstatusMsg1);
											userStatus.appendChild(userstatusMsg2);

										var log_txtfname = phresco.createElement('<div class="log_txt">');
											var log_txt_lftfname = phresco.createElement('<div class="log_txt_lft">Name : </div>');
											var log_txt_rhtfname = phresco.createElement('<div class="log_txt_lft">'+jsonValue.register.firstName+' '+jsonValue.register.lastName+'</div>');
										log_txtfname.appendChild(log_txt_lftfname);
										log_txtfname.appendChild(log_txt_rhtfname);
									   
										var log_txtEmail = phresco.createElement('<div class="log_txt">');
											var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : </div>');
											var log_txt_rhtEmail = phresco.createElement('<div class="log_txt_lft">'+jsonValue.register.email+'</div>');
										log_txtEmail.appendChild(log_txt_lftEmail);
										log_txtEmail.appendChild(log_txt_rhtEmail);
								   
									log_txt_div.appendChild(registrationStatus);
									log_txt_div.appendChild(userStatus);
									log_txt_div.appendChild(log_txtfname);
									log_txt_div.appendChild(log_txtEmail);
		 
								log_innerdiv1.appendChild(log_heading);
								//log_innerdiv1.appendChild(log_txt_div);

							log_innerdiv.appendChild(log_innerdiv1);
						log_div.appendChild(log_innerdiv);
					myCart.appendChild(log_div);

					var copydiv1 = phresco.createElement('<div class="log_div"></div>');
						var copyinnerdiv = phresco.createElement('<div class="log_innerdiv">');
							var copyinnerdiv1 = phresco.createElement('<div class="log_innerdiv1">');
								var copyheading = phresco.createElement('<div class="copywrite">');
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
			
				Y.Assert.areNotEqual(output1, output2, "RegisterSuccessWidget Failure case");
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});