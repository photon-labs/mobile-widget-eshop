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
YUI.add("ConfigReader", function(Y) {
    function ConfigReader(config) {
        ConfigReader.superclass.constructor.apply(this, arguments);
    }

    ConfigReader.NAME = "ConfigReader";
    var callbackData = 'callbackData';

    ConfigReader.ATTRS = {
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

    Y.extend(ConfigReader, Y.Base, {
        
        initializer: function() {},

        destructor : function() {},
		
		getStatus : function(path, callback) {
			 var http = jQuery.ajax({
				type:"HEAD",
				url: path,
				async: false
			  })
			  callback(http.status); 
		},
		
        getEnvironment : function (infoFile, callback) {
			var path = "src/WEB-INF/resources/"+infoFile;
			$.get(path,function(data){
				$(data).find("parameter").each(function() {
					var nameTag = $(this).find('name');
					var name = nameTag.text();
					if (name.trim() === 'Environment') {
						var valueTag = $(this).find('value');
						envValue = valueTag.text();
						envValue = envValue.replace(name.trim(), "");
						callback(envValue);
					}
				});	
			});
        }
		
    });
    
    Y.namespace("Phresco").ConfigReader = ConfigReader;
}, "3.4.1", {
    requires:['json-parse', "base", "node", 'io', 'io-base', 'io-xdr', 'querystring', "event-custom-base", "querystring-stringify-simple", 'json', "substitute", 'gallery-yql-rest-client','phrescoWidget']
});