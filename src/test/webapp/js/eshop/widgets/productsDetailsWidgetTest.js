YUI.add('productsDetailsWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("ProductsDetailsWidgetTest");

		//add test cases
		var testCase = new Y.Test.Case({

			name: "ProductsDetailsWidgetTest",
			"ProductsDetailsWidgetTest with same data": function () {
				var output1, output2, jsonInfo;
			
				var productDetailsNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var productDetailsWidget = new Y.Phresco.ProductDetailsWidget({
					targetNode : productDetailsNode,
					apiReference : eshopAPI
				});
				var phresco = new Y.Phresco.PhrescoWidget();
				var productId =1;
				var config = {web:{web:"images/web/"},supportedCurrencies:["$","Rs"]};
				eshopAPI.set("config", config);
				eshopAPI.getProductDetails(productDetailsWidget, productId, productDetailsWidget);
				this.wait(function(){
					jsonInfo = eshopAPI.get("productDetails");
					productDetailsWidget.createContent(productDetailsNode, jsonInfo)
					output1 = productDetailsWidget.getTargetNode().get('innerHTML');	
			
					var url = eshopAPI.wsURLWithoutContext;
					var config = eshopAPI._getConfigData();
					var webImage = config.web.web;
					var productDetails = jsonInfo.product[0];
					var imageURL = url + webImage + productDetails.image;
					var detailImageURL = url + '/' + webImage + productDetails.image;       
					var youSave = productDetails.listPrice - productDetails.sellPrice;
					
					var targetNode = phresco.createElement('<div></div>');
					var productName = phresco.createElement('<div class="product_name">' + productDetails.name + '</div>');
					
					var pd = phresco.createElement('<div class="cat_listerDetail">');
					var pdUL = phresco.createElement('<ul>');
					var pdLI = phresco.createElement('<li>');

					var pdHolder = phresco.createElement('<div class="cat_listerDetail_borderline">');
					var pdImage = phresco.createElement('<div class="cat_listerDetail_image"><img src="' + detailImageURL + '" border="0" title="image" height="57"/></div>');
					var pdLeftHolder = phresco.createElement('<div class="product_left_div">');
					var pdHead = phresco.createElement('<div class="product_head">');
					var pdReviewCount = phresco.createElement('<div class="review_cont">');
					var pdPriceHolder = phresco.createElement('<div class="product_contleft">');
					var price = phresco.createElement('<p><b>List Price: ' + phresco.getAmount(productDetails.listPrice, false, config.supportedCurrencies) + '</b></p>');
					pdPriceHolder.appendChild(price);

					var sellPrice = phresco.createElement('<p><b>Sell Price: ' + phresco.getAmount(productDetails.sellPrice, false, config.supportedCurrencies) + '</b></p>');
					pdPriceHolder.appendChild(sellPrice);
					
					var ratingDone = false;
					
					for (var j = 0; j < 5; j++) {
						var starImage = 'start.png';
						if (productDetails.rating === j) {
							ratingDone = true;
						}
						if (ratingDone === true) {
							starImage = 'start_dis.png';
						}
						var star = phresco.createElement('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
						pdPriceHolder.appendChild(star);
					}

					pdReviewCount.appendChild(pdPriceHolder);
					pdHead.appendChild(pdReviewCount);
					pdLeftHolder.appendChild(pdHead);

					var btnHolder = phresco.createElement('<div class="review_contright1">');
					var reviewA = Y.Node.create('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a>');
				   
					var addToCartA = Y.Node.create('<a href="#"><img src="images/eshop/add_cart.png" border="0" title="image" /></a>');
					var data = {};
					data.productId = productDetails.id;
					data.name = productDetails.name;
					data.quantity = 1;
					data.price = productDetails.sellPrice;
					data.imageURL = imageURL;
					data.detailImageURL = detailImageURL;
					data.totalPrice = (data.quantity * productDetails.sellPrice);

					btnHolder.appendChild(reviewA);
					btnHolder.appendChild(addToCartA);
					pdLeftHolder.appendChild(btnHolder);

					pdHolder.appendChild(pdImage);
					pdHolder.appendChild(pdLeftHolder);
					
					pdLI.appendChild(pdHolder);
					pdUL.appendChild(pdLI);
					pd.appendChild(pdUL);

					var pdDescHolder = phresco.createElement('<div class="product_details">');
					var pdSpec = phresco.createElement('<div class="product_spec">');
					var pdSpecUL = phresco.createElement('<ul>');
					var pdSpecLI1 = phresco.createElement('<li class="head">Description</li>');
					var pdSpecLI2 = phresco.createElement('<li class="text">' + productDetails.description + '</li>');
					pdSpecUL.appendChild(pdSpecLI1);
					pdSpecUL.appendChild(pdSpecLI2);
					pdSpec.appendChild(pdSpecUL);
					pdDescHolder.appendChild(pdSpec);
					
					var pdAttrHolder = phresco.createElement('<div class="pro_detail">');
					var pdTitle = phresco.createElement('<div class="pro_detail_head">Details</div>');
					var pdSpecDetail = phresco.createElement('<div class="pro_spec_detail">');
					var pdSpecDetailUL = phresco.createElement('<ul>');
					var pdSpecDetailLI1 = phresco.createElement('<li class="left">TV Type</li>');
					var pdSpecDetailLI2 = phresco.createElement('<li class="right">: '+productDetails.details['TV Type']+'</li>');
					var pdSpecDetailLI3 = phresco.createElement('<li class="left">Screen Size</li>');
					var pdSpecDetailLI4 = phresco.createElement('<li class="right">: '+productDetails.details['Screen Size']+'</li>');
					var pdSpecDetailLI5 = phresco.createElement('<li class="left">Screen Ratio </li>');
					var pdSpecDetailLI6 = phresco.createElement('<li class="right">: '+productDetails.details['Screen Ratio']+'</li>');
					var pdSpecDetailLI7 = phresco.createElement('<li class="left">TV definition</li>');
					var pdSpecDetailLI8 = phresco.createElement('<li class="right">: '+productDetails.details['TV Definition']+'</li>');
					pdSpecDetailUL.appendChild(pdSpecDetailLI1);
					pdSpecDetailUL.appendChild(pdSpecDetailLI2);
					pdSpecDetailUL.appendChild(pdSpecDetailLI3);
					pdSpecDetailUL.appendChild(pdSpecDetailLI4);
					pdSpecDetailUL.appendChild(pdSpecDetailLI5);
					pdSpecDetailUL.appendChild(pdSpecDetailLI6);
					pdSpecDetailUL.appendChild(pdSpecDetailLI7);
					pdSpecDetailUL.appendChild(pdSpecDetailLI8);
					pdSpecDetail.appendChild(pdSpecDetailUL);
					pdAttrHolder.appendChild(pdTitle);
					pdAttrHolder.appendChild(pdSpecDetail);
					
					pdDescHolder.appendChild(pdAttrHolder);

					targetNode.appendChild(productName);
					targetNode.appendChild(pd);
					targetNode.appendChild(pdDescHolder);
					output2 = targetNode.get('innerHTML');
					
					Y.Assert.areEqual(output1, output2, "ProductDetailsWidget success case");
				}, 1000);
				
			},
			
			"ProductsDetailsWidgetTest with different data": function () {
				var output1, output2, jsonInfo;
			
				var productDetailsNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var productDetailsWidget = new Y.Phresco.ProductDetailsWidget({
					targetNode : productDetailsNode,
					apiReference : eshopAPI
				});
				var phresco = new Y.Phresco.PhrescoWidget();
				var productId =2;
				var config = {web:{web:"images/web/"},supportedCurrencies:["$","Rs"]};
				eshopAPI.set("config", config);
				eshopAPI.getProductDetails(productDetailsWidget, productId, productDetailsWidget);
				this.wait(function() {
					jsonInfo = eshopAPI.get("productDetails");
					productDetailsWidget.createContent(productDetailsNode, jsonInfo)
					output1 = productDetailsWidget.getTargetNode().get('innerHTML');	
			
					var url = eshopAPI.wsURLWithoutContext;
					var config = eshopAPI._getConfigData();
					var webImage = config.web.web;
					var productDetails = jsonInfo.product[0];
					var imageURL = url + webImage + productDetails.image;
					var detailImageURL = url + '/' + webImage + productDetails.image;       
					var youSave = productDetails.listPrice - productDetails.sellPrice;
					
					var targetNode = phresco.createElement('<div></div>');
					var productName = phresco.createElement('<div class="product_name">' + productDetails.name + '</div>');
					
					var pd = phresco.createElement('<div class="cat_listerDetail">');
					var pdUL = phresco.createElement('<ul>');
					var pdLI = phresco.createElement('<li>');

					var pdHolder = phresco.createElement('<div class="cat_listerDetail_borderline">');
					var pdImage = phresco.createElement('<div class="cat_listerDetail_image"><img src="' + detailImageURL + '" border="0" title="image" height="57"/></div>');
					var pdLeftHolder = phresco.createElement('<div class="product_left_div">');
					var pdHead = phresco.createElement('<div class="product_head">');
					var pdReviewCount = phresco.createElement('<div class="review_cont">');
					var pdPriceHolder = phresco.createElement('<div class="product_contleft">');
					var price = phresco.createElement('<p><b>List Price: ' + phresco.getAmount(productDetails.listPrice, false, config.supportedCurrencies) + '</b></p>');
					pdPriceHolder.appendChild(price);

					var sellPrice = phresco.createElement('<p><b>Sell Price: ' + phresco.getAmount(productDetails.sellPrice, false, config.supportedCurrencies) + '</b></p>');
					pdPriceHolder.appendChild(sellPrice);
					
					var ratingDone = false;
					
					for (var j = 0; j < 5; j++) {
						var starImage = 'start.png';
						if (productDetails.rating === j) {
							ratingDone = true;
						}
						if (ratingDone === true) {
							starImage = 'start_dis.png';
						}
						var star = phresco.createElement('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
						pdPriceHolder.appendChild(star);
					}

					pdReviewCount.appendChild(pdPriceHolder);
					pdHead.appendChild(pdReviewCount);
					pdLeftHolder.appendChild(pdHead);

					var btnHolder = phresco.createElement('<div class="review_contright1">');
					var reviewA = Y.Node.create('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a>');
				   
					var addToCartA = Y.Node.create('<a href="#"><img src="images/eshop/add_cart.png" border="0" title="image" /></a>');
					var data = {};
					data.productId = productDetails.id;
					data.name = productDetails.name;
					data.quantity = 1;
					data.price = productDetails.sellPrice;
					data.imageURL = imageURL;
					data.detailImageURL = detailImageURL;
					data.totalPrice = (data.quantity * productDetails.sellPrice);

					btnHolder.appendChild(reviewA);
					btnHolder.appendChild(addToCartA);
					pdLeftHolder.appendChild(btnHolder);

					pdHolder.appendChild(pdImage);
					pdHolder.appendChild(pdLeftHolder);
					
					pdLI.appendChild(pdHolder);
					pdUL.appendChild(pdLI);
					pd.appendChild(pdUL);

					var pdDescHolder = phresco.createElement('<div class="product_details">');
					var pdSpec = phresco.createElement('<div class="product_spec">');
					var pdSpecUL = phresco.createElement('<ul>');
					var pdSpecLI1 = phresco.createElement('<li class="head">Description</li>');
					var pdSpecLI2 = phresco.createElement('<li class="text">' + productDetails.description + '</li>');
					pdSpecUL.appendChild(pdSpecLI1);
					pdSpecUL.appendChild(pdSpecLI2);
					pdSpec.appendChild(pdSpecUL);
					pdDescHolder.appendChild(pdSpec);
					
					var pdAttrHolder = phresco.createElement('<div class="pro_detail">');
					var pdTitle = phresco.createElement('<div class="pro_detail_head">Details</div>');
					var pdSpecDetail = phresco.createElement('<div class="pro_spec_detail">');
					var pdSpecDetailUL = phresco.createElement('<ul>');
					var pdSpecDetailLI1 = phresco.createElement('<li class="left">TV Type</li>');
					var pdSpecDetailLI2 = phresco.createElement('<li class="right">: '+productDetails.details['TV Type']+'</li>');
					var pdSpecDetailLI3 = phresco.createElement('<li class="left">Screen Size</li>');
					var pdSpecDetailLI4 = phresco.createElement('<li class="right">: '+productDetails.details['Screen Size']+'</li>');
					var pdSpecDetailLI5 = phresco.createElement('<li class="left">Screen Ratio </li>');
					var pdSpecDetailLI6 = phresco.createElement('<li class="right">: '+productDetails.details['Screen Ratio']+'</li>');
					var pdSpecDetailLI7 = phresco.createElement('<li class="left">TV definition</li>');
					var pdSpecDetailLI8 = phresco.createElement('<li class="right">: '+productDetails.details['TV Definition']+'</li>');
					//pdSpecDetailUL.appendChild(pdSpecDetailLI1);
					pdSpecDetailUL.appendChild(pdSpecDetailLI2);
					pdSpecDetailUL.appendChild(pdSpecDetailLI3);
					pdSpecDetailUL.appendChild(pdSpecDetailLI4);
					pdSpecDetailUL.appendChild(pdSpecDetailLI5);
					pdSpecDetailUL.appendChild(pdSpecDetailLI6);
					pdSpecDetailUL.appendChild(pdSpecDetailLI7);
					pdSpecDetailUL.appendChild(pdSpecDetailLI8);
					pdSpecDetail.appendChild(pdSpecDetailUL);
					pdAttrHolder.appendChild(pdTitle);
					pdAttrHolder.appendChild(pdSpecDetail);
					
					pdDescHolder.appendChild(pdAttrHolder);

					targetNode.appendChild(productName);
					targetNode.appendChild(pd);
					targetNode.appendChild(pdDescHolder);
					output2 = targetNode.get('innerHTML');
					
					Y.Assert.areNotEqual(output1, output2, "ProductsDetailsWidget Failure case");
				}, 1000);
				
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});