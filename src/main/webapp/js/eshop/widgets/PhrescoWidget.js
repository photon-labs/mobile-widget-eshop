/*
 * ###
 * PHR_HTML5MobileWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License")
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
/**
 * Base widget, All widgets should extends this Phresco widget and implement captureData and createContent methods.
 */
YUI.add("phrescoWidget", function(Y) {
    function PhrescoWidget(config) {
        PhrescoWidget.superclass.constructor.apply(this, arguments);
    }
    var productQty = {};
    var productArray = new Array();
    var totalItem = 0;
    var cartTotal = 0;  

    PhrescoWidget.NAME = "phrescoWidget";
    PhrescoWidget.ATTRS = {
        targetNode : {
            value : Y.Node.one(document.body)
        },
        config : {
            value : null
        },
        apiReference : {
            value : null
        },
        onSelectedListeners : {
            value : []
        },
        onReviewListener : {
            value : []
        },
        onPostReviewListener : {
            value : []
        },
        onLoginListener : {
            value : []
        },
        onCartListener : {
            value : []
        },
        onOrderListener : {
            value : []
        },
        onOrderSubmitListener : {
            value : []
        },
        onOrderSuccessListener : {
            value : []
        },
        onHomeListener : {
            value : []
        },
        widgets: {
            value : []
        },
        hideWidgets: {
            value : []
        },
        onBackListeners : {
            value : []
        },
        onShowmycartListeners : {
            value : []
        },
        onRenderListeners : {
            value : []
        }
    };
    Y.extend(PhrescoWidget, Y.Widget, {
        
        initializer: function() {},
        
        destructor : function() {},
        
        captureData : function(jsonData) {},
        
        createContent : function(jsonSrc) {},
        
        getTargetNode : function() {
            var targetNodeName  =   this.get("targetNode");
            return Y.Node.one(targetNodeName);
        },
        setAppConfigData : function (configJSON) {
            this.set("config", configJSON);
        },
        getAppConfigData : function () {
            return this.get("config");
        },
        getAPIReference : function () {
            var ref = this.get("apiReference");
            return ref;
        },        
        getAmount : function (rate, fromNeeded, supportedCurrencies) {
            var currency = supportedCurrencies[0];
            var result = "";

            if (fromNeeded) {
                result = "From " + currency + rate;
            } else {
                result = currency + rate;
            }

           return result;
       },
        getAmountByCurrency : function (rate, fromNeeded) {
            var currency = "$";
            var result = "";

            if (fromNeeded) {
                result = "From " + currency + rate;
            } else {
                result = currency + rate;
            }

           return result;
       },
       _getValueFromSession : function (key, dflt) {
            if (!dflt){
                dflt = 0;
            }    
            var val = (this.getSessionValue(key) !== null && this.getSessionValue(key) !== undefined) ? this.getSessionValue(key) : dflt;
            return val;
       },
       _getParamValueFromSession : function (key, param) {
            var val = (this.getSessionValue(key) !== null && this.getSessionValue(key) !== undefined) ? this.getSessionValue(key) : 0;
            if (val === 0){
                return "";
            }    
            return "&" + param + "=" + val;
       },
       _isEmpty : function(str) {
            return (str === "" || str === null);
       },
        createElement : function (contentHTML) {
            var element = Y.Node.create(contentHTML);
            if (element === null) {
                element = Y.Node.create(this.getHTML4Content(contentHTML));
            }
            return element;
        },
        getHTML4Content : function (contentHTML5) { 
            var contentHTML4 = contentHTML5.replace('<nav', '<div');
            contentHTML4 = contentHTML4.replace('</nav', '</div');
            contentHTML4 = contentHTML4.replace('<header', '<div');
            contentHTML4 = contentHTML4.replace('</header', '</div');
            contentHTML4 = contentHTML4.replace('<section', '<div');
            contentHTML4 = contentHTML4.replace('</section', '</div');
            contentHTML4 = contentHTML4.replace('<aside', '<div');
            contentHTML4 = contentHTML4.replace('</aside', '</div');
            return contentHTML4;
        },
        loading : function(target){
            $(target).html("<div class='loading'></div>");

            
        },
        showCategories : function() {
            var widgetObj = this.obj; 
			var apiRef = widgetObj.get("apiReference");
			apiRef.set("special-tab", this.id);
            $('.footer li.browse').addClass("browse_active");
            $('.footer li.spl_offer').removeClass("spl_offer_active");
            $('.footer li.mycart').removeClass("mycart_active");

            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            
            var listeners = widgetObj.get("onSelectedListeners"); 
            
                 for (var i = 0; i < listeners.length; i++) {
                    if (listeners[i] instanceof Y.Phresco.CategoryWidget) {
                        var target = listeners[i].get("targetNode");
                        widgetObj.loading(target);
                        apiRef.getCategories([listeners[i]]);
                    }
                }
        },
         
        showProducts : function() {
        
            var widgetObj = this.obj;

            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onSelectedListeners");

            for (var i = 0 ;i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                apiRef.getProducts(listeners, this.data, listeners[i]);
            }

        },
        showProductDetails : function() {
            var widgetObj = this.obj;
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }
            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onSelectedListeners");
            for (var i = 0 ;i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                apiRef.getProductDetails(listeners[i], this.data, listeners[i]);
            }
        },
        showOrderSuccess : function() {
            var widgetObj = this.obj;
            var hideWidgets = widgetObj.get("hideWidgets");
            var apiRef = widgetObj.get("apiReference");
            var orderdetailDeliveryget = apiRef.get("orderdetailDelivery", orderdetailDeliveryget); 
            var orderdetailBillingget = apiRef.get("orderdetailBilling", orderdetailBillingget);
            var productDetails = apiRef.get("productDetails", productDetails);
            var cartTotalget = apiRef.get("cartTotal", cartTotalget);// for inserting purpose
            var totalItemget = apiRef.get("totalItem", totalItemget);// for inserting purpose
            var customerEmail = apiRef.get("customerEmail", customerEmail);// for inserting purpose 
            var comments = apiRef.get("comments", comments);// for inserting purpose 
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var listeners = widgetObj.get("onOrderSuccessListener");
            for (var i = 0; i < listeners.length; i++) {
              apiRef.postOrder(orderdetailDeliveryget,orderdetailBillingget, customerEmail, comments, productDetails, cartTotal, totalItem);
               listeners[i].captureData(null);
            }
            apiRef.set("orderDetailback", "");
			apiRef.set("productQty", "");
			
			// To empty the productQty json
			var productArray = productQty.productDetail;

            if (productArray.length !== 0) {
                for (var j = 0; j < productArray.length; j++) {
                    var product = productArray[j];
					productArray.splice(product,1);
                }
            }
			productQty.productDetail = productArray;
			productQty.totalItem = 0;    
            productQty.cartTotal = 0;    

			apiRef.set("productQty", productQty);   
			
        },
        showProductsFromCache : function() {
            var widgetObj = this.obj;

            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onSelectedListeners");

            for (var i = 0; i < listeners.length; i++) {
                var data = apiRef.get("products");
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                listeners[i].onUpdateListener(data);
            }

        },

        showSubmitOrder : function() {
            var widgetObj = this.obj;
            var orderFormFields = ["email", "deliveryfirstname", "deliveryaddress1","deliverycity", "deliverystate", "deliverycountry","deliverypostcode", "deliveryphonenumber","billingfirstname", "billingaddress1","billingcity", "billingstate", "billingcountry","billingpostcode", "billingphonenumber"]; 
            var apiRef = widgetObj.get("apiReference");
            var validated = widgetObj.validateFormFields(orderFormFields, apiRef);
            if (validated) {                
                var orderDetail = {};
                orderDetail.email = $("#email").val();
                orderDetail.deliveryfirstname =$("#deliveryfirstname").val();
                orderDetail.deliverylastname = $("#deliverylastname").val();
                orderDetail.deliverycompany = $("#deliverycompany").val();
                orderDetail.deliveryaddress1 =  $("#deliveryaddress1").val();
                orderDetail.deliveryaddress2 =  $("#deliveryaddress2").val();
                orderDetail.deliverycity = $("#deliverycity").val();
                orderDetail.deliverystate = $("#deliverystate").val();
                orderDetail.deliverycountry =  $("#deliverycountry").val();
                orderDetail.deliverypostcode = $("#deliverypostcode").val();
                orderDetail.deliveryphonenumber =  $("#deliveryphonenumber").val();
                orderDetail.billingfirstname =$("#billingfirstname").val();
                orderDetail.billinglastname = $("#billinglastname").val();
                orderDetail.billingcompany = $("#billingcompany").val();
                orderDetail.billingaddress1 =  $("#billingaddress1").val();
                orderDetail.billingaddress2 =  $("#billingaddress2").val();
                orderDetail.billingcity = $("#billingcity").val();
                orderDetail.billingstate = $("#billingstate").val();
                orderDetail.billingcountry =  $("#billingcountry").val();
                orderDetail.billingpostcode = $("#billingpostcode").val();
                orderDetail.billingphonenumber =  $("#billingphonenumber").val();
                orderDetail.comments =  $("#comments").val();
                
                var apiRef = widgetObj.get("apiReference");
                apiRef.set("orderDetail", orderDetail);             
                
                var hideWidgets = widgetObj.get("hideWidgets");
                for (var i = 0; i < hideWidgets.length; i++) {
                    $(hideWidgets[i]).hide();
                }
    
                var apiRef = widgetObj.get("apiReference");
                var listeners = widgetObj.get("onOrderSubmitListener");
                for (var i = 0 ;i < listeners.length; i++) {
                  listeners[i].captureData(null);
                }
            }           
        },
        validateFormFields : function (validateFormFields, apiRef) {
            var fieldSet = apiRef.getFieldset();
            var fieldsLength = fieldSet.length;
            var errAllids = new Array();
            for (var i = 0; i < validateFormFields.length; i++)  {
                    var field = validateFormFields[i];
                    var jsonField = "$." + field + "";
                    var fieldObj = jsonPath(fieldSet, jsonField);                    
                    if ("TRUE" === fieldObj[0].mandatory) {
                        var id = fieldObj[0].fieldId;
                        var type = fieldObj[0].type;
                        var value = $(id).val();
                        var errMessage = id+"_err";
                        var errId = id+"_err_div";
                        if (value === "") {
                            var text = id.split("#");
                            $(errMessage).html("please enter "+ text[1]);
                            $(errId).addClass("error");
                            $(id).focus();
                            return false;
                        } 
                            else if(value !== "" && type === "EMAIL") {
                                var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                                if (!regex.test(value)) {
                                    $(errMessage).html("please enter valid email id ");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                  return false;
                                } 
                                $(errMessage).html('');
                                $(errId).removeClass("error");
                            }
                            else if(value !== "" && type === "TEXT"){ 
                                var character =  /^[a-zA-Z\s]+$/;
                                if (!character.test(value)) {
                                    $(errMessage).html("please enter character only");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                    return false;
                                }
                                $(errMessage).html('');
                                $(errId).removeClass("error");
                            }
                             else if(value !== "" && type === "STRING"){ 
                                var character =  /^[a-zA-Z0-9\s^,^.,^#,^(,^)]+$/;
                                if (!character.test(value)) {
                                    $(errMessage).html("please enter character and number only");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                    return false;
                                }
                                $(errMessage).html('');
                                $(errId).removeClass("error");
                            }
                           else if(value !== "" && type === "NUMBER"){
                                var character =  /^[0-9\s^+^-]+$/;
                                if (!character.test(value)) {
                                    $(errMessage).html("please enter correct format");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                    return false;
                                }
                                $(errMessage).html('');
                                $(errId).removeClass("error");
                            }                    
                                            

                       }
                }
            return true;
        },
        getReviews: function() {
            var widgetObj = this.obj;
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }
            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onReviewListener");
            for (var i = 0 ;i < listeners.length; i++) {
                    var target = listeners[i].get("targetNode");
                    widgetObj.loading(target);
                    apiRef.getProductReviews(listeners[i], this.data, listeners[i]);
            }
            
        },
        postReviewPage: function() {
            var widgetObj = this.obj;

            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onPostReviewListener");
            var productId = {};
            productId.id = this.data;
            for (var i = 0; i < listeners.length; i++) {
                var data = apiRef.get("products");
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                listeners[i].onUpdateListener(productId);
            }
        },
        showTab : function() {
            var widgetObj = this.obj;
            this.addClass("active");

            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }
            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onSelectedListeners");
            
            if (this.id === 'browse-tab') {           
			
                apiRef.set("special-tab", this.id); // for overwriting special-tab to browse-tab highlighted
				
                $('#special-tab').removeClass("active");
                $('#cart-tab').removeClass("active");
                $('#browse-tab').addClass("active");
                
                $('.footer li.browse').addClass("browse_active");
                $('.footer li.spl_offer').removeClass("spl_offer_active");
                $('.footer li.mycart').removeClass("mycart_active");

                for (var i = 0; i < listeners.length; i++) {
                    if (listeners[i] instanceof Y.Phresco.CategoryWidget) {
                    
                        var target = listeners[i].get("targetNode");
                        widgetObj.loading(target);
                        apiRef.getCategories([listeners[i]]);
                    }
                }

            } else if (this.id === 'cart-tab') {
                
                $('.footer li.browse').removeClass("browse_active");
                $('.footer li.spl_offer').removeClass("spl_offer_active");  
                $('.footer li.mycart').addClass("mycart_active");
                
                $('#browse-tab').removeClass("active");
                $('#special-tab').removeClass("active");
                $('#cart-tab').addClass("active");
                
                for (var i = 0; i < listeners.length; i++) {
                    if (listeners[i] instanceof Y.Phresco.MyCartWidget) {
                        var target = listeners[i].get("targetNode");
                        widgetObj.loading(target);
                        listeners[i].onUpdateListener(null);
                    }
                }
            }
            else if (this.id === 'special-tab') {
                apiRef.set("special-tab", this.id); 
                $('.footer li.spl_offer').addClass("spl_offer_active"); 
                $('.footer li.browse').removeClass("browse_active");
                $('.footer li.mycart').removeClass("mycart_active");
                
                $('#browse-tab').removeClass("active");
                $('#cart-tab').removeClass("active");
                $('#special-tab').addClass("active");

                for (var i = 0; i < listeners.length; i++) {

                    if (listeners[i] instanceof Y.Phresco.ProductsWidget) {
                        var target = listeners[i].get("targetNode");
                        widgetObj.loading(target);
                        apiRef.getSpecialProducts([listeners[i]]);
                    }
                }
            }
            else if (this.id === 'register-tab') {
                $('#browse-tab').removeClass("active");
                $('#cart-tab').removeClass("active");
                $('#special-tab').removeClass("active");
                $('#logEmail').focus();
                for (var i = 0; i < listeners.length; i++) {

                    if (listeners[i] instanceof Y.Phresco.RegistrationWidget) {
                        var target = listeners[i].get("targetNode");
                        widgetObj.loading(target);
                        listeners[i].onUpdateListener(null);
                    }
                }
            }
            else if (this.id === 'login-tab') {
                $('#browse-tab').removeClass("active");
                $('#cart-tab').removeClass("active");
                $('#special-tab').removeClass("active");
                $('#logEmail').focus();
                for (var i = 0; i < listeners.length; i++) {

                    if (listeners[i] instanceof Y.Phresco.LoginWidget) {
                        var target = listeners[i].get("targetNode");
                        widgetObj.loading(target);
                        listeners[i].onUpdateListener(null);
                    }
                }
            }           
        },
        showMyshoppingcart : function(){
            this.addClass("active");
            $('.footer li.browse').removeClass("browse_active");
            $('.footer li.spl_offer').removeClass("spl_offer_active");  
            $('.footer li.mycart').addClass("mycart_active");
            
            $('#browse-tab').removeClass("active");
            $('#special-tab').removeClass("active");
            $('#cart-tab').addClass("active");
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onShowmycartListeners");
            for (var i = 0; i < listeners.length; i++) {
                    var target = listeners[i].get("targetNode");
                    widgetObj.loading(target);
                    listeners[i].onUpdateListener(null);
            }
        },
        showShoppingCart  : function(widgets) {
            this.addClass("active");
            var widgetObj = this.obj;
            $('.footer li.browse').removeClass("browse_active");
            $('.footer li.spl_offer').removeClass("spl_offer_active");  
            $('.footer li.mycart').addClass("mycart_active");
            
            $('#browse-tab').removeClass("active");
            $('#special-tab').removeClass("active");
            $('#cart-tab').addClass("active");
            
            var apiRef = widgetObj.get("apiReference");
            var totalproductQty = apiRef.get("productQty");
            if(totalproductQty){
                totalItem = totalproductQty.totalItem;
                cartTotal = totalproductQty.cartTotal;
            }   

            var productDetail = {};
            var detailsPageQuantity = $("#input_text").val();
            if(detailsPageQuantity){
                this.data.quantity = detailsPageQuantity;
                this.data.totalPrice = this.data.quantity * this.data.price;
            }
            var updateProduct = 0;
            if (productArray.length !== 0) {
                for (var i = 0; i < productArray.length; i++) {
                    var product = productArray[i];
                    if (product.productId === this.data.productId) {
                        product.quantity =  Number(product.quantity) + Number(this.data.quantity);
                        product.totalPrice = (product.quantity * this.data.price);
                        updateProduct = 1;
                    }
                }
            }
            
            totalItem = Number(totalItem) + Number(this.data.quantity);
            cartTotal = Number(cartTotal) + Number(this.data.totalPrice);
            
            if (updateProduct === 0)
                productArray.push(this.data);

 
            productQty.productDetail = productArray;    
            productQty.totalItem = totalItem;
            productQty.cartTotal = cartTotal;
            
           
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onCartListener");
            apiRef.set("productQty", productQty);     
            
                var target = listeners.get("targetNode");
                widgetObj.loading(target);
                listeners.onUpdateListener(null);
            
        },
        removeProduct : function() {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var productQty = apiRef.get("productQty");
            var productArray = productQty.productDetail;

            if (productArray.length !== 0) {
                for (var i = 0; i < productArray.length; i++) {
                    var product = productArray[i];
                    if (product.productId === this.productId) 
                        var productIndex = i;
                }
            }

            var removedItem = productArray.splice(productIndex,1);
            var totalItem = 0; 
            var cartTotal = 0;
            if (productArray.length !== 0) {
                for (var j = 0; j < productArray.length; j++) {
                    var product = productArray[j];
                    totalItem = Number(totalItem) + Number(product.quantity);
                    var addTotal = (Number(product.quantity) * Number(product.price));
                    cartTotal = Number(cartTotal) + Number(addTotal);
                }
            }
            
            productQty.productDetail = productArray;
            productQty.totalItem = totalItem;    
            productQty.cartTotal = cartTotal;    
            
         var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onCartListener");
            apiRef.set("productQty", productQty);     
            listeners.onUpdateListener(null);
        },
        showProductOrder : function() {
            var widgetObj = this.obj;

            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onOrderListener");

            for (var i = 0 ;i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                listeners[i].onUpdateListener(null);
            }
        },
        reviewSubmitFn: function () {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            
            var userId = 0;   
            if(apiRef.get("userId"))
                    var userId = apiRef.get("userId");
              
            var review = {};
            review.productId = $("#productId").val();
            review.userId = userId;
            review.rating = $("#starValue").val();
            review.comment = $("#comments").val();
            var currentTime = new Date();
				var currentYear = new Date(currentTime).getFullYear ();
				var currentMonth = new Date(currentTime).getMonth () + 1;
				var currentDate = new Date(currentTime).getDate ();
				
				var currentHours = currentTime.getHours ();
				var currentMinutes = currentTime.getMinutes ();
				var currentSeconds = currentTime.getSeconds ();
				currentHours = ( currentHours >= 10 ) ? currentHours : "0"+currentHours;
				currentMinutes = ( currentMinutes >= 10) ? currentMinutes : "0"+ currentMinutes;
				currentSeconds = ( currentSeconds >= 10) ? currentSeconds : "0"+ currentSeconds;
				var commentDate = currentYear+'-'+currentMonth+'-'+currentDate+' '+currentHours+':'+currentMinutes+':'+currentSeconds;
            review.commentDate = commentDate;
            var data = {};
            data.review = review;
            apiRef.set("data", data);
            var listeners = widgetObj.get("onReviewListener");
            for (var i = 0 ;i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                apiRef.postReview(listeners[i], data, listeners[i]);
            }
          
            for (var i = 0 ;i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                apiRef.getProductReviews(listeners[i], this.data, listeners[i]);
            }
        },
        userRegister: function () {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var registerFields = ["regfirstname", "reglastname","regemail","regpassword", "regphonenumber"]; 
            var validated = widgetObj.registerFormFields(registerFields, apiRef);
            if (validated) {
                var register = {};
                register.firstName = $("#regfirstname").val();
                register.lastName = $("#reglastname").val();
                register.email = $("#regemail").val();
                register.password = $("#regpassword").val();
                register.phoneNumber = $("#regphonenumber").val();
                var data = {};
                data.register = register;
                var listeners = widgetObj.get("onSelectedListeners");
                

                apiRef.doRegister(listeners,data,listeners);

            }
        },
        userLoginWidget : function(){
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onLoginListener");
                var target = listeners.get("targetNode");
                widgetObj.loading(target);
                listeners.onUpdateListener(null);

        },
        userRegistrationWidget : function(){
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onLoginListener");
                var target = listeners.get("targetNode");
                widgetObj.loading(target);
                listeners.onUpdateListener(null);
            
        },
        userLogin: function () {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var loginFields = ["logEmail","logpassword"];
            var validated = widgetObj.registerFormFields(loginFields, apiRef);
           if (validated) {
 
            var login = {};
            login.loginEmail = $("#logEmail").val();
            login.password = $("#logpassword").val();
             
            var data = {};
            data.login = login;
             var listeners = widgetObj.get("onSelectedListeners");
                console.info('listeners ' , listeners);
               for (var i = 0 ;i < listeners.length; i++) {
                    var target = widgetObj.get("widgets").get("targetNode");
                    widgetObj.loading(target);
                
					apiRef.doLogin(listeners[i],data,listeners[i]);
				}
          }            
        },
		doLogout: function () {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
			console.info(this.data);
			apiRef.set("userId", 0);
			apiRef.set("userData", "");
            $('#eshop').hide();
            $('#container').show();
            $('#browse-tab').addClass("active");
            $('#cart-tab').removeClass("active");
            $('#special-tab').removeClass("active");
        },		
        registerFormFields : function (registerFields, apiRef) {
          if(registerFields[0] === "logEmail"){
                var fieldSet = apiRef.getLoginFieldset();
            }else {
                var fieldSet = apiRef.getregFieldset();
            } 
            var fieldsLength = fieldSet.length;
            var errAllids = new Array();
            for (var i = 0; i < registerFields.length; i++)  {  
                    var field = registerFields[i];
                    var jsonField = "$." + field + "";
                    var fieldObj = jsonPath(fieldSet, jsonField);
                    if ("TRUE" === fieldObj[0].mandatory) {
                        var id = fieldObj[0].fieldId;
                        var type = fieldObj[0].type;
                        var value = $(id).val();
                        var errMessage = id+"_err";
                        var errId = id+"_err_div";
                        if (value === "") {
                            var text = id.split("#");
                            var textmsg = text[1].split("g");
                            $(errMessage).html("Please enter " + textmsg[1]);
                            $(errId).addClass("error");
                            $(id).focus();
                            return false;
                        }
                        else{
                            if(value !== "" && type === "EMAIL") {
                                var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                                if (!regex.test(value)) {
                                    $(errMessage).html("Please enter valid email id ");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                  return false;
                                } 
                            }
                            $(errMessage).html('');
                            $(errId).removeClass("error");
                        }
                    }
            }
            return true;
        },
        addSelectedListener : function(widgets) {
            var listeners = this.get("onSelectedListeners");
            listeners = widgets;
            this.set("widgets", widgets);
            this.set("onSelectedListeners", listeners);
        },
         addHomeListener : function(widgets) {
            var listeners = this.get("onHomeListeners");
            listeners = widgets;
            this.set("widgets", widgets);
            this.set("onHomeListeners", listeners);
        },
        showHome : function() {
                $('#eshop').hide();
                $('#container').show();
        },
        
        addReviewListener : function(widgets) {
            var listeners = this.get("onReviewListener");
            listeners = widgets;
            this.set("widgets", widgets);
            this.set("onReviewListener", listeners);
        },
        addLoginListener : function(widgets) {
            var listeners = this.get("onLoginListener");
            listeners = widgets;
            this.set("widgets", widgets);
            this.set("onLoginListener", listeners);
        },
        addPostReviewListener : function(widgets) {
            var listeners = this.get("onPostReviewListener");
            listeners = widgets;
            this.set("widgets", widgets);
            this.set("onPostReviewListener", listeners);
        },
        addOrderSubmitListener : function(widget) {
            this.set("onOrderSubmitListener", widget);
        },
        addCartListener : function(widgets) {
            var listeners = this.get("onCartListener");
            listeners = widgets;
            this.set("widgets", widgets);
            this.set("onCartListener", listeners);
        },
        addShowmycartListener : function(widgets) {
            var listeners = this.get("onShowmycartListeners");
            listeners = widgets;
            this.set("widgets", widgets);
            this.set("onShowmycartListeners", listeners);
        },
       addOrderListener : function(widget) {
            var listeners = this.get("onOrderListener");
            listeners = widget;
            this.set("orderWidget", widget);
            this.set("onOrderListener", listeners);
        },
        addOrderSuccessListener : function(widget) {
            var listeners = this.get("onOrderSuccessListener");
            listeners= widget;
            this.set("onOrderSuccessListener", listeners);
        },      
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        },
        // Beyond this point is the MyWidget specific application and rendering logic
        /* Attribute state supporting methods (see attribute config above) */       
        _defAttrAVal : function() {
        },
        addBackListener : function(widgets) {
            this.set("onBackListeners", widgets);
        },
        showBackPage : function() {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var backPage = apiRef.get("backPage");
            var listeners = widgetObj.get("onBackListeners");   
            if (backPage === "Products") {
                $('#browse-tab').addClass("active");
                $('#cart-tab').removeClass("active");
                $('#special-tab').removeClass("active");
                for (var i = 0; i < listeners.length; i++) {
                    var target = listeners[i].get("targetNode");
                    widgetObj.loading(target);
                    if (listeners[i] instanceof Y.Phresco.CategoryWidget) {
                        if(apiRef.get("categories") !== null){
                            listeners[i].captureData(apiRef.get("categories"));
                        } else {
                            widgetObj.showHomePage();
                        }

                        break;
                    }
                }
            } else if (backPage === "ProductDetails") {
                for (var i = 0; i < listeners.length; i++) {
                    var target = listeners[i].get("targetNode");
                    widgetObj.loading(target);
                    if (listeners[i] instanceof Y.Phresco.ProductsWidget) {
                        listeners[i].captureData(apiRef.get("products"));
                        break;
                    }
                }
                
            } else if (backPage === "Categories") {
                widgetObj.showHomePage();
            }
            else if (backPage === "Registration") {
                widgetObj.showHomePage();
            }   
            else if (backPage === "Login") {
                widgetObj.showHomePage();
            }   
        },
        showHomePage: function() {
            $('#eshop').hide();
            $('#container').show();
            $('#browse-tab').addClass("active");
            $('#cart-tab').removeClass("active");
            $('#special-tab').removeClass("active");
        },
        addRenderListener : function(widget) {
            var listeners = this.get("onRenderListeners");
            listeners = widget;
            this.set("onRenderListeners", listeners);
        },
        renderWidgets: function() {
            var widgetObj = this;

            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onRenderListeners");
            for (var i = 0 ;i < listeners.length; i++) {
                listeners[i].render();
            }

            $('#container').hide();
            $('#eshop').show();
        },
        _setAttrA : function(attrVal, attrName) {
        },

        _getAttrA : function(attrVal, attrName) {
        },

        _validateAttrA : function(attrVal, attrName) {
        },

        /* Listeners, UI update methods */

        _afterAttrAChange : function(e) {
            /* Listens for changes in state, and asks for a UI update (controller). */

        },

        _uiSetAttrA : function(val) {
            /* Update the state of attrA in the UI (view) */

        },

        _defMyEventFn : function(e) {
            // The default behavior for the "myEvent" event.
        }
    }); 

    Y.namespace("Phresco").PhrescoWidget = PhrescoWidget;
}, "3.3.0", {
    requires:["widget", "io", "json", "node", "substitute"]
});