YUI.add('categoryWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("categoryWidgetTest");
		//add test cases
		var AsyncTestCase = new Y.Test.Case({

			name: "CategoryWidgetTest",
			"CategoryWidgetTest with same data": function () {
				var output1, output2, jsonInfo;
				var categoryNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var categoryWidget = new Y.Phresco.CategoryWidget({
					targetNode : categoryNode,
					apiReference : eshopAPI
				});
				var phresco = new Y.Phresco.PhrescoWidget();
				var config = {imagePath:{mobile:"images/mobile/"}};
				eshopAPI.set("config", config);
				
				eshopAPI.getCategories(categoryWidget);
				this.wait(function(){
					jsonInfo = eshopAPI.get("categories");
					categoryWidget.createContent(categoryNode, jsonInfo)
					output1 = categoryWidget.getTargetNode().get('innerHTML');
					
					if (jsonInfo != null) {
						var url = eshopAPI.wsURLWithoutContext;
						var config = eshopAPI._getConfigData();
						var webImage = config.imagePath.mobile;
						
						var targetNode = phresco.createElement('<div></div>');
						var categoryList = phresco.createElement('<div class="cat_lister">');
						var navUL = phresco.createElement('<ul>');

						for (var i = 0; i < jsonInfo.category.length; i++) {
							var category = jsonInfo.category[i];
							var imageURL = url + '/' + webImage + category.image;
							var navLI = phresco.createElement('<li>');
							//var navLIA = Y.Node.create('<span id=' + category['id'] + '"><a id="displayProducts" href="javascript:void(0);">' + category['name'] + '</a></span>');
							var navLIA = Y.Node.create('<a href="#"><span class="listicon"><img src="' + imageURL + '" title="image" border="0"  /></span><span class="listicontext">' + category['name'] + '<span> (' + category.productCount + ')</span></span></a>');
							
							navLI.appendChild(navLIA);
							navUL.appendChild(navLI);
						}
						
						//divMore.appendChild(moreUL);
						categoryList.appendChild(navUL);
						targetNode.appendChild(categoryList);
					}
					output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "Category success");
				}, 500);
			},
			
			"CategoryWidgetTest with different data": function () {
				var output1, output2, jsonInfo;
				var categoryNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var categoryWidget = new Y.Phresco.CategoryWidget({
					targetNode : categoryNode,
					apiReference : eshopAPI
				});
				var phresco = new Y.Phresco.PhrescoWidget();
				var config = {imagePath:{mobile:"images/mobile/"}};
				eshopAPI.set("config", config);
				
				eshopAPI.getCategories(categoryWidget);
				this.wait(function(){
					jsonInfo = eshopAPI.get("categories");
					categoryWidget.createContent(categoryNode, jsonInfo)
					output1 = categoryWidget.getTargetNode().get('innerHTML');
					
					if (jsonInfo != null) {
						var url = eshopAPI.wsURLWithoutContext;
						var config = eshopAPI._getConfigData();
						var webImage = config.imagePath.mobile;
						
						var targetNode = phresco.createElement('<div></div>');
						var categoryList = phresco.createElement('<div class="cat_lister">');
						var navUL = phresco.createElement('<ul>');

						for (var i = 0; i < 9; i++) {
							var category = jsonInfo.category[i];
							var imageURL = url + '/' + webImage + category.image;
							var navLI = phresco.createElement('<li>');
							//var navLIA = Y.Node.create('<span id=' + category['id'] + '"><a id="displayProducts" href="javascript:void(0);">' + category['name'] + '</a></span>');
							var navLIA = Y.Node.create('<a href="#"><span class="listicon"><img src="' + imageURL + '" title="image" border="0"  /></span><span class="listicontext">' + category['name'] + '<span> (' + category.productCount + ')</span></span></a>');
							
							navLI.appendChild(navLIA);
							navUL.appendChild(navLI);
						}
						
						//divMore.appendChild(moreUL);
						categoryList.appendChild(navUL);
						targetNode.appendChild(categoryList);
					}
					output2 = targetNode.get('innerHTML');
					Y.Assert.areNotEqual(output1, output2, "Category success");
				}, 500);
			}
			
		});
		suite.add(AsyncTestCase);
		Y.Test.Runner.add(suite);
		
	});