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
YUI.add('footerWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("FooterWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "FooterWidgetTest",
			"FooterWidgetTest with same data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var footerNode = Y.Node.create('<div id="container"></div>');
					// instantiate NavigationWidget with the HTML
					var footerWidget = new Y.Phresco.FooterWidget({
						// place holder can be decided by specifying the attribute
						targetNode : footerNode,
						apiReference : eshopapi
				   });
					footerWidget.render();
					var output1 = footerWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var footerContainer = phrescoWidget.createElement('<div id="container-foot" class="footer">');

							var ul = phrescoWidget.createElement('<ul>');
								var homeLI = Y.Node.create('<li class="home"></li>');
									homeLI.obj = phrescoWidget;
									Y.on('click' , phrescoWidget.showHome , homeLI);

								var browseLI = Y.Node.create('<li class="browse" ></li>');
									browseLI.obj = phrescoWidget;
									browseLI.id= 'browse-tab';
									Y.on('click' , phrescoWidget.showCategories , browseLI);

								var specialOffersLI = Y.Node.create('<li class="spl_offer"></li>');
									specialOffersLI.obj = phrescoWidget; 
									specialOffersLI.id= 'special-tab';
									Y.on('click' , phrescoWidget.showTab , specialOffersLI);

								var myCartLI = Y.Node.create('<li class="mycart"></li>');
									myCartLI.obj = phrescoWidget;
									myCartLI.id = 'cart-tab';
									Y.on('click' , phrescoWidget.showMyshoppingcart, myCartLI);

								var moreLI = phrescoWidget.createElement('<li class="more"></li>');

								ul.appendChild(homeLI);
								ul.appendChild(browseLI);
								ul.appendChild(specialOffersLI);
								ul.appendChild(myCartLI);
								ul.appendChild(moreLI);

							footerContainer.appendChild(ul);
					targetNode.appendChild(footerContainer);
					
					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areEqual(output1, output2, "FooterWidget Success case");
				});
			},
			
			"FooterWidgetTest with different data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var helloNode = Y.Node.create('<div id="container"></div>');
					// instantiate NavigationWidget with the HTML
					var footerWidget = new Y.Phresco.FooterWidget({
						// place holder can be decided by specifying the attribute
						targetNode : helloNode,
						apiReference : eshopapi
				   });
					footerWidget.render();
					var output1 = footerWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var footerContainer = phrescoWidget.createElement('<div id="container-foot" class="footer">');

							var ul = phrescoWidget.createElement('<ul>');
								var homeLI = Y.Node.create('<li class="home"></li>');
									homeLI.obj = phrescoWidget;
									Y.on('click' , phrescoWidget.showHome , homeLI);

								var browseLI = Y.Node.create('<li class="browse" ></li>');
									browseLI.obj = phrescoWidget;
									browseLI.id= 'browse-tab';
									Y.on('click' , phrescoWidget.showCategories , browseLI);

								var specialOffersLI = Y.Node.create('<li class="spl_offer1"></li>');
									specialOffersLI.obj = phrescoWidget; 
									specialOffersLI.id= 'special-tab';
									Y.on('click' , phrescoWidget.showTab , specialOffersLI);

								var myCartLI = Y.Node.create('<li class="mycart"></li>');
									myCartLI.obj = phrescoWidget;
									myCartLI.id = 'cart-tab';
									Y.on('click' , phrescoWidget.showMyshoppingcart, myCartLI);

								var moreLI = phrescoWidget.createElement('<li class="more"></li>');

								ul.appendChild(homeLI);
								ul.appendChild(browseLI);
								ul.appendChild(specialOffersLI);
								ul.appendChild(myCartLI);
								ul.appendChild(moreLI);

							footerContainer.appendChild(ul);
					targetNode.appendChild(footerContainer);
					
					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "FooterWidget Failure case");
				});
			}
		});
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});