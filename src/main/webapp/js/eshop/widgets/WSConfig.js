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
YUI.add("WSConfig", function(Y) {
    function WSConfig(config) {
        WSConfig.superclass.constructor.apply(this, arguments);
    }

    WSConfig.NAME = "WSConfig";
    var callbackData = 'callbackData';

    WSConfig.ATTRS = {
       categories : {
            value : null
        },
        widgets : {
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
        }
		
    };

    Y.extend(WSConfig, Y.Base, {
        
        initializer: function() {
        },

        destructor : function() {},
		
		getWsConfig : function (callback) {
			var wsconfig = this;
			var WSConfigurl = {};
			var serviceName = "eshopService";
			$.get("test/resources/phresco-env-config.xml",function(data){
				$(data).find("environment").each(function() {
					var env = $(this).attr('name');
					$(this).find("WebService").each(function() {
						var configServiceName = $(this).attr("name");
						if (configServiceName === serviceName) {
							WSConfigurl.host = $(this).find("host").text();
							WSConfigurl.port = $(this).find("port").text();
							WSConfigurl.context = $(this).find("context").text();
							WSConfigurl.protocol = $(this).find("protocol").text(); 
							callback(WSConfigurl);
						}
					});
				});	
			});
		}
	});
    
    Y.namespace("Phresco").WSConfig = WSConfig;
}, "3.4.1", {
    requires:['json-parse', "base", "node", 'io', 'io-base', 'io-xdr', 'querystring', "event-custom-base", "querystring-stringify-simple", 'json', "substitute", 'gallery-yql-rest-client','phrescoWidget']
});