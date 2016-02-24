// tell TS we are working with 3rd party APIs
declare var System: any;
declare var Headroom: any;

import {Component} from "angular2/core";

@Component({
    selector: "leparc-navbar",
    templateUrl: "./src/development/app/shared/navbar/navbar-view.html"
})

export class NavbarComponent {

    constructor() {        
        setTimeout(() => {
            System.import("dependencies/headroom/headroom.js").then(() => {
                var navbar = document.getElementById("leparc-nav");
                var headroom = new Headroom(navbar);
                headroom.init();
            });
        }, 1);
    }
}
