/*
 * ###
 * PHR_HTML5MobileWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
YUI.add("eshopAPI", function(Y) {
    function EShopAPI(config) {
		this.config = config;
		var url = config.protocol + '://' + config.host + ':' + config.port + '/' + config.context;
		var wsURLWithoutContext = config.protocol + '://' + config.host + ':' + config.port + '/';
		this.wsURL = url;
		this.wsURLWithoutContext = wsURLWithoutContext;
        EShopAPI.superclass.constructor.apply(this, arguments);
    }

    EShopAPI.NAME = "eshopAPI";
    var callbackData = 'callbackData';

    EShopAPI.ATTRS = {
		envJson : {
            value : null
        },
        config : {
            value : null
        },
        categories : {
            value : null
        },
        widgets : {
            value : []
        },
        products : {
            value : []
        },
        wsProtocol : {
            value : []
        },
        wsHost : {
            value : []
        },
        wsPort : {
            value : []
        },
        wsContext : {
            value : []
        },
		wsURL : {
			value : []
		}
    };

    Y.extend(EShopAPI, Y.Base, {
        
        initializer: function() {
        },

        destructor : function() {},

        getWsConfig : function () {
            var cfg = {
                method: 'GET',               
                headers: {
                    'Content-Type': 'text/plain'
                },
                on: {
                    complete: this.jspWSConfig
                },
                arguments : {
                    complete: ''
                },
                sync: true,
                context : this
            };
            var url = "environment.jsp";
            Y.io(url, cfg);
        },
        getConfig : function (uiWidgetsToPopulate) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            var wsURL = this.get("wsURL");
            $.ajax({
                type: 'GET',
                dataType: 'json',
                //data: callbackData,                      
                //jsonp: 'callback',
				async: false,
                url: eshopAPI.wsURL + '/rest/api/config',                     
                success: function(data) {
                    eshopAPI.set("config", data);             
                },
                error: function(msg) {    
                }
            });
        },
		
        getCategories : function (uiWidgetsToPopulate, callback) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            var wsURL = this.get("wsURL");
			var url = eshopAPI.wsURL + '/rest/api/categories?callback=?';  
			Y.jsonp(url, function(data) {
				eshopAPI.set("categories", data);
				var args = {};
				args.complete = uiWidgetsToPopulate;
				var html = "";
				responseHandler(data, args);
			});
        },
		
		getNewProducts : function (uiWidgetsToPopulate) {
            var responseHandler = this.populateResponseToWidgets;
            var wsURL = this.get("wsURL");
			var eshopAPI = this;
            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/categories/1?callback=?',  
                data: callbackData,  
                dataType: 'jsonp',
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
                    var args = {};
                    args.complete = uiWidgetsToPopulate;
                    var html = "";
                    responseHandler(data, args);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(JSON.stringify(jqXHR));
                    console.log(textStatus+': '+errorThrown);
                }
            });
        },
        getProducts : function (uiWidgetsToPopulate, categoryId, listeners, callback) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");

           /*  $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/categories/' + categoryId +' ?callback=?',        
                dataType: 'jsonp',
                data: callbackData,
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
					callback(data);
                var args = {};
					args.complete = uiWidgetsToPopulate;
					responseHandler(data, args);
					eshopAPI.set("products", data);
					listeners.onUpdateListener(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                }
            }); */
			
			var url = eshopAPI.wsURL + '/rest/api/categories/' + categoryId +' ?callback=?';
			Y.jsonp(url, function(data) {
				var args = {};
				args.complete = uiWidgetsToPopulate;
				responseHandler(data, args);
				callback(data);
				eshopAPI.set("products", data);
				listeners.onUpdateListener(data);
			});
  
        },
		
        getProductDetails : function (uiWidgetsToPopulate, productId, listeners, callback) {
            var responseHandler = this.populateResponseToWidgets;
			var eshopAPI = this;
            var wsURL = this.get("wsURL");            
            /* $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/products/' + productId +' ?callback=?',        
                dataType: 'jsonp',
                data: callbackData,
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
					callback(data);
					var args = {};
					args.complete = uiWidgetsToPopulate;
					responseHandler(data, args);
					eshopAPI.set("productDetails", data);
					listeners.onUpdateListener(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    //console.log(JSON.stringi
					fy(jqXHR);
                    //console.log(textStatus+': '+errorThrown);
                }
            }); */
			
			var url = eshopAPI.wsURL + '/rest/api/products/' + productId +' ?callback=?';
			Y.jsonp(url, function(data) {
				var args = {};
				args.complete = uiWidgetsToPopulate;
				responseHandler(data, args);
				eshopAPI.set("productDetails", data);
				listeners.onUpdateListener(data);
			});
        },
		
		getProductReviews : function (uiWidgetsToPopulate, productId, listeners) {
			var responseHandler = this.populateResponseToWidgets;
			var eshopAPI = this;
 
            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/products/' + productId +'/reviews?callback=?',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: callbackData,                      
                jsonp: 'callback',
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
					//console.log('ProductReviews ');
					//console.log(data);
					var args = {};
					args.complete = uiWidgetsToPopulate;
					var resultData = {};
					resultData.reviewData = data;
					resultData.productId = productId;
					//responseHandler(resultData, args);
					listeners.onUpdateListener(resultData);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                   // console.log(JSON.stringify(jqXHR));
                   // console.log(textStatus+': '+errorThrown);
                }
            });
        },	
		
        searchProducts : function (uiWidgetsToPopulate, searchCriteria, listeners) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            $.getJSON(eshopAPI.wsURL + '/rest/eshopAPI/products/search/' + searchCriteria, function(data) {
                var args = {};
                args.complete = uiWidgetsToPopulate;
                responseHandler(data, args);
                eshopAPI.set("products", data);
                listeners.onUpdateListener(data);
            });
        },
		getSpecialProducts : function (uiWidgetsToPopulate) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
             $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/specialproducts/?callback=?',        
                dataType: 'jsonp',
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {    
					var args = {};
					args.complete = uiWidgetsToPopulate;
					responseHandler(data, args);
					eshopAPI.set("products", data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                }
            });
        },
		
        getCategoriesJson : function(uiWidgetsToPopulate) {
            var responseHandler = this.populateResponseToWidgets; 
            var data = 'key=value';
            var cfg = {
                method: 'GET',
                data: data,                
                headers: {
                    'Content-Type': 'application/json'
                },
                on: {
                    success: responseHandler,
                    failure: this.onFailure
                },
                arguments: { 
                    complete : uiWidgetsToPopulate,
                    respType : "ROOMRATERESPONSE"
                },
                context : this
            };

            //var wsURL = this.get("wsURL");
			var url = eshopAPI.wsURL + '/rest/api/categories';
			Y.io(url, cfg);

        },
        getCategoriesUsingYUI : function(uiWidgetsToPopulate) {        
            function handleJSONP(response) {   
                //console.info('response = ', response);
            }

            YUI().use('jsonp', 'node', function(Y) {
                //var wsURL = this.get("wsURL");
                var url = wsURL + '/rest/api/categories?callback=';     
                url = url + "{callback}";
                Y.jsonp(url, handleJSONP);
            });
        },
        getCategoriesUsingjQuery : function(uiWidgetsToPopulate) {
            var data = '';
            var responseHandler = this.populateResponseToWidgets; 
            //var wsURL = this.get("wsURL");
            $.getJSON(eshopAPI.wsURL + '/rest/api/categories?callback=?',
                function (data) {     
                    //console.info('data = ', data);
                }
            );
        },
		postReview : function (uiWidgetsToPopulate, data, listeners) {
			var eshopAPI = this;
            var responseHandler = this.populateResponseToWidgets;
            //var wsURL = this.get("wsURL");
            // Send the request
           // var data = "{\"J\":5,\"0\":\"N\"}";

            $.post(eshopAPI.wsURL + '/rest/api/product/post/review', data, function(response) {
                // Do something with the request
				//console.info('eshop data1 =',data);
            }, 'json');
        },
		postOrder : function (orderdetailDeliveryget,orderdetailBillingget, customerEmail, comments, productDetails, cartTotal, totalItem) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
           
			var data = {};
			data.products = productDetails;
			data.paymentMethod = "Cash on Delivery";
			var customerInfo = {};
			customerInfo.emailID = customerEmail;
			customerInfo.deliveryAddress = orderdetailDeliveryget;
			customerInfo.billingAddress = orderdetailBillingget;
			data.customerInfo = customerInfo;
			data.totalPrice = cartTotal;
			data.comments = comments;
			//console.info("data data data",data)
            $.post(eshopAPI.wsURL + '/rest/api/product/post/orderdetail', data, function(response) {
                // Do something with the request
            }, 'json');
        },
		
		/* doRegister : function (uiWidgetsToPopulate,data,listeners) {
			var responseHandler = this.populateResponseToWidgets;
			var eshopAPI = this;
			$.post(eshopAPI.wsURL + '/rest/api/post/register', data, function(response) {
				data.response = response;
				eshopAPI.set("res", response.successMessage);
				if(response.userId > 0){
					eshopAPI.set("userId", response.userId);
					eshopAPI.set("userData", data);
				}
				listeners.onUpdateListener(data);
			}, 'json');
		}, */
		
		doRegister : function (uiWidgetsToPopulate,data,listeners) {
			var responseHandler = this.populateResponseToWidgets;
			var eshopAPI = this;
			
			var jsonString = Y.QueryString.stringify(data);
			var cfg = {
				method: 'POST',
				xdr: { use: 'native', dataType: 'json'}, 
				data: jsonString,
			};
			var GlobalEventHandler = {
				success: function(id, o) {
					var res = o.response;
					//var responseresult = eval('(' + res + ')');
					//console.info("responseresult---", o.response);
					var responseresult = Y.JSON.parse(res);
					data.response = response;
					eshopAPI.set("res", response.successMessage);
					if(response.userId > 0){
						eshopAPI.set("userId", response.userId);
						eshopAPI.set("userData", data);
					}
					listeners.onUpdateListener(data);
				},
			};

			var url = eshopAPI.wsURL + '/rest/api/post/register',
			request = Y.io(url, cfg);
			Y.on('io:success', GlobalEventHandler.success, Y); 

		},
		
			
		doLogin : function (uiWidgetsToPopulate,data,listeners, callback) {
			var responseHandler = this.populateResponseToWidgets;
			var eshopAPI = this;
			
			var jsonString = Y.QueryString.stringify(data);
			var cfg = {
				method: 'POST',
				xdr: { use: 'native', dataType: 'json'}, 
				data: jsonString,
			};
			var GlobalEventHandler = {
				success: function(id, o) {
					var res = o.responseText;
					var responseresult = Y.JSON.parse(res);
					
					var args = {};
					args.complete = uiWidgetsToPopulate;
					data.response = responseresult;
					callback(responseresult.message);
					if(responseresult.message == 'success'){
						eshopAPI.set("userId", responseresult.userId);
						eshopAPI.set("userData", data);
					}
					listeners.onUpdateListener(data);
				},
			};

			var url = eshopAPI.wsURL + '/rest/api/post/login',
			request = Y.io(url, cfg);
			Y.on('io:success', GlobalEventHandler.success, Y); 

		},
		
        /***
         * Common response handler method. Push the response json data to the corresponding widgets. 
         */
        pushDataToWidget : function (id, data, widgetsToPopulate) {
            widgetsToPopulate = widgetsToPopulate.complete;
            var responseText = data.responseText;

            for (var i = 0; i < widgetsToPopulate.length; i++) {
                var responseData = Y.JSON.parse(responseText)
                widgetsToPopulate[i].partialRefresh(this._responseValidator(responseData));
            }
        },
        populateResponseToWidgets : function (responseData, callbackArgs) {         
            widgetsToPopulate = callbackArgs.complete;
            for (var i = 0; i < widgetsToPopulate.length; i++) {
                if (responseData != null) {
                    widgetsToPopulate[i].captureData(responseData);
                } else {
                    widgetsToPopulate[i].captureData("");
                }
            }
        },
        onFailure : function(transactionid, response, arguments) {
          // transactionid : The transaction's ID.
          // response: The response object.  Only status and
          //           statusText are populated when the
          //           transaction is terminated due to abort
          //           or timeout.  The status will read
          //           0, and statusText will return "timeout"
          //           or "abort" depending on the mode of
          //           termination.
          // arguments: String "Transaction Failed".
        },
        
		jspWSConfig : function(id, data, callbackArgs) {
            var currentEnv = data.responseText;      
            this.set("currentEnv", currentEnv.environment);
           // this.setWSConfig();
            
        },
       

        // three param for envtype, configtype, configname. for example currentEnv = "development", type ="server",name ="myserver"
        getConfigByName : function (currentEnv, type, name) {
            var environments = xmlDoc.documentElement.getElementsByTagName("environment"); 
            for (var i = 0; i < environments.length; i++) {
                var envNode = environments[i];
                var env = envNode.getAttribute("name");
                var envDefault = envNode.getAttribute("default");

                if (currentEnv != undefined && currentEnv != "") {
                    if (currentEnv == env) {
                        return this.getConfigJson(envNode, type, name);
                    }
                } else if (envDefault == "true") {
                    return this.getConfigJson(envNode, type, name);
                }
            }
        },
        getConfigJson : function(envNode, type, name) {
            var nodes = envNode.childNodes;
            var json = {};

            for (var i = 0; i < nodes.length; i++) {
                var configNode = nodes[i];
                var configNodeName = configNode.nodeName;

                if (configNodeName == type && name != undefined && configNodeName != "#text") {
                    var configName = configNode.getAttribute("name");
                    if (configName == name) {
                        //var xmlString = (new XMLSerializer()).serializeToString(configNode);
                        json = $.xml2json(xmlString);
                        return json;
                    } else if (name == "") {
                       // var xmlString = (new XMLSerializer()).serializeToString(configNode);
                        json = $.xml2json(xmlString);
                        return json;
                    }
                } else if (configNodeName == type && configNodeName != "#text") {
                   // var xmlString = (new XMLSerializer()).serializeToString(configNode);
                    json = $.xml2json(xmlString);
                    return json;
                }
            }

            return json;
        },
        _showLoaderForWidgets : function(widgetsToPopulate) {
            for(var i = 0; i<widgetsToPopulate.length; i++) {
                widgetsToPopulate[i].showLoader();
            }
        },
        _responseValidator : function(responseData) {
            if (responseData.Success != undefined
				&& responseData.Success.toUpperCase() == "FALSE") {
            }
            return responseData;
        },
        _getConfigData : function() {
            return this.get("config");
        },
        _getWebImageURL : function() {
            return this.get("config").web;
        },
		getFieldset : function (f) {
           var fieldset = {"email":{"fieldId":"#email","type":"EMAIL","mandatory":"TRUE"},"deliveryfirstname":{"fieldId":"#deliveryfirstname","type":"TEXT","mandatory":"TRUE"},"deliveryaddress1":{"fieldId":"#deliveryaddress1","type":"STRING","mandatory":"TRUE"},"deliverycity":{"fieldId":"#deliverycity","type":"TEXT","mandatory":"TRUE"},"deliverystate":{"fieldId":"#deliverystate","type":"TEXT","mandatory":"TRUE"},"deliverycountry":{"fieldId":"#deliverycountry","type":"TEXT","mandatory":"TRUE"},"deliverypostcode":{"fieldId":"#deliverypostcode","type":"NUMBER","mandatory":"TRUE"},"deliveryphonenumber":{"fieldId":"#deliveryphonenumber","type":"NUMBER","mandatory":"TRUE"},"billingfirstname":{"fieldId":"#billingfirstname","type":"TEXT","mandatory":"TRUE"},"billingaddress1":{"fieldId":"#billingaddress1","type":"STRING","mandatory":"TRUE"},"billingcity":{"fieldId":"#billingcity","type":"TEXT","mandatory":"TRUE"},"billingstate":{"fieldId":"#billingstate","type":"TEXT","mandatory":"TRUE"},"billingcountry":{"fieldId":"#billingcountry","type":"TEXT","mandatory":"TRUE"},"billingpostcode":{"fieldId":"#billingpostcode","type":"NUMBER","mandatory":"TRUE"},"billingphonenumber":{"fieldId":"#billingphonenumber","type":"NUMBER","mandatory":"TRUE"}};
           return fieldset;
        },
        getregFieldset : function (f) {
            var registerfieldset = {"regemail":{"fieldId":"#regemail","type":"EMAIL","mandatory":"TRUE"},"regfirstname":{"fieldId":"#regfirstname","type":"TEXT","mandatory":"TRUE"},"reglastname":{"fieldId":"#reglastname","type":"TEXT","mandatory":"TRUE"},"regpassword":{"fieldId":"#regpassword","type":"TEXT","mandatory":"TRUE"},"regphonenumber":{"fieldId":"#regphonenumber","type":"TEXT","mandatory":"TRUE"}}
            return registerfieldset;
        },
        getLoginFieldset : function (f) {
            var loginfieldset = {"logEmail":{"fieldId":"#logEmail","type":"EMAIL","mandatory":"TRUE"},"logpassword":{"fieldId":"#logpassword","type":"TEXT","mandatory":"TRUE"}}
            return loginfieldset;
        },

    });
    
    Y.namespace("Phresco").EShopAPI = EShopAPI;
}, "3.4.1", {
    requires:['json-parse', "base", "node", 'io', 'io-base', 'io-xdr', 'querystring', "event-custom-base", "querystring-stringify-simple", 'json', "substitute", 'gallery-yql-rest-client','phrescoWidget']
});