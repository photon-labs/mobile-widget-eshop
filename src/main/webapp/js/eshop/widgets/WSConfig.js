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
					$(this).find("WebService").each(function() {
						WSConfigurl.host = $(this).find("host").text();
						WSConfigurl.port = $(this).find("port").text();
						WSConfigurl.context = $(this).find("context").text();
						WSConfigurl.protocol = $(this).find("protocol").text(); 
						callback(WSConfigurl);
					});
				});	
			});
		}
	});
    
    Y.namespace("Phresco").WSConfig = WSConfig;
}, "3.4.1", {
    requires:['json-parse', "base", "node", 'io', 'io-base', 'io-xdr', 'querystring', "event-custom-base", "querystring-stringify-simple", 'json', "substitute", 'gallery-yql-rest-client','phrescoWidget']
});