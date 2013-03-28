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
YUI.add('sliderWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("SliderWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "SliderWidgetTest",
			"SliderWidgetTest with same data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phrescoWidget = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
					var helloNode = Y.Node.create('<div id="container"></div>');
					// instantiate SliderWidget with the HTML
					var sliderWidget = new Y.Phresco.SliderWidget({
						// place holder can be decided by specifying the attribute
						targetNode : helloNode,
						apiReference : eshopapi
				   });
					sliderWidget.render();
					var output1 = sliderWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phrescoWidget.createElement('<div></div>');
						var slider = phrescoWidget.createElement('<div id="slider" class="nivoSlider"/>');
					slider.appendChild('<img style="display: none;" src="images/eshop/promo1.jpg" alt="" title="#htmlcaption-1">');
					slider.appendChild('<img style="display: none;" src="images/eshop/promo2.jpg" alt="" title="#htmlcaption-2">');
					
					var htmlCaption1 = phrescoWidget.createElement('<div id="htmlcaption-1" class="nivo-html-caption">');
					htmlCaption1.appendChild('<h5 class="p2">Welcome to the our E-Shop</h5>');
					htmlCaption1.appendChild('<p>100% Successive Product</p>');

					var htmlCaption2 = phrescoWidget.createElement('<div id="htmlcaption-2" class="nivo-html-caption">');
					htmlCaption2.appendChild('<h5 class="p2">This is promo area</h5>');
					htmlCaption2.appendChild('<p>Put any description here</p>');

					targetNode.appendChild(slider);
					targetNode.appendChild(htmlCaption1);
					targetNode.appendChild(htmlCaption2);

					var output2 = targetNode.get('innerHTML');
				
					Y.Assert.areEqual(output1, output2, "SliderWidget Success case");
				});
			},
				
				"SliderWidgetTest with different data": function () {
					wsConfig.getWsConfig(function(response){
						var eshopapi = new Y.Phresco.EShopAPI(response);
						var phrescoWidget = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
						var helloNode = Y.Node.create('<div id="container"></div>');
						// instantiate SliderWidget with the HTML
						var sliderWidget = new Y.Phresco.SliderWidget({
							// place holder can be decided by specifying the attribute
							targetNode : helloNode,
							apiReference : eshopapi
					   });
						sliderWidget.render();
						var output1 = sliderWidget.getTargetNode().get('innerHTML');
						
						var targetNode = phrescoWidget.createElement('<div></div>');
							var slider = phrescoWidget.createElement('<div id="slider" class="nivoSlider"/>');
						slider.appendChild('<img style="display: none;" src="images/eshop/promo1.jpg" alt="" title="#htmlcaption-1">');
						slider.appendChild('<img style="display: none;" src="images/eshop/promo2.jpg" alt="" title="#htmlcaption-2">');
						
						var htmlCaption1 = phrescoWidget.createElement('<div id="htmlcaption-1" class="nivo-html-caption1">');
						htmlCaption1.appendChild('<h5 class="p2">Welcome to the our E-Shop</h5>');
						htmlCaption1.appendChild('<p>100% Successive Product</p>');

						var htmlCaption2 = phrescoWidget.createElement('<div id="htmlcaption-2" class="nivo-html-caption">');
						htmlCaption2.appendChild('<h5 class="p2">This is promo area</h5>');
						htmlCaption2.appendChild('<p>Put any description here</p>');

						targetNode.appendChild(slider);
						targetNode.appendChild(htmlCaption1);
						targetNode.appendChild(htmlCaption2);

						var output2 = targetNode.get('innerHTML');
					
						Y.Assert.areNotEqual(output1, output2, "SliderWidget Failure case");
					});
				}
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});