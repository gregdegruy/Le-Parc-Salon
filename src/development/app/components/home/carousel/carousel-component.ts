// tell TS we are working with 3rd party APIs
declare var System: any;

import {Component} from "angular2/core";
import {RouteConfig, AsyncRoute, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: "leparc-carousel",
    templateUrl: "./src/development/app/components/home/carousel/carousel-view.html"
})

// @RouteConfig([
//     new AsyncRoute({
//         path: '/',
//         name: 'CarouselComponent',
//         loader: () => {
//             return Promise.all([
//                 System.import("dependencies/jssor/js/jssor.slider.min.js"),
//                 System.import("dependencies/jssor/js/full-width-slider.js")
//             ]).then(() => {
//                 console.log("Loaded CarouselComponent... is logged because Mr. Timeout no likey empty then blocks XP");
//             });
//         }
//     })
// ])

export class CarouselComponent {

//     constructor() {
// 
//         setTimeout(() => {
//             // document.addEventListener("DOMContentLoaded", function() {
//             Promise.all([
//                 System.import("dependencies/jssor/js/jssor.slider.min.js"),
//                 System.import("dependencies/jssor/js/full-width-slider.js")
//             ]).then(() => {
//                 console.log("Loaded CarouselComponent... is logged because Mr. Timeout no likey empty then blocks XP");
//             });
//             // });
//         }, 1);
//     }
}
