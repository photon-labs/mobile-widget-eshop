YUI.add('sliderWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("SliderWidgetTest");

		//add test cases
		var testCase = new Y.Test.Case({

			name: "SliderWidgetTest",
			"SliderWidgetTest with same data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
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
			},
			
			"SliderWidgetTest with different data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
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
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});