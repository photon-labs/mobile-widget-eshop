YUI.add('navigationWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("NavigationWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "NavigationWidgetTest",
			"NavigationWidgetTest with same data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var navigationNode = Y.Node.create('<div id="container"></div>');
					// instantiate NavigationWidget with the HTML
					var navigationWidget = new Y.Phresco.NavigationWidget({
						// place holder can be decided by specifying the attribute
						targetNode : navigationNode,
						apiReference : eshopapi
				   });
					navigationWidget.render();
					var output1 = navigationWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var headerTabInner = phrescoWidget.createElement('<div class="header_tabinner">');
					var headerTabUL = phrescoWidget.createElement('<ul>');
					var headerTabLIBrowse = Y.Node.create('<li id="browse-tab" class="browse"><a href="#">Browse</a></li>');
					headerTabLIBrowse.obj = phrescoWidget;
					headerTabLIBrowse.id = 'browse-tab';
					Y.on('click' , phrescoWidget.showTab, headerTabLIBrowse);

					var headerTabLISpecial = Y.Node.create('<li id="special-tab" class="special"><a href="#">Special Offers</a></li>');
					headerTabLISpecial.obj = phrescoWidget;
					headerTabLISpecial.id= 'special-tab';
					Y.on('click' , phrescoWidget.showTab, headerTabLISpecial);
					
					
					var headerTabLICart = Y.Node.create('<li id="cart-tab" class="cart"><a href="#">My Cart</a></li>');
					headerTabLICart.obj = phrescoWidget;
					headerTabLICart.id = 'cart-tab';
					Y.on('click' , phrescoWidget.showMyshoppingcart, headerTabLICart);

					headerTabUL.appendChild(headerTabLIBrowse);
					headerTabUL.appendChild(headerTabLISpecial);
					headerTabUL.appendChild(headerTabLICart);
					headerTabInner.appendChild(headerTabUL);

					targetNode.appendChild(headerTabInner);
					
					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areEqual(output1, output2, "NavigationWidget Success case");
				});
			},
			
			"NavigationWidgetTest with different data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var helloNode = Y.Node.create('<div id="container"></div>');
					// instantiate NavigationWidget with the HTML
					var navigationWidget = new Y.Phresco.NavigationWidget({
						// place holder can be decided by specifying the attribute
						targetNode : helloNode,
						apiReference : eshopapi
				   });
					navigationWidget.render();
					var output1 = navigationWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var headerTabInner = phrescoWidget.createElement('<div class="header_tabinner">');
					var headerTabUL = phrescoWidget.createElement('<ul>');
					var headerTabLIBrowse = Y.Node.create('<li id="browse-tab" class="browse"><a href="#">Browse</a></li>');
					headerTabLIBrowse.obj = phrescoWidget;
					headerTabLIBrowse.id = 'browse-tab';
					Y.on('click' , phrescoWidget.showTab, headerTabLIBrowse);

					var headerTabLISpecial = Y.Node.create('<li id="special-tab" class="special"><a href="#">Special Offers</a></li>');
					headerTabLISpecial.obj = phrescoWidget;
					headerTabLISpecial.id= 'special-tab';
					Y.on('click' , phrescoWidget.showTab, headerTabLISpecial);
					
					
					var headerTabLICart = Y.Node.create('<li id="cart-tab" class="cart1"><a href="#">My Cart</a></li>');
					headerTabLICart.obj = phrescoWidget;
					headerTabLICart.id = 'cart-tab';
					Y.on('click' , phrescoWidget.showMyshoppingcart, headerTabLICart);

					headerTabUL.appendChild(headerTabLIBrowse);
					headerTabUL.appendChild(headerTabLISpecial);
					headerTabUL.appendChild(headerTabLICart);
					headerTabInner.appendChild(headerTabUL);

					targetNode.appendChild(headerTabInner);
					
					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "NavigationWidget Failure case");
				});
			}
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});