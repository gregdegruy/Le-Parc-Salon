System.register(['angular2/platform/browser', "./shared/navbar/navbar-component"], function(exports_1) {
    var browser_1, navbar_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(navbar_component_1.NavbarComponent);
        }
    }
});
