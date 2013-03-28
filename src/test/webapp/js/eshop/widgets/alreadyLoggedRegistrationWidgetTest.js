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
YUI.add('alreadyLoggedRegistrationWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("RegisterWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "RegisterWidgetTest",
			"AlreadyLoggedRegistrationWidgetTest with same data": function () {
				
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var loginNode = Y.Node.create('<div id="container"></div>');
					// instantiate RegistrationWidget with the HTML
					var registrationWidget = new Y.Phresco.RegistrationWidget({
						// place holder can be decided by specifying the attribute
						targetNode : loginNode,
						apiReference : eshopapi
				   });
					var userId = 1;
					eshopapi.set("userId", userId);
					registrationWidget.render();
					var output1 = registrationWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
					 var myCart = phrescoWidget.createElement('<div class="mycart_div"></div>');
						var log_div = phrescoWidget.createElement('<div class="log_div"></div>');
							var log_innerdiv = phrescoWidget.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phrescoWidget.createElement('<div class="log_heading">User Already Logged In</div>');
								log_innerdiv1.appendChild(log_heading);    
							log_innerdiv.appendChild(log_innerdiv1);              
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
					Y.Assert.areEqual(output1, output2, "Register Success case");
				});
			},
			
			"AlreadyLoggedRegistrationWidgetTest with different data": function () {
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
					var userId = 1;
					eshopapi.set("userId", userId);
					registrationWidget.render();
					var output1 = registrationWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
					 var myCart = phrescoWidget.createElement('<div class="mycart_div"></div>');
						var log_div = phrescoWidget.createElement('<div class="log_div"></div>');
							var log_innerdiv = phrescoWidget.createElement('<div class="log_innerdiv"></div>');
								var log_innerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv1"></div>');
									var log_heading = phrescoWidget.createElement('<div class="log_heading">User Already Logged In</div>');
								log_innerdiv1.appendChild(log_heading);    
							log_innerdiv.appendChild(log_innerdiv1);              
						log_div.appendChild(log_innerdiv);
					myCart.appendChild(log_div); 
					

					var copydiv1 = phrescoWidget.createElement('<div class="log_div"></div>');
						var copyinnerdiv = phrescoWidget.createElement('<div class="log_innerdiv">');
							var copyinnerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv">');
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
					
					Y.Assert.areNotEqual(output1, output2, "Register Failure case");
				});
			}
		});
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});