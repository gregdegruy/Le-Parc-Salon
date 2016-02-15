System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SalonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SalonComponent = (function () {
                function SalonComponent() {
                    setTimeout(function () {
                        // System.import("https://maps.googleapis.com/maps/api/js?key=AIzaSyC6OT7PLvySWR857_k4SMIbKkg91VLwb0c").then(() => {
                        // https://maps.googleapis.com/maps/api/js?key=AIzaSyC6OT7PLvySWR857_k4SMIbKkg91VLwb0c
                        var myLatlng = new google.maps.LatLng(29.979390, -90.095690);
                        var mapOptions = {
                            center: myLatlng,
                            zoom: 15,
                            disableDefaultUI: true,
                            zoomControl: true,
                            draggable: false,
                            scrollwheel: false,
                            tilt: 25
                        };
                        var map = new google.maps.Map(document.getElementById('salon-map'), mapOptions);
                        var marker = new google.maps.Marker({
                            position: myLatlng,
                            map: map
                        });
                        google.maps.event.addDomListener(window, 'load', initialize);
                        // });
                    }, 1);
                }
                SalonComponent = __decorate([
                    core_1.Component({
                        selector: "salon",
                        templateUrl: "./src/development/app/components/home/salon/salon-view.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SalonComponent);
                return SalonComponent;
            })();
            exports_1("SalonComponent", SalonComponent);
        }
    }
});
