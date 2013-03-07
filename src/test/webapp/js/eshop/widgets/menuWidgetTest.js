YUI.add('menuWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("MenuWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "MenuWidgetTest",
			"MenuWidgetTest with same data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var menuNode = Y.Node.create('<div id="container"></div>');
					// instantiate NavigationWidget with the HTML
					var menuWidget = new Y.Phresco.MenuWidget({
						// place holder can be decided by specifying the attribute
						targetNode : menuNode,
						apiReference : eshopapi
				   });
					menuWidget.render();
					var output1 = menuWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var innerWrap = phrescoWidget.createElement('<div class="inner_wrap">');
							var headerLogo = phrescoWidget.createElement('<div class="header" style="text-align: center;"><img src="images/eshop/logo.png" /></div>');
							var bodyIconRows = phrescoWidget.createElement('<div class="body_icon_row">');

						var firstRowIcons = phrescoWidget.createElement('<div class="icons_row">');
							var firstRowUL = phrescoWidget.createElement('<ul>');
								var homeLI = phrescoWidget.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/home_icon.png" /></div><div class="fonts">Home</div></a></li>');
								var registerLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/register_icon.png" /></div><div class="fonts">Register</div></a></li>');
								registerLI.obj = phrescoWidget;
								registerLI.id = 'register-tab';
								Y.on('click' , phrescoWidget.showTab, registerLI);

							var myCartLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/my_cart_icon.png" /></div><div class="fonts">My Cart</div></a></li>');
							myCartLI.obj = phrescoWidget;
							myCartLI.id = 'cart-tab';
							Y.on('click' , phrescoWidget.showTab, myCartLI);
					
						firstRowUL.appendChild(homeLI);
						firstRowUL.appendChild(registerLI);
						firstRowUL.appendChild(myCartLI);
						firstRowIcons.appendChild(firstRowUL);

						var firstRowClearBoth = phrescoWidget.createElement('<div style="clear:both;"></div>');
					firstRowIcons.appendChild(firstRowClearBoth);

					var secondRowIcons = phrescoWidget.createElement('<div class="icons_row">');
							var secondRowUL = phrescoWidget.createElement('<ul>');
								var searchLI = phrescoWidget.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/search_icon.png" /></div><div class="fonts">Search</div></a></li>');
								var browseLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/browse_icon.png" /></div><div class="fonts">Browse</div></a></li>');
								browseLI.obj = phrescoWidget;
								browseLI.id = "browse-tab";
								Y.on('click' , phrescoWidget.showCategories , browseLI);
					
								var loginLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/loginicon.png" /></div><div class="fonts">Login</div></a></li>');
								loginLI.obj = phrescoWidget;
								loginLI.id = 'login-tab';
								Y.on('click' , phrescoWidget.showTab, loginLI);

							secondRowUL.appendChild(searchLI);
							secondRowUL.appendChild(browseLI);
							secondRowUL.appendChild(loginLI);
						secondRowIcons.appendChild(secondRowUL);

					var secondRowClearBoth = phrescoWidget.createElement('<div style="clear:both;"></div>');
							secondRowIcons.appendChild(secondRowClearBoth);

					var thirdRowIcons = phrescoWidget.createElement('<div class="icons_row">');
						var thirdRowUL = phrescoWidget.createElement('<ul>');
							var settingLI = phrescoWidget.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/setting_icon.png" /></div><div class="fonts">Settings</div></a></li>');
							var offerLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/special_offer_icon.png" /></div><div class="fonts">Special Offers</div></a></li>');
							offerLI.obj = phrescoWidget;
							offerLI.id= 'special-tab';
							Y.on('click' , phrescoWidget.showTab, offerLI);
					
							var eventsLI = phrescoWidget.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/events_icon.png" /></div><div class="fonts">Events</div></a></li>');
							thirdRowUL.appendChild(settingLI);
							thirdRowUL.appendChild(offerLI);
							thirdRowUL.appendChild(eventsLI);
						thirdRowIcons.appendChild(thirdRowUL);

					var thirdRowClearBoth = phrescoWidget.createElement('<div style="clear:both;"></div>');
					thirdRowIcons.appendChild(thirdRowClearBoth);

							bodyIconRows.appendChild(firstRowIcons);
						bodyIconRows.appendChild(secondRowIcons);
					bodyIconRows.appendChild(thirdRowIcons);

					innerWrap.appendChild(headerLogo);
					innerWrap.appendChild(bodyIconRows);
					targetNode.appendChild(innerWrap);
					
					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areEqual(output1, output2, "MenuWidget Success case");
				});
			},
			
			"MenuWidgetTest with different data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var helloNode = Y.Node.create('<div id="container"></div>');
					// instantiate NavigationWidget with the HTML
					var menuWidget = new Y.Phresco.MenuWidget({
						// place holder can be decided by specifying the attribute
						targetNode : helloNode,
						apiReference : eshopapi
				   });
					menuWidget.render();
					var output1 = menuWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var innerWrap = phrescoWidget.createElement('<div class="inner_wrap">');
							var headerLogo = phrescoWidget.createElement('<div class="header" style="text-align: center;"><img src="images/eshop/logo.png" /></div>');
							var bodyIconRows = phrescoWidget.createElement('<div class="body_icon_row">');

						var firstRowIcons = phrescoWidget.createElement('<div class="icons_row">');
							var firstRowUL = phrescoWidget.createElement('<ul>');
								var homeLI = phrescoWidget.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/home_icon.png" /></div><div class="fonts">Home</div></a></li>');
								var registerLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/register_icon.png" /></div><div class="fonts">Register</div></a></li>');
								registerLI.obj = phrescoWidget;
								registerLI.id = 'register-tab';
								Y.on('click' , phrescoWidget.showTab, registerLI);

							var myCartLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/my_cart_icon.png" /></div><div class="fonts">My Cart</div></a></li>');
							myCartLI.obj = phrescoWidget;
							myCartLI.id = 'cart-tab';
							Y.on('click' , phrescoWidget.showTab, myCartLI);
					
						firstRowUL.appendChild(homeLI);
						firstRowUL.appendChild(registerLI);
						firstRowUL.appendChild(myCartLI);
						firstRowIcons.appendChild(firstRowUL);

						var firstRowClearBoth = phrescoWidget.createElement('<div style="clear:both;"></div>');
					firstRowIcons.appendChild(firstRowClearBoth);

					var secondRowIcons = phrescoWidget.createElement('<div class="icons_row">');
							var secondRowUL = phrescoWidget.createElement('<ul>');
								var searchLI = phrescoWidget.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/search_icon.png" /></div><div class="fonts">Search</div></a></li>');
								var browseLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/browse_icon.png" /></div><div class="fonts">Browse</div></a></li>');
								browseLI.obj = phrescoWidget;
								browseLI.id = "browse-tab";
								Y.on('click' , phrescoWidget.showCategories , browseLI);
					
								var loginLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/loginicon.png" /></div><div class="fonts">Login</div></a></li>');
								loginLI.obj = phrescoWidget;
								loginLI.id = 'login-tab';
								Y.on('click' , phrescoWidget.showTab, loginLI);

							secondRowUL.appendChild(searchLI);
							secondRowUL.appendChild(browseLI);
							secondRowUL.appendChild(loginLI);
						secondRowIcons.appendChild(secondRowUL);

					var secondRowClearBoth = phrescoWidget.createElement('<div style="clear:both;"></div>');
							secondRowIcons.appendChild(secondRowClearBoth);

					var thirdRowIcons = phrescoWidget.createElement('<div class="icons_row1">');
						var thirdRowUL = phrescoWidget.createElement('<ul>');
							var settingLI = phrescoWidget.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/setting_icon.png" /></div><div class="fonts">Settings</div></a></li>');
							var offerLI = Y.Node.create('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/special_offer_icon.png" /></div><div class="fonts">Special Offers</div></a></li>');
							offerLI.obj = phrescoWidget;
							offerLI.id= 'special-tab';
							Y.on('click' , phrescoWidget.showTab, offerLI);
					
							var eventsLI = phrescoWidget.createElement('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/events_icon.png" /></div><div class="fonts">Events</div></a></li>');
							thirdRowUL.appendChild(settingLI);
							thirdRowUL.appendChild(offerLI);
							thirdRowUL.appendChild(eventsLI);
						thirdRowIcons.appendChild(thirdRowUL);

					var thirdRowClearBoth = phrescoWidget.createElement('<div style="clear:both;"></div>');
					thirdRowIcons.appendChild(thirdRowClearBoth);

							bodyIconRows.appendChild(firstRowIcons);
						bodyIconRows.appendChild(secondRowIcons);
					bodyIconRows.appendChild(thirdRowIcons);

					innerWrap.appendChild(headerLogo);
					innerWrap.appendChild(bodyIconRows);
					targetNode.appendChild(innerWrap);
					
					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "MenuWidget Failure case");
				});
			}
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});