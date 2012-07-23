<%@ page import="java.io.InputStream" %>
<%@ page import="java.util.List" %>
<%@ page import="java.io.File" %>
<%@ page import="java.util.Properties" %>			
<%@ page import="com.photon.phresco.configuration.ConfigReader" %>
<%@ page import="com.photon.phresco.configuration.Configuration" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
		<title>E-Shop Mobile | Phresco</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <link type="text/css" rel="stylesheet" href="css/eshop/style.css">
        <link type="text/css" rel="stylesheet" href="css/eshop/style1.css"/>
        <link type="text/css" rel="stylesheet" href="css/eshop/jquery.loadmask.css"/>

        <script type="text/javascript" charset="utf-8" src="lib/jquery/jquery.js"></script>
		<script type="text/javascript" src="lib/xml2json/jquery.xml2json.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/eshop/jquery.loadmask.js"></script>
        <script type="text/javascript" src="lib/yui/build/yui/yui-min.js"></script>
        <script type="text/javascript" src="lib/iscroll/iscroll.js"></script>
<!--    <script type="text/javascript" src="lib/iscroll/iscrollnew.js"></script>-->
        <script type="text/javascript" src="lib/jsonpath/jsonpath.js"></script> 
        <!--<script type="text/javascript" src="lib/others/javascript.js"></script>-->
        <script type="text/javascript" src="js/eshop/controller/EShopAPI.js"></script>

        <script type="text/javascript" src="js/eshop/widgets/PhrescoWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/MenuWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/HeaderWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/NavigationWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/CategoryWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/ProductsWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/ProductDetailsWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/FooterWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/ShoppingCartWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/ReviewWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/MyCartWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/CheckoutFormWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/CheckoutFormViewWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/CheckoutSuccessWidget.js"></script>
		<script type="text/javascript" src="js/eshop/widgets/PostReviewWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/RegistrationWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/RegistrationSuccessWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/LoginWidget.js"></script>
        <script type="text/javascript" src="js/eshop/widgets/LoginSuccessWidget.js"></script>
		
		<%
			String currentEnv = System.getProperty("SERVER_ENVIRONMENT");
			String path = getServletContext().getRealPath("/WEB-INF/resources/phresco-env-config.xml");
			File file = new File(path);
			ConfigReader reader = new ConfigReader(file);
			String configJson = reader.getConfigAsJSON(currentEnv, "WebService");
			%>

        <script type="text/javascript">
            YUI().use('node', 'widget', 'eshopAPI', 'phrescoWidget', 'menuWidget', 'headerWidget', 'navigationWidget',
                'categoryWidget', 'productsWidget', 'productDetailsWidget', 'footerWidget', 'shoppingCartWidget', 'reviewWidget', 'checkoutFormWidget', 'checkoutFormViewWidget','checkoutSuccessWidget' ,'myCartWidget','postReviewWidget','registrationWidget', 'registrationSuccessWidget', 'loginWidget', 'loginSuccessWidget',function(Y) {

                Y.on("domready", function () {
					var configJson = '<%= configJson %>';
                    var eshopAPI = new Y.Phresco.EShopAPI($.parseJSON(configJson));

                    // instantiate MenuWidget with the HTML
                    var menuWidget = new Y.Phresco.MenuWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#container",
                        apiReference : eshopAPI
                    });

                    // instantiate HeaderWidget with the HTML
                    var headerWidget = new Y.Phresco.HeaderWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#header",
                        apiReference : eshopAPI
                    });

                    // instantiate NavigationWidget with the HTML
                    var navigationWidget = new Y.Phresco.NavigationWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#header-tab",
                        apiReference : eshopAPI
                    });

                    // instantiate CategoryWidget with the HTML
                    var categoryWidget = new Y.Phresco.CategoryWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    // instantiate ProductsWidget with the HTML
                    var productsWidget = new Y.Phresco.ProductsWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    // instantiate ProductDetailsWidget with the HTML
                    var productDetailsWidget = new Y.Phresco.ProductDetailsWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    // instantiate FooterWidget with the HTML
                    var footerWidget = new Y.Phresco.FooterWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#footer",
                        apiReference : eshopAPI
                    });

                    // instantiate ShoppingCartWidget with the HTML
                    var shoppingCartWidget = new Y.Phresco.ShoppingCartWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    // instantiate ShoppingCartWidget with the HTML
                    var reviewWidget = new Y.Phresco.ReviewWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    // instantiate ShoppingCartWidget with the HTML
                    var myCartWidget = new Y.Phresco.MyCartWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                     var checkoutFormWidget = new Y.Phresco.CheckoutFormWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    var checkoutFormViewWidget = new Y.Phresco.CheckoutFormViewWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });
                    var checkoutSuccessWidget = new Y.Phresco.CheckoutSuccessWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });
                    var postReviewWidget = new Y.Phresco.PostReviewWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    var registrationWidget = new Y.Phresco.RegistrationWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    var registrationSuccessWidget = new Y.Phresco.RegistrationSuccessWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    var loginWidget = new Y.Phresco.LoginWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
                        // place holder can be decided by specifying the attribute
                        targetNode : "#scroller",
                        apiReference : eshopAPI
                    });

                    eshopAPI.getWsConfig();
                    eshopAPI.getConfig();
                    //eshopAPI.getCategories([categoryWidget]);
                    //eshopAPI.getNewProducts([productsWidget]);

                    //var slider = '#slider';

                    //categoryWidget.hideWidgets([slider]);
					
					menuWidget.addSelectedListener([categoryWidget, productsWidget, myCartWidget, registrationWidget,loginWidget]);

                    headerWidget.addBackListener([categoryWidget, productsWidget]);
                    categoryWidget.addRenderListener([headerWidget, navigationWidget, footerWidget]);
                    categoryWidget.addSelectedListener([productsWidget]);
                    productsWidget.addRenderListener([headerWidget, navigationWidget, footerWidget]);
                    productsWidget.addSelectedListener([productDetailsWidget]);
                    productsWidget.addReviewListener([reviewWidget]);
                    navigationWidget.addSelectedListener([categoryWidget, myCartWidget, productsWidget]);
					
					navigationWidget.addShowmycartListener([shoppingCartWidget]); // for displaying my cart 
					shoppingCartWidget.addOrderListener([checkoutFormWidget]); 
					//menuWidget.addShowmycartListener([shoppingCartWidget]); // for displaying my cart 
					
                    productDetailsWidget.addReviewListener([reviewWidget]);
                    productDetailsWidget.addCartListener(shoppingCartWidget);
                    footerWidget.addSelectedListener([myCartWidget, categoryWidget, productsWidget]);
					footerWidget.addHomeListener([menuWidget]);
					footerWidget.addShowmycartListener([shoppingCartWidget]);
					
                    myCartWidget.addRenderListener([headerWidget, navigationWidget, footerWidget]);
                    shoppingCartWidget.addCartListener(shoppingCartWidget);
                    shoppingCartWidget.addSelectedListener([myCartWidget]);
                    myCartWidget.addOrderListener([checkoutFormWidget]);
                    checkoutFormWidget.addRenderListener([headerWidget, navigationWidget, footerWidget]);
                    checkoutFormWidget.addOrderSubmitListener([checkoutFormViewWidget]);
                    checkoutFormWidget.addSelectedListener([productsWidget]);
                    checkoutFormViewWidget.addRenderListener([headerWidget, navigationWidget, footerWidget]);
                    checkoutFormViewWidget.addOrderSuccessListener([checkoutSuccessWidget]);
                    checkoutSuccessWidget.addRenderListener([headerWidget, navigationWidget, footerWidget]);
                    checkoutFormViewWidget.addOrderListener([checkoutFormWidget]);
					reviewWidget.addPostReviewListener([postReviewWidget]);
					postReviewWidget.addReviewListener([reviewWidget]);
                    registrationWidget.addRenderListener([headerWidget, navigationWidget, footerWidget]);
                    registrationWidget.addSelectedListener(registrationSuccessWidget);
                    registrationWidget.addLoginListener(loginWidget);
                    registrationSuccessWidget.addRenderListener([headerWidget, navigationWidget, footerWidget]);
                    loginWidget.addRenderListener([headerWidget, navigationWidget, footerWidget]); 
                    loginWidget.addSelectedListener([loginSuccessWidget,headerWidget]);
                    loginWidget.addLoginListener(registrationWidget);

                    //headerWidget.hideWidgets([slider]);
                    //headerWidget.addSearchListener(productsWidget);

                    menuWidget.render();
                    //checkoutFormWidget.renderUI();
                    //headerWidget.renderUI();
                    //navigationWidget.renderUI();
                    //categoryWidget.renderUI();
                    //footerWidget.renderUI();
                });
            });
        </script>
    </head>
    <body>

        <div id="splash" class="img_div">
            <img src="images/eshop/splash_logo.png">
        </div>

        <div id="container" style="display:none;">
        </div>

        <div id="eshop" style="display:none;">
            <div id="header">
            </div>
            <div id="header-tab" class="header_tab">
            </div>
            <div id="wrapper">
                <div id="scroller">

                </div>
            </div>
            <div id="footer">            </div>
    </div>
    </body>
</html>