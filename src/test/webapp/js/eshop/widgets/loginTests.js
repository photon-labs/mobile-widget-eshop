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
YUI.add('loginTests', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("LoginTests");
		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var AsyncTestCase = new Y.Test.Case({

			name: "LoginTests",
			"LoginTests with same data": function () {
				var output1, output2;
				var loginNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
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
				});
				this.wait(function(){
					Y.Assert.areEqual(output1, output2, "Login success");
				}, 1000);
			} ,
			
			"LoginTests with wrong data": function () {
				var output1, output2;
				var loginNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
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
				});
				
				this.wait(function(){
					Y.Assert.areEqual(output1, output2, "Login success");
				}, 1000);
			} 
			
		});
		suite.add(AsyncTestCase);
		Y.Test.Runner.add(suite);
		
	});