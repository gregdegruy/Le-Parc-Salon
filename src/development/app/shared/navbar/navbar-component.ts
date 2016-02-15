import {Component} from "angular2/core";

@Component({
    selector: "leparc-navbar",
    templateUrl: "./src/development/app/shared/navbar/navbar-view.html"
})

export class NavbarComponent {

    constructor() {               
        System.import("dependencies/headroom/headroom.js").then(() => {
            var navbar = document.getElementById("leparc-nav");
            var headroom = new Headroom(navbar);
            headroom.init();
        });
    }
}
