System.register(['angular2/platform/browser', "./nav-component"], function(exports_1) {
    var browser_1, nav_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(nav_component_1.AppComponent);
        }
    }
});
