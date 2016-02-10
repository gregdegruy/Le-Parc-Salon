import {bootstrap} from 'angular2/platform/browser'
import {Component} from "angular2/core";

import {NavbarComponent} from "./shared/navbar/navbar-component"
import {SalonComponent} from "./components/home/salon/salon-component"

bootstrap(SalonComponent);
bootstrap(NavbarComponent);

@Component({
    directives: [SalonComponent, NavbarComponent],
    selector: "leparc-main",
    templateUrl: "./src/development/app/main-view.html"
})  

export class MainComponent { }

bootstrap(MainComponent);
