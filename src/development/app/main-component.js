System.register(["angular2/platform/browser", "angular2/core", "./components/home/carousel/carousel-component", "./shared/floating-action-button/floating-action-button-component", "./shared/footer/footer-component", "./shared/navbar/navbar-component", "./components/home/salon/salon-component", "./components/home/services/services-component", "./components/home/stylists/stylists-component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, carousel_component_1, floating_action_button_component_1, footer_component_1, navbar_component_1, salon_component_1, services_component_1, stylists_component_1;
    var MainComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (floating_action_button_component_1_1) {
                floating_action_button_component_1 = floating_action_button_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (salon_component_1_1) {
                salon_component_1 = salon_component_1_1;
            },
            function (services_component_1_1) {
                services_component_1 = services_component_1_1;
            },
            function (stylists_component_1_1) {
                stylists_component_1 = stylists_component_1_1;
            }],
        execute: function() {
            /**
             * Configuration for the main Le Parc Salon Angular Component
             * @Component
             * @attribute {directives} defines a list of components, allowing angular to properly identify the component selector
             */
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        directives: [
                            carousel_component_1.CarouselComponent,
                            footer_component_1.FooterComponent,
                            floating_action_button_component_1.FloatingActionButtonComponent,
                            navbar_component_1.NavbarComponent,
                            salon_component_1.SalonComponent,
                            services_component_1.ServicesComponent,
                            stylists_component_1.StylistsComponent
                        ],
                        selector: "leparc-main",
                        templateUrl: "./src/development/app/main-view.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
            browser_1.bootstrap(MainComponent);
        }
    }
});
