YUI.add('productsWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("productsWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var configuration = undefined;
		
		var AsyncTestCase = new Y.Test.Case({
			name: "ProductsWidgetTest",
			"ProductsWidgetTest with same data": function () {
				var output1, output2, jsonInfo;
			
				var productsNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					configuration = response;
				});
				this.wait(function(){
					var eshopAPI = new Y.Phresco.EShopAPI(configuration);
					var productsWidget = new Y.Phresco.ProductsWidget({
						targetNode : productsNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var categoryId =1;
					var config = {web:{web:"images/web/"},supportedCurrencies:["$","Rs"]};
					eshopAPI.set("config", config);
					eshopAPI.getProducts(productsWidget, categoryId, productsWidget, function(jsonInfo){
					
					productsWidget.createContent(productsNode, jsonInfo)
					output1 = productsWidget.getTargetNode().get('innerHTML');	
					
					var url = eshopAPI.wsURLWithoutContext;
					var config = eshopAPI._getConfigData();
					var webImage = config.web.web;
					var targetNode = phresco.createElement('<div></div>');
					var productsList = phresco.createElement('<div class="cat_listerDetail">');
					var newProductsUL = phresco.createElement('<ul>');

					for (i = 0; i < jsonInfo.product.length; i++) {
						var product = jsonInfo.product[i];
						var imageURL = url + '/' + webImage + product.image;
						var li = phresco.createElement('<li>');

						var productsHolder = phresco.createElement('<div class="cat_listerDetail_bg">');
						var productImage = Y.Node.create('<div class="cat_listerDetail_image"><a href="javascript:void(0);"><img src="' + imageURL + '" border="0" title="image" width="78" height"40"/></a></div>');
						var productName = Y.Node.create('<div class="cat_listerDetail_imagetxt"><h3><a href="javascript:void(0);">' + product.name + '</a></h3>');

						
						var reviewDiv = phresco.createElement('<div class="cat_listerDetail_imagetxt">');
						var reviewHolder = phresco.createElement('<div class="review_cont">');
						var reviewContent = phresco.createElement('<div class="review_contleft">');
						var price = phresco.createElement('<p>' + phresco.getAmount(product.listPrice, false, config.supportedCurrencies) + '</p>');
						reviewContent.appendChild(price);
						
						var arrow = Y.Node.create('<div class="arrow"><a href="javascript:void(0);"><img src="images/eshop/arrow.png" border="0" title="image" /></a></div>');
						var ratingDone = false;
						

						for (var j = 0; j < 5; j++) {
							var starImage = 'start.png';
							if (product.rating === j) {
								ratingDone = true;
							}
							if (ratingDone === true) {
								starImage = 'start_dis.png';
							}
							var star = phresco.createElement('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
							reviewContent.appendChild(star);
						}

						var reviewButtonDiv = phresco.createElement('<div class="review_contright">');
						var reviewButton = Y.Node.create('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a></div>');

						reviewButtonDiv.appendChild(reviewButton);
						
						reviewHolder.appendChild(reviewContent);
						reviewHolder.appendChild(reviewButtonDiv);
						
						reviewDiv.appendChild(reviewHolder);
						productsHolder.appendChild(productImage);
						productsHolder.appendChild(productName);
						productsHolder.appendChild(reviewDiv);
						productsHolder.appendChild(arrow);

						li.appendChild(productsHolder);
						newProductsUL.appendChild(li);
					} 
					
					if (jsonInfo.length === 0) {
						var productsUnavailable = phresco.createElement('<span>No products available</span>');        
						targetNode.appendChild(productsUnavailable);
					} else {
						productsList.appendChild(newProductsUL);
						targetNode.appendChild(productsList);
					}
					output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "Produsts success");
				});
			
			}, 800);
			
			
			} ,
			
			"ProductsWidgetTest with different data": function () {
				var output1, output2, jsonInfo;
			
				var productsNode = Y.Node.create('<div></div>');
				
				wsConfig.getWsConfig(function(response){
					configuration = response;
				});
			
				this.wait(function(){
					var eshopAPI = new Y.Phresco.EShopAPI(configuration);
					var productsWidget = new Y.Phresco.ProductsWidget({
						targetNode : productsNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var categoryId =1;
					var config = {web:{web:"images/web/"},supportedCurrencies:["$","Rs"]};
					eshopAPI.set("config", config);
					eshopAPI.getProducts(productsWidget, categoryId, productsWidget, function(jsonInfo){
					
						productsWidget.createContent(productsNode, jsonInfo)
						output1 = productsWidget.getTargetNode().get('innerHTML');	
						
						var url = eshopAPI.wsURLWithoutContext;
						var config = eshopAPI._getConfigData();
						var webImage = config.web.web;
						var targetNode = phresco.createElement('<div></div>');
						var productsList = phresco.createElement('<div class="cat_listerDetail">');
						var newProductsUL = phresco.createElement('<ul>');

						for (i = 0; i < 9; i++) {
							var product = jsonInfo.product[i];
							var imageURL = url + '/' + webImage + product.image;
							var li = phresco.createElement('<li>');

							var productsHolder = phresco.createElement('<div class="cat_listerDetail_bg">');
							var productImage = Y.Node.create('<div class="cat_listerDetail_image"><a href="javascript:void(0);"><img src="' + imageURL + '" border="0" title="image" width="78" height"40"/></a></div>');
							var productName = Y.Node.create('<div class="cat_listerDetail_imagetxt"><h3><a href="javascript:void(0);">' + product.name + '</a></h3>');

							
							var reviewDiv = phresco.createElement('<div class="cat_listerDetail_imagetxt">');
							var reviewHolder = phresco.createElement('<div class="review_cont">');
							var reviewContent = phresco.createElement('<div class="review_contleft">');
							var price = phresco.createElement('<p>' + phresco.getAmount(product.listPrice, false, config.supportedCurrencies) + '</p>');
							reviewContent.appendChild(price);
							
							var arrow = Y.Node.create('<div class="arrow"><a href="javascript:void(0);"><img src="images/eshop/arrow.png" border="0" title="image" /></a></div>');
							var ratingDone = false;
							

							for (var j = 0; j < 5; j++) {
								var starImage = 'start.png';
								if (product.rating === j) {
									ratingDone = true;
								}
								if (ratingDone === true) {
									starImage = 'start_dis.png';
								}
								var star = phresco.createElement('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
								reviewContent.appendChild(star);
							}

							var reviewButtonDiv = phresco.createElement('<div class="review_contright">');
							var reviewButton = Y.Node.create('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a></div>');

							reviewButtonDiv.appendChild(reviewButton);
							
							reviewHolder.appendChild(reviewContent);
							reviewHolder.appendChild(reviewButtonDiv);
							
							reviewDiv.appendChild(reviewHolder);
							productsHolder.appendChild(productImage);
							productsHolder.appendChild(productName);
							productsHolder.appendChild(reviewDiv);
							productsHolder.appendChild(arrow);

							li.appendChild(productsHolder);
							newProductsUL.appendChild(li);
						} 
						
						if (jsonInfo.length === 0) {
							var productsUnavailable = phresco.createElement('<span>No products available</span>');        
							targetNode.appendChild(productsUnavailable);
						} else {
							productsList.appendChild(newProductsUL);
							targetNode.appendChild(productsList);
						}
						output2 = targetNode.get('innerHTML');
						Y.Assert.areNotEqual(output1, output2, "Produsts Failure");
						});
					}, 800);
				} 
			
		});
		suite.add(AsyncTestCase);
		Y.Test.Runner.add(suite);
		
	});