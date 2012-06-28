YUI.add("eshopAPI", function(Y) {
    function EShopAPI(config) {
		this.config = config;
		console.info('config = ', config);
		var url = config.protocol + '://' + config.host + ':' + config.port + '/' + config.context;
		console.info('url = ', url);
		this.wsURL = url;
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
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                data: "somedata=blahblah",                      
                jsonp: 'callback',
                url: eshopAPI.wsURL + '/rest/api/config?callback=?',                     
                success: function(data) {
                    eshopAPI.set("config", data);             
                },
                error: function(msg) {    
                    console.info('Message = ', msg);
                }
            });
        },
        getCategories : function (uiWidgetsToPopulate) {
            var responseHandler = this.populateResponseToWidgets;
			var eshopAPI = this;
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                data: "somedata=blahblah",                      
                jsonp: 'callback',
                url: eshopAPI.wsURL + '/rest/api/categories?callback=?',                     
                success: function(data) {
                    //console.log('success');
                    console.log(data);

                    var args = {};
                    args.complete = uiWidgetsToPopulate;
                    var html = "";
                    responseHandler(data, args);               
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    //console.log(JSON.stringify(jqXHR));
                    //console.log(textStatus+': '+errorThrown);
                }
            });
        },
        getNewProducts : function (uiWidgetsToPopulate) {
            var responseHandler = this.populateResponseToWidgets;
            //var wsURL = this.get("wsURL");
			var eshopAPI = this;
            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/categories/1',
                contentType: 'application/json',
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
        getSpecialProducts : function (uiWidgetsToPopulate, categoryId, listeners) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/specialproducts',
                contentType: 'application/json',
                dataType: 'jsonp',
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
                    var args = {};
                    args.complete = uiWidgetsToPopulate;
                    responseHandler(data, args);
                    eshopAPI.set("products", data);
                    listeners.onUpdateListener(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(JSON.stringify(jqXHR));
                    console.log(textStatus+': '+errorThrown);
                }
            });
        },
        getAllProducts : function (uiWidgetsToPopulate, categoryId, listeners) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/products?callback=?',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: callbackData,                      
                jsonp: 'callback',
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
                    var args = {};
                    args.complete = uiWidgetsToPopulate;
                    responseHandler(data, args);
                    eshopAPI.set("products", data);
                    listeners.onUpdateListener(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    //console.log(JSON.stringify(jqXHR));
                    //console.log(textStatus+': '+errorThrown);
                }
            });            
        },
        getTopsellProducts : function (uiWidgetsToPopulate, categoryId, listeners) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/newproducts?callback=?',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: callbackData,                      
                jsonp: 'callback',
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
                   // console.log(JSON.stringify(jqXHR));
                   // console.log(textStatus+': '+errorThrown);
                }
            });
        },
        getProducts : function (uiWidgetsToPopulate, categoryId, listeners) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");

            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/categories/' + categoryId + '?callback=?',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: callbackData,                      
                jsonp: 'callback',
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
                   // console.log(JSON.stringify(jqXHR));
                   // console.log(textStatus+': '+errorThrown);
                }
            });

        },
        getProductDetails : function (uiWidgetsToPopulate, productId, listeners) {
            var responseHandler = this.populateResponseToWidgets;
            //var getReviews = this.getProductReviews;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/products/' + productId + '?callback=?',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: callbackData,                      
                jsonp: 'callback',
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
                   var args = {};
                    args.complete = uiWidgetsToPopulate;
                    eshopAPI.set("productDetails", data);
                    eshopAPI.getProductReviews(data, uiWidgetsToPopulate, productId, listeners);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    //console.log(JSON.stringify(jqXHR));
                    //console.log(textStatus+': '+errorThrown);
                }
            });
       },
		getOrderHistory : function (uiWidgetsToPopulate, userid, listeners) {
            var responseHandler = this.populateResponseToWidgets;
            //var getReviews = this.getProductReviews;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/products/orderhistory/' + userid +'?callback=?',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: callbackData,                      
                jsonp: 'callback',
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
                    var args = {};
                    args.complete = uiWidgetsToPopulate;
                    responseHandler(data, args);
                    eshopAPI.set("orderhistory", data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                   // console.log(JSON.stringify(jqXHR));
                   // console.log(textStatus+': '+errorThrown);
                }
            });            
        },
        getProductReviews : function (productDetailsData, uiWidgetsToPopulate, productId, listeners) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            //  console.info('productDetailsData = ',productDetailsData);
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
                    var args = {};
                    args.complete = uiWidgetsToPopulate;
                    var resultData = {};
                    resultData.productDetailsData = productDetailsData;
                    resultData.reviewData = data;
                    responseHandler(resultData, args);
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
            $.ajax({
                type: 'GET',
                url:  eshopAPI.wsURL + '/rest/api/products/search/' + searchCriteria +'?callback=?',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: callbackData,                      
                jsonp: 'callback',
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
                    var args = {};
                    args.complete = uiWidgetsToPopulate;
                    responseHandler(data, args);
                    console.info('test data =' ,data);
                    eshopAPI.set("products", data);
                    listeners.onUpdateListener(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    //console.log(JSON.stringify(jqXHR));
                    //console.log(textStatus+': '+errorThrown);
                }
            });          
       },
       /* 
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

            var wsURL = this.get("wsURL");
            var url = wsURL + '/rest/api/categories';
            Y.io(url, cfg);
        },
        getCategoriesUsingYUI : function(uiWidgetsToPopulate) {        
            function handleJSONP(response) {   
            }

            YUI().use('jsonp', 'node', function(Y) {
                var wsURL = this.get("wsURL");
                var url = wsURL + '/rest/api/categories?callback=';     
                url = url + "{callback}";
                Y.jsonp(url, handleJSONP);
            });
        },
        getCategoriesUsingjQuery : function(uiWidgetsToPopulate) {
            var data = '';
            var responseHandler = this.populateResponseToWidgets; 
            var wsURL = this.get("wsURL");
            $.getJSON(wsURL + '/rest/api/categories?callback=?',
                function (data) {     
                }
            );
        },  
        */
        doLogin : function (listeners,data,reviewData) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            console.info('reached login method');
           
            // Send the request
            $.post(eshopAPI.wsURL + '/rest/api/post/login', data, function(response) {
                // Do something with the request
                var args = {};
                args.complete = listeners;
               data.response = response;
                if(response.message == 'success'){
                    reviewData.review.userId = response.userId;
                    eshopAPI.set("reviewData", reviewData);
                    eshopAPI.set("userId", response.userId);
                    eshopAPI.set("userData", data);
                    console.info('userid = ',response.userId);
               }   
                responseHandler(data, args);
                    
            }, 'json');
            
        
          /* $.ajax({
                type: 'POST',
                url:  wsURL + '/rest/api/post/login' + data +'?callback=?',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: callbackData,                      
                jsonp: 'callback',
                converters: {
                    'jsonp': jQuery.parseJSON,
                },
                success: function(data) {
                // Do something with the request
                    var args = {};
                    args.complete = listeners;
                    data.response = response;
                    if(response.message == 'success'){
                        reviewData.review.userId = response.userId;
                        api.set("reviewData", reviewData);
                        api.set("userId", response.userId);
                        console.info('userid = ',response.userId);
                        api.set("userData", data);
                    }   
                    responseHandler(data, args);
                 },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(JSON.stringify(jqXHR));
                    console.log(textStatus+': '+errorThrown);
                }
            });  
        */ 
        },
		
		logoutUser : function (listeners,data) {
            var responseHandler = this.populateResponseToWidgets;
			var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            var args = {};
            args.complete = listeners;
			//console.info('data = ', data);
			var userId = eshopAPI.get("userId");
			//console.info('userId = ', userId);
			//console.info('args = ', args);
            responseHandler(data, args);
       },		
       postReview : function (uiWidgetsToPopulate, data, listeners) {
            var responseHandler = this.populateResponseToWidgets;
			var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            // Send the request
           // var data = "{\"J\":5,\"0\":\"N\"}";

            $.post(eshopAPI.wsURL + '/rest/api/product/post/review', data, function(response) {
                // Do something with the request
            }, 'json');
        },
        doRegister : function (uiWidgetsToPopulate,data,reviewData) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
            var args = {};
            args.complete = uiWidgetsToPopulate;
            $.post(eshopAPI.wsURL + '/rest/api/post/register', data, function(response) {
                // Do something with the request
                data.response = response;
                if(response.userId > 0){
                   // api.set("userId", response.userId);
                    eshopAPI.set("userData", data);
                }
                responseHandler(data, args);
                
            }, 'json');
        },
        postOrder : function (orderDetail, customerEmail, comments, productDetails, cartTotal, totalItem, userId) {
            var responseHandler = this.populateResponseToWidgets;
            var eshopAPI = this;
            //var wsURL = this.get("wsURL");
           
            var data = {};
            data.products = productDetails;
            data.paymentMethod = "Cash on Delivery";
            var customerInfo = {};
            customerInfo.emailID = customerEmail;
            customerInfo.deliveryAddress = orderDetail;
            customerInfo.billingAddress = orderDetail;
            data.customerInfo = customerInfo;
			data.totalItem = totalItem;
            data.totalPrice = cartTotal;
            data.comments = comments;
			data.userId = userId;
			
			var productQty = eshopAPI.get("productQty");
			console.info('productQty' , productQty);
			eshopAPI.set("productQty",null);
			var productQty1 = eshopAPI.get("productQty");
			console.info('productQty1' , productQty1);
			
            $.post(eshopAPI.wsURL + '/rest/api/product/post/orderdetail', data, function(response) {
			     // Do something with the request
				 console.info('order success response' , response);
            }, 'json');
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
            this.setWSConfig();
            
        },
        
		setWSConfig : function() {
			/* if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
            var currentEnv = this.get("currentEnv");
            //var currentEnv = "Dev";
            			
			xmlhttp.open("GET","/resources/phresco-env-config.xml", false);
			xmlhttp.send();
			xmlDoc = xmlhttp.responseXML;	
			console.info("responseXML: ", xmlhttp);
			
            var type = "WebService";
            var name = "";
            var configdata = this.getConfigByName(currentEnv, type, name);
            console.info("configdata", configdata);    
              
			var host = configdata.host;
            var port = configdata.port;
            var protocol = configdata.protocol;
            var context = configdata.context;
            var username = configdata.username;
            var password = configdata.password;

            //this.set("wsConfig", wsConfig);
            var urlWithoutContext = protocol + '://' + host + ':' + port;
            var url = protocol + '://' + host + ':' + port + '/' + context;            
            this.set("wsURL", url);
            this.set("wsURLWithoutContext", urlWithoutContext);  */
        },

       

        // three param for envtype, configtype, configname. for example currentEnv = "development", type ="server",name ="myserver"
        getConfigByName : function (currentEnv, type, name) {
		console.info("Data: ", xmlDoc);
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
                        json = $.xml2json(configNode);
                        return json;
                    } else if (name == "") {
                       //var xmlString = (new XMLSerializer()).serializeToString(configNode);
                        json = $.xml2json(configNode);
                        return json;
                    }
                } else if (configNodeName == type && configNodeName != "#text") {
                   // var xmlString = (new XMLSerializer()).serializeToString(configNode);
                    json = $.xml2json(configNode);
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
           var fieldset = {"email":{"fieldId":"#email","type":"EMAIL","mandatory":"TRUE"},"firstName":{"fieldId":"#firstName","type":"TEXT","mandatory":"TRUE"},"lastName":{"fieldId":"#lastName","type":"TEXT","mandatory":"TRUE"},"company":{"fieldId":"#company","type":"TEXT","mandatory":"TRUE"},"address1":{"fieldId":"#address1","type":"STRING","mandatory":"TRUE"},"address2":{"fieldId":"#address2","type":"STRING","mandatory":"TRUE"},"city":{"fieldId":"#city","type":"TEXT","mandatory":"TRUE"},"state":{"fieldId":"#state","type":"TEXT","mandatory":"TRUE"},"country":{"fieldId":"#country","type":"TEXT","mandatory":"TRUE"},"postCode":{"fieldId":"#postCode","type":"STRING","mandatory":"TRUE"},"phoneNumber":{"fieldId":"#phoneNumber","type":"NUMBER","mandatory":"TRUE"},"paymentmethod":{"fieldId":"#paymentmethod_0","type":"OPTION","mandatory":"TRUE"},"cardNumber":{"fieldId":"#cardNumber","type":"NUMBER","mandatory":"TRUE"},"securityNumber":{"fieldId":"#securityNumber","type":"PASSWORD","mandatory":"TRUE"},"nameOnCard":{"fieldId":"#nameOnCard","type":"TEXT","mandatory":"TRUE"}}
           return fieldset;
        },
        getregFieldset : function (f) {
            var registerfieldset = {"regemail":{"fieldId":"#regemail","type":"EMAIL","mandatory":"TRUE"},"regfirstname":{"fieldId":"#regfirstname","type":"TEXT","mandatory":"TRUE"},"reglastname":{"fieldId":"#reglastname","type":"TEXT","mandatory":"TRUE"},"regpassword":{"fieldId":"#regpassword","type":"PASSWORD","mandatory":"TRUE"},"regphonenumber":{"fieldId":"#regphonenumber","type":"NUMBER","mandatory":"TRUE"}}
            return registerfieldset;
        },
        getLoginFieldset : function (f) {
            var loginfieldset = {"logEmail":{"fieldId":"#logEmail","type":"EMAIL","mandatory":"TRUE"},"logpassword":{"fieldId":"#logpassword","type":"PASSWORD","mandatory":"TRUE"}}
            return loginfieldset;
        },
    });
    
    Y.namespace("Phresco").EShopAPI = EShopAPI;
    
                    
}, "3.4.1", {
    requires:["base", "io", "json", "node", "substitute"]
});
