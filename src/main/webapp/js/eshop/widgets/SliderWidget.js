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
Event = YUI.event,
YUI.add("sliderWidget", function(Y) {
    function SliderWidget(config) {
        SliderWidget.superclass.constructor.apply(this, arguments);
    }

    SliderWidget.NAME = "sliderWidget";

    SliderWidget.ATTRS = {        
        color : {
            value : []
        },
        imgUrl : {
            value : []
        }
    };

    Y.extend(SliderWidget, Y.Phresco.PhrescoWidget, {
        initializer: function() {
        /*
         * initializer is part of the lifecycle introduced by 
         * the Base class. It is invoked during construction,
         * and can be used to setup instance specific state or publish events which
         * require special configuration (if they don't need custom configuration, 
         * events are published lazily only if there are subscribers).
         *
         * It does not need to invoke the superclass initializer. 
         * init() will call initializer() for all classes in the hierarchy.
         */
        },

        destructor : function() {
        /*
         * destructor is part of the lifecycle introduced by 
         * the Widget class. It is invoked during destruction,
         * and can be used to cleanup instance specific state.
         *
         * Anything under the boundingBox will be cleaned up by the Widget base class
         * We only need to clean up nodes/events attached outside of the bounding Box
         *
         * It does not need to invoke the superclass destructor. 
         * destroy() will call initializer() for all classes in the hierarchy.
         */
        },

        render : function() {
            /*
         * render is part of the lifecycle introduced by the
         * Widget class. Widget's renderer method invokes:
         *
         *     render()
         *     bind()
         *     sync()
         *
         * render is intended to be used by the Widget subclass
         * to create or insert new elements into the DOM. 
         */       
            this.createContent(this.getTargetNode());
        },

        bind : function() {
        },

        sync : function() {
        /*
         * sync is intended to be used by the Widget subclass to
         * update the UI to reflect the initial state of the widget,
         * after render. From there, the event listeners we bound above
         * will take over.
         */
        },

        captureData : function(jsonData) {
            this.set("slider", jsonData);
          },

        createContent : function(targetNode) {
            var slider = this.createElement('<div id="slider" class="nivoSlider"/>');
            slider.appendChild('<img style="display: none;" src="images/eshop/promo1.jpg" alt="" title="#htmlcaption-1">');
            slider.appendChild('<img style="display: none;" src="images/eshop/promo2.jpg" alt="" title="#htmlcaption-2">');
            
            var htmlCaption1 = this.createElement('<div id="htmlcaption-1" class="nivo-html-caption">');
            htmlCaption1.appendChild('<h5 class="p2">Welcome to the our E-Shop</h5>');
            htmlCaption1.appendChild('<p>100% Successive Product</p>');

            var htmlCaption2 = this.createElement('<div id="htmlcaption-2" class="nivo-html-caption">');
            htmlCaption2.appendChild('<h5 class="p2">This is promo area</h5>');
            htmlCaption2.appendChild('<p>Put any description here</p>');

            targetNode.appendChild(slider);
            targetNode.appendChild(htmlCaption1);
            targetNode.appendChild(htmlCaption2);

        },
        callback : function (id, data) {
            data = Y.JSON.parse(data.responseText);

            if(data["Errors : "] !== undefined){
                $('#modify_reservation_alert_msg').html('We were unable to locate your reservation. Please confirm the information you entered is correct.');
            }
            else if(data["Errors"] !== undefined){ 
                $('#modify_reservation_alert_msg').html('We were unable to connect server.');
            }
            else{ 
                window.location = "index.html";
            }
        }
    });

    Y.namespace("Phresco").SliderWidget = SliderWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
