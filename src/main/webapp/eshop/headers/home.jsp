<%@ include file="/eshop/commons/init.jsp" %>

<script type='text/javascript'>
    $(document).ready(function () {
        $('div.menu_class').click(function () {
            $('ul.the_menu').css('z-index:9999;');
            $('ul.the_menu').slideToggle('medium');
        });
    });
</script>

<script type="text/javascript">
    YUI().use('node', 'widget', 'eshopAPI', 'phrescoWidget', 'phrescoEvent', 'navigationWidget',
            'headerWidget', 'categoryWidget', 'sliderWidget', 'newProductsWidget', 'topSellsWidget',
            'footerWidget', function(Y) {

        Y.on("domready", function () {
            var eshopAPI = new Y.Phresco.EShopAPI({});

            // instantiate NavigationWidget with the HTML
            var navigationWidget = new Y.Phresco.NavigationWidget({
                // place holder can be decided by specifying the attribute
                targetNode : "#navigation",
                apiReference : eshopAPI
            });

            // instantiate HeaderWidget with the HTML
            var headerWidget = new Y.Phresco.HeaderWidget({
                // place holder can be decided by specifying the attribute
                targetNode : "#header",
                apiReference : eshopAPI
            });

            // instantiate CategoryWidget with the HTML
            var categoryWidget = new Y.Phresco.CategoryWidget({
                // place holder can be decided by specifying the attribute
                targetNode : "#submenu",
                apiReference : eshopAPI
            });

            // instantiate SliderWidget with the HTML
            var sliderWidget = new Y.Phresco.SliderWidget({
                // place holder can be decided by specifying the attribute
                targetNode : "#slider-wrapper",
                apiReference : eshopAPI
            });

            // instantiate NewProductsWidget with the HTML
            var newProductsWidget = new Y.Phresco.NewProductsWidget({
                // place holder can be decided by specifying the attribute
                targetNode : "#left",
                apiReference : eshopAPI
            });

            // instantiate TopSellsWidget with the HTML
            var topSellsWidget = new Y.Phresco.TopSellsWidget({
                // place holder can be decided by specifying the attribute
                targetNode : "#right",
                apiReference : eshopAPI
            });

            // instantiate FooterWidget with the HTML
            var footerWidget = new Y.Phresco.FooterWidget({
                // place holder can be decided by specifying the attribute
                targetNode : "#privacy",
                apiReference : eshopAPI
            });

            eshopAPI.getCategories([categoryWidget]);

            navigationWidget.render();
            headerWidget.render();
            sliderWidget.render();
            categoryWidget.render();
            newProductsWidget.render();
            topSellsWidget.render();
            footerWidget.render();

        });
    });
</script>
