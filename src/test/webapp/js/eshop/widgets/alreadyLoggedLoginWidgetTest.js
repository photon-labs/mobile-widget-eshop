YUI.add('alreadyLoggedLoginWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("alreadyLoggedLoginWidgetTest");

		//add test cases
		var testCase = new Y.Test.Case({
			name : "LoggedinLoginWidgetTest",
			"LoggedinLoginWidgetTest with same data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phrescoWidget = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var loginNode = Y.Node.create('<div id="container"></div>');
				// instantiate Login Widget with the HTML
				var loginWdget = new Y.Phresco.LoginWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginNode,
					apiReference : eshopapi
			   });
				var userId = 1;
				eshopapi.set("userId", userId);
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
				
				Y.Assert.areEqual(output1, output2, "Already Logged in Login Widgets");
				
			},
			
			"LoggedinLoginWidgetTest with different data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phrescoWidget = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var loginNode = Y.Node.create('<div id="container"></div>');
				// instantiate Login Widget with the HTML
				var loginWdget = new Y.Phresco.LoginWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginNode,
					apiReference : eshopapi
			   });
				var userId = 1;
				eshopapi.set("userId", userId);
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
					
					var copydiv1 = phrescoWidget.createElement('<div class="log_div"></div>');
					var copyinnerdiv = phrescoWidget.createElement('<div class="log_innerdiv">');
						var copyinnerdiv1 = phrescoWidget.createElement('<div class="log_innerdiv">');
							var copyheading = phrescoWidget.createElement('<div class="log_heading">');
								var copyRight = phrescoWidget.createElement('<strong> E-Shop Phresco &copy; Photon Infotech 2012 </strong>');
								copyheading.appendChild(copyRight);
						copyinnerdiv1.appendChild(copyheading);
					copyinnerdiv.appendChild(copyinnerdiv1);
				copydiv1.appendChild(copyinnerdiv);
			  myCart.appendChild(copydiv1); 
			  
				targetNode.appendChild(myCart);
				var output2 = targetNode.get('innerHTML');
				
				Y.Assert.areNotEqual(output1, output2, "Already Logged in Login Widgets");
				
			}
		});
		suite.add(testCase);
		Y.Test.Runner.add(suite);
		
	});