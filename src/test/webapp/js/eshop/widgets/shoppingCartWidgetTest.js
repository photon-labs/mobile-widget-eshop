YUI.add('shoppingCartWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("ShoppingCartWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "ShoppingCartWidgetTest",
			"ShoppingCartWidget same data unit test case": function () {
				var output1, output2;
			
				var shoppingCartNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
				var eshopAPI = new Y.Phresco.EShopAPI(response);
					var shoppingWidget = new Y.Phresco.ShoppingCartWidget({
						targetNode : shoppingCartNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					shoppingcard_data = {productDetail:[{detailImageURL:"product/lg_tv_1.png", image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{detailImageURL:"product/lg_tv_1.png", image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}]};
					eshopAPI.set("productQty", shoppingcard_data);
					shoppingWidget.render();
					output1 = shoppingWidget.getTargetNode().get('innerHTML');
					
					var productQty = eshopAPI.get("productQty");
					var productDetails = productQty.productDetail;
					if(productQty.quantity){
						var quantity = productQty.quantity;
					}    
					else {
						var quantity = 1;
					} 
					
					var totalItem = productQty.totalItem;
					
					var targetNode = phresco.createElement('<div></div>');
					var myCart = phresco.createElement('<div class="mycart_div">');
					var myCartHead = phresco.createElement('<div class="product_name">My Shopping Cart</div>');
					myCart.appendChild(myCartHead);
					
					var productTotal = 0; 
					var subTotal = 0;
					for (var j = 0; j < productDetails.length; j++) {
						var mycart_quality_div = Y.Node.create('<div class="mycart_quality_div">');
							var mycart_qua_div = phresco.createElement('<div class="mycart_qua_div">');
								var mycart_borderline = phresco.createElement('<div class="mycart_borderline">');
									var cartImage = phresco.createElement('<div class="cat_listerDetail_image"><img src="'+productDetails[j].detailImageURL+'" border="0" alt="image" /></div>');
									var product_left_div = phresco.createElement('<div class="product_left_div">');
										var product_head = phresco.createElement('<div class="product_head">');
											var review_cont = phresco.createElement('<div class="review_cont">');
												var product_contleft =  phresco.createElement('<div class="product_contleft"><p><b>'+productDetails[j].name+'</b></p></div>');
												var quality_div =  phresco.createElement('<div class="quality_div">');
													var mycart_remove_bu =  phresco.createElement('<div class="mycart_remove_bu">');
														var mycart_remove =  Y.Node.create('<div class="mycart_remove"><a href="#">Remove</a></div>');
														mycart_remove_bu.appendChild(mycart_remove);
												
													var mycart_quality =  phresco.createElement('<span class="mycart_quality">Quantity : '+productDetails[j].quantity+'</span>');
													var mycart_size =  Y.Node.create('<input type="text" size="2" value="'+productDetails[j].quantity+'" name="productQuantity_'+productDetails[j].productId+'" autofocus="autofocus" id="productQuantity_'+productDetails[j].productId+'" />');
														mycart_size.data = 'productQuantity_'+productDetails[j].productId;
														mycart_size.productId = productDetails[j].productId;
														quality_div.appendChild(mycart_quality);
												quality_div.appendChild(mycart_size);
												quality_div.appendChild(mycart_remove_bu);
												var mycart_price_div =  phresco.createElement('<div class="mycart_price_div">');
													var mycart_price =  phresco.createElement('<span class="mycart_price">Price: $' +productDetails[j].price+'</span>');
												mycart_price_div.appendChild(mycart_price);
											
											review_cont.appendChild(product_contleft);
											review_cont.appendChild(quality_div);
											review_cont.appendChild(mycart_price_div);
										product_head.appendChild(review_cont);  
									product_left_div.appendChild(product_head); 
						
							mycart_borderline.appendChild(cartImage);
							mycart_borderline.appendChild(product_left_div);
							mycart_qua_div.appendChild(mycart_borderline);
						
						mycart_quality_div.appendChild(mycart_qua_div);
						myCart.appendChild(mycart_quality_div);
						subTotal = (Number(subTotal) + (Number(productDetails[j].quantity) * Number(productDetails[j].price)));
					}

					var mycart_subtotal =  phresco.createElement('<div class="mycart_subtotal">Subtotal: $ <span id="subTotal">'+subTotal+'</span></div>');
					var mycart_btn =  phresco.createElement('<div class="mycart_btn">');
					var mycart_update_view_bu =  phresco.createElement('<div class="mycart_update_view_bu">');
					var mycart_mid_bu =  Y.Node.create('<div class="mycart_mid_bu"><a href="#">Update Cart</a></div>');

						mycart_update_view_bu.appendChild(mycart_mid_bu);

					var mycart_update_view_bu1 =  phresco.createElement('<div class="mycart_update_view_bu">');
					var mycart_mid_bu1 =  Y.Node.create('<div class="mycart_mid_bu"><a href="#">Check Out</a></div>');
					
						mycart_update_view_bu1.appendChild(mycart_mid_bu1);
					var clearDiv =  phresco.createElement('<div style="clear:both"></div>');
					
					if(subTotal > 0){
						mycart_btn.appendChild(mycart_update_view_bu);
						mycart_btn.appendChild(mycart_update_view_bu1);
					}   
						mycart_btn.appendChild(clearDiv);
						
					
					myCart.appendChild(mycart_subtotal);
					myCart.appendChild(mycart_btn);
					
					targetNode.appendChild(myCart);
					output2 = targetNode.get('innerHTML');		
				
					Y.Assert.areEqual(output1, output2, "ShoppingCartWidget Success case");
				});
			},
			
			"ShoppingCartWidget different data unit test case": function () {
				var output1, output2;
			
				var shoppingCartNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var shoppingCartWidget = new Y.Phresco.ShoppingCartWidget({
						targetNode : shoppingCartNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					shoppingcard_data = {productDetail:[{detailImageURL:"product/lg_tv_1.png", image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}]};
					eshopAPI.set("productQty", shoppingcard_data);
					shoppingCartWidget.render();
					output1 = shoppingCartWidget.getTargetNode().get('innerHTML');
					
					var productQty = {productDetail:[{detailImageURL:"product/apple_mobile_21.png", image : "product/apple_mobile_21.png",name:"Apple iPhone 4", productId : 21, quantity : 1, price: 685},{detailImageURL:"product/acer_tablet_51.png", image : "product/acer_tablet_51.png", name:"Acer 16GB Iconia Tab A500 10.1` Multi-Touch Screen Tablet", productId : 51, quantity : 1, price: 349.99}]};
					var productDetails = productQty.productDetail;
					if(productQty.quantity){
						var quantity = productQty.quantity;
					}    
					else {
						var quantity = 1;
					} 
					
					var totalItem = productQty.totalItem;
					
					var targetNode = phresco.createElement('<div></div>');
					var myCart = phresco.createElement('<div class="mycart_div">');
					var myCartHead = phresco.createElement('<div class="product_name">My Shopping Cart</div>');
					myCart.appendChild(myCartHead);
					
					var productTotal = 0; 
					var subTotal = 0;
					for (var j = 0; j < productDetails.length; j++) {
						var mycart_quality_div = Y.Node.create('<div class="mycart_quality_div">');
							var mycart_qua_div = phresco.createElement('<div class="mycart_qua_div">');
								var mycart_borderline = phresco.createElement('<div class="mycart_borderline">');
									var cartImage = phresco.createElement('<div class="cat_listerDetail_image"><img src="'+productDetails[j].detailImageURL+'" border="0" alt="image" /></div>');
									var product_left_div = phresco.createElement('<div class="product_left_div">');
										var product_head = phresco.createElement('<div class="product_head">');
											var review_cont = phresco.createElement('<div class="review_cont">');
												var product_contleft =  phresco.createElement('<div class="product_contleft"><p><b>'+productDetails[j].name+'</b></p></div>');
												var quality_div =  phresco.createElement('<div class="quality_div">');
													var mycart_remove_bu =  phresco.createElement('<div class="mycart_remove_bu">');
														var mycart_remove =  Y.Node.create('<div class="mycart_remove"><a href="#">Remove</a></div>');
														mycart_remove_bu.appendChild(mycart_remove);
												
													var mycart_quality =  phresco.createElement('<span class="mycart_quality">Quantity : '+productDetails[j].quantity+'</span>');
													var mycart_size =  Y.Node.create('<input type="text" size="2" value="'+productDetails[j].quantity+'" name="productQuantity_'+productDetails[j].productId+'" autofocus="autofocus" id="productQuantity_'+productDetails[j].productId+'" />');
														mycart_size.data = 'productQuantity_'+productDetails[j].productId;
														mycart_size.productId = productDetails[j].productId;
														quality_div.appendChild(mycart_quality);
												quality_div.appendChild(mycart_size);
												quality_div.appendChild(mycart_remove_bu);
												var mycart_price_div =  phresco.createElement('<div class="mycart_price_div">');
													var mycart_price =  phresco.createElement('<span class="mycart_price">Price: $' +productDetails[j].price+'</span>');
												mycart_price_div.appendChild(mycart_price);
											
											review_cont.appendChild(product_contleft);
											review_cont.appendChild(quality_div);
											review_cont.appendChild(mycart_price_div);
										product_head.appendChild(review_cont);  
									product_left_div.appendChild(product_head); 
						
							mycart_borderline.appendChild(cartImage);
							mycart_borderline.appendChild(product_left_div);
							mycart_qua_div.appendChild(mycart_borderline);
						
						mycart_quality_div.appendChild(mycart_qua_div);
						myCart.appendChild(mycart_quality_div);
						subTotal = (Number(subTotal) + (Number(productDetails[j].quantity) * Number(productDetails[j].price)));
					}

					var mycart_subtotal =  phresco.createElement('<div class="mycart_subtotal">Subtotal: $ <span id="subTotal">'+subTotal+'</span></div>');
					var mycart_btn =  phresco.createElement('<div class="mycart_btn">');
					var mycart_update_view_bu =  phresco.createElement('<div class="mycart_update_view_bu">');
					var mycart_mid_bu =  Y.Node.create('<div class="mycart_mid_bu"><a href="#">Update Cart</a></div>');

						mycart_update_view_bu.appendChild(mycart_mid_bu);

					var mycart_update_view_bu1 =  phresco.createElement('<div class="mycart_update_view_bu">');
					var mycart_mid_bu1 =  Y.Node.create('<div class="mycart_mid_bu"><a href="#">Check Out</a></div>');
					
						mycart_update_view_bu1.appendChild(mycart_mid_bu1);
					var clearDiv =  phresco.createElement('<div style="clear:both"></div>');
					
					if(subTotal > 0){
						mycart_btn.appendChild(mycart_update_view_bu);
						mycart_btn.appendChild(mycart_update_view_bu1);
					}   
						mycart_btn.appendChild(clearDiv);
						
					
					myCart.appendChild(mycart_subtotal);
					myCart.appendChild(mycart_btn);
					
					targetNode.appendChild(myCart);
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "ShoppingCartWidget Failure case");
				});
			},
			
			"ShoppingCartWidget different length data unit test case": function () {
				var output1, output2;
			
				var shoppingCartNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var shoppingWidget = new Y.Phresco.ShoppingCartWidget({
						targetNode : shoppingCartNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					shoppingcard_data = {productDetail:[{detailImageURL:"product/lg_tv_1.png", image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{detailImageURL:"product/lg_tv_1.png", image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}]};
					eshopAPI.set("productQty", shoppingcard_data);
					shoppingWidget.render();
					output1 = shoppingWidget.getTargetNode().get('innerHTML');
					
					var productQty = eshopAPI.get("productQty");
					var productDetails = productQty.productDetail;
					if(productQty.quantity){
						var quantity = productQty.quantity;
					}    
					else {
						var quantity = 1;
					} 
					
					var totalItem = productQty.totalItem;
					
					var targetNode = phresco.createElement('<div></div>');
					var myCart = phresco.createElement('<div class="mycart_div">');
					var myCartHead = phresco.createElement('<div class="product_name">My Shopping Cart</div>');
					myCart.appendChild(myCartHead);
					
					var productTotal = 0; 
					var subTotal = 0;
					for (var j = 0; j < 1; j++) {
						var mycart_quality_div = Y.Node.create('<div class="mycart_quality_div">');
							var mycart_qua_div = phresco.createElement('<div class="mycart_qua_div">');
								var mycart_borderline = phresco.createElement('<div class="mycart_borderline">');
									var cartImage = phresco.createElement('<div class="cat_listerDetail_image"><img src="'+productDetails[j].detailImageURL+'" border="0" alt="image" /></div>');
									var product_left_div = phresco.createElement('<div class="product_left_div">');
										var product_head = phresco.createElement('<div class="product_head">');
											var review_cont = phresco.createElement('<div class="review_cont">');
												var product_contleft =  phresco.createElement('<div class="product_contleft"><p><b>'+productDetails[j].name+'</b></p></div>');
												var quality_div =  phresco.createElement('<div class="quality_div">');
													var mycart_remove_bu =  phresco.createElement('<div class="mycart_remove_bu">');
														var mycart_remove =  Y.Node.create('<div class="mycart_remove"><a href="#">Remove</a></div>');
														mycart_remove_bu.appendChild(mycart_remove);
												
													var mycart_quality =  phresco.createElement('<span class="mycart_quality">Quantity : '+productDetails[j].quantity+'</span>');
													var mycart_size =  Y.Node.create('<input type="text" size="2" value="'+productDetails[j].quantity+'" name="productQuantity_'+productDetails[j].productId+'" autofocus="autofocus" id="productQuantity_'+productDetails[j].productId+'" />');
														mycart_size.data = 'productQuantity_'+productDetails[j].productId;
														mycart_size.productId = productDetails[j].productId;
														quality_div.appendChild(mycart_quality);
												quality_div.appendChild(mycart_size);
												quality_div.appendChild(mycart_remove_bu);
												var mycart_price_div =  phresco.createElement('<div class="mycart_price_div">');
													var mycart_price =  phresco.createElement('<span class="mycart_price">Price: $' +productDetails[j].price+'</span>');
												mycart_price_div.appendChild(mycart_price);
											
											review_cont.appendChild(product_contleft);
											review_cont.appendChild(quality_div);
											review_cont.appendChild(mycart_price_div);
										product_head.appendChild(review_cont);  
									product_left_div.appendChild(product_head); 
						
							mycart_borderline.appendChild(cartImage);
							mycart_borderline.appendChild(product_left_div);
							mycart_qua_div.appendChild(mycart_borderline);
						
						mycart_quality_div.appendChild(mycart_qua_div);
						myCart.appendChild(mycart_quality_div);
						subTotal = (Number(subTotal) + (Number(productDetails[j].quantity) * Number(productDetails[j].price)));
					}

					var mycart_subtotal =  phresco.createElement('<div class="mycart_subtotal">Subtotal: $ <span id="subTotal">'+subTotal+'</span></div>');
					var mycart_btn =  phresco.createElement('<div class="mycart_btn">');
					var mycart_update_view_bu =  phresco.createElement('<div class="mycart_update_view_bu">');
					var mycart_mid_bu =  Y.Node.create('<div class="mycart_mid_bu"><a href="#">Update Cart</a></div>');

						mycart_update_view_bu.appendChild(mycart_mid_bu);

					var mycart_update_view_bu1 =  phresco.createElement('<div class="mycart_update_view_bu">');
					var mycart_mid_bu1 =  Y.Node.create('<div class="mycart_mid_bu"><a href="#">Check Out</a></div>');
					
						mycart_update_view_bu1.appendChild(mycart_mid_bu1);
					var clearDiv =  phresco.createElement('<div style="clear:both"></div>');
					
					if(subTotal > 0){
						mycart_btn.appendChild(mycart_update_view_bu);
						mycart_btn.appendChild(mycart_update_view_bu1);
					}   
						mycart_btn.appendChild(clearDiv);
						
					
					myCart.appendChild(mycart_subtotal);
					myCart.appendChild(mycart_btn);
					
					targetNode.appendChild(myCart);
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "ShoppingCartWidget Failure case");
				});
			}
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});