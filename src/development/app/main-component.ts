import {bootstrap} from 'angular2/platform/browser'
import {Component} from "angular2/core";

import {FloatingActionButtonComponent} from "./shared/floating-action-button/floating-action-button-component"
import {FooterComponent} from "./shared/footer/footer-component"
import {NavbarComponent} from "./shared/navbar/navbar-component"
import {SalonComponent} from "./components/home/salon/salon-component"
import {ServicesComponent} from "./components/home/services/services-component"
import {StylistsComponent} from "./components/home/stylists/stylists-component"

/**
 * Configuration for the main Le Parc Salon Angular Component
 * @Component 
 * @attribute {directives} defines a list of components, allowing angular to properly identify the component selector
 */
@Component({
    directives: [
        FooterComponent,
        FloatingActionButtonComponent,
        NavbarComponent, 
        SalonComponent, 
        ServicesComponent, 
        StylistsComponent
        ],
    selector: "leparc-main",
    templateUrl: "./src/development/app/main-view.html"
})  

export class MainComponent { }

bootstrap(MainComponent);
