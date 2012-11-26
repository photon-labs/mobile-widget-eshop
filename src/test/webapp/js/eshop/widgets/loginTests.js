YUI.add('loginTests', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("LoginTests");
		//add test cases
		var AsyncTestCase = new Y.Test.Case({

			name: "LoginTests",
			"LoginTests with same data": function () {
				var output1, output2;
				var loginNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				// instantiate NavigationWidget with the HTML
				var loginWidget = new Y.Phresco.LoginWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginNode,
					apiReference : eshopAPI
				});
				var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginNode,
					apiReference : eshopAPI
				});
				
				var data = {"login":{"loginEmail":"john@phresco.com","password":"john"}};
				
				output1 = "success";
				eshopAPI.doLogin(loginSuccessWidget, data, loginSuccessWidget, function(response){
					output2 = response;
				});
				
				this.wait(function(){
					Y.Assert.areEqual(output1, output2, "Login success");
				}, 1000);
			},
			
			"LoginTests with wrong data": function () {
				var output1, output2;
				var loginNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				// instantiate NavigationWidget with the HTML
				var loginWidget = new Y.Phresco.LoginWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginNode,
					apiReference : eshopAPI
				});
				var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginNode,
					apiReference : eshopAPI
				});
				
				var data = {"login":{"loginEmail":"john111@phresco.com","password":"john"}};
				
				output1 = "failure";
				eshopAPI.doLogin(loginSuccessWidget, data, loginSuccessWidget, function(response){
					output2 = response;
				});
				
				this.wait(function(){
					Y.Assert.areEqual(output1, output2, "Login success");
				}, 1000);
			}
			
		});
		suite.add(AsyncTestCase);
		Y.Test.Runner.add(suite);
		
	});