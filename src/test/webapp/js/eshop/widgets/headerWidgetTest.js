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
YUI.add('headerWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("HeaderWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "HeaderWidgetTest",
			"HeaderWidgetTest with same data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
					var headerNode = Y.Node.create('<div id="container"></div>');
					// instantiate HeaderWidget with the HTML
					var headerWidget = new Y.Phresco.HeaderWidget({
						// place holder can be decided by specifying the attribute
						targetNode : headerNode,
						apiReference : eshopapi
				   });
					headerWidget.render();
					var output1 = headerWidget.getTargetNode().get('innerHTML');
					
					var userId = 0;
					var targetNode = phrescoWidget.createElement('<div></div>');
				
					var headerInner = phrescoWidget.createElement('<div class="headerInner">');
					var btnContainer = phrescoWidget.createElement('<div class="btn_container">');

					var backBtn = Y.Node.create('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Back</p></div></a>');
					backBtn.obj = phrescoWidget;
					Y.on('click' , phrescoWidget.showBackPage , backBtn);

					btnContainer.appendChild(backBtn);
					var logo = phrescoWidget.createElement('<div class="logo"><img src="images/eshop/logo.png" alt="image" />');
					headerInner.appendChild(btnContainer);
					headerInner.appendChild(logo);
					if(userId > 0){
						var btnContainer1 = phrescoWidget.createElement('<div class="btn_container1">');
						var backBtn1 = Y.Node.create('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Logout</p></div></a>');
						backBtn1.obj = phrescoWidget;
						Y.on('click' , phrescoWidget.doLogout , backBtn1);
						btnContainer1.appendChild(backBtn1);
						headerInner.appendChild(btnContainer1);
					}
				
					targetNode.appendChild(headerInner);
						
					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areEqual(output1, output2, "HeaderWidget Success case");
				});
			},
			
			"HeaderWidgetTest with different data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
						 var eshopapi = new Y.Phresco.EShopAPI(response);
						var phrescoWidget = new Y.Phresco.PhrescoWidget(response);
						var helloNode = Y.Node.create('<div id="container"></div>');
						// instantiate HeaderWidget with the HTML
						var headerWidget = new Y.Phresco.HeaderWidget({
							// place holder can be decided by specifying the attribute
							targetNode : helloNode,
							apiReference : eshopapi
					   });
						headerWidget.render();
						var output1 = headerWidget.getTargetNode().get('innerHTML');
						
						var userId = 0;
						var targetNode = phrescoWidget.createElement('<div></div>');
					
						var headerInner = phrescoWidget.createElement('<div class="headerInner">');
						var btnContainer = phrescoWidget.createElement('<div class="btn_container">');

						var backBtn = Y.Node.create('<a href="javascript:void(0);"><div class="btn1"><div><span></span></div><p>Back</p></div></a>');
						backBtn.obj = phrescoWidget;
						Y.on('click' , phrescoWidget.showBackPage , backBtn);

						btnContainer.appendChild(backBtn);
						var logo = phrescoWidget.createElement('<div class="logo"><img src="images/eshop/logo.png" alt="image" />');
						headerInner.appendChild(btnContainer);
						headerInner.appendChild(logo);
						if(userId > 0){
							var btnContainer1 = phrescoWidget.createElement('<div class="btn_container1">');
							var backBtn1 = Y.Node.create('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Logout</p></div></a>');
							backBtn1.obj = phrescoWidget;
							Y.on('click' , phrescoWidget.doLogout , backBtn1);
							btnContainer1.appendChild(backBtn1);
							headerInner.appendChild(btnContainer1);
						}
					
						targetNode.appendChild(headerInner);
							
						var output2 = targetNode.get('innerHTML');
					
						Y.Assert.areNotEqual(output1, output2, "HeaderWidget Failure case");
				});
			}
 		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});