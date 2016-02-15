import {Component} from "angular2/core";

@Component({
    selector: "floating-action-button",
    templateUrl: "./src/development/app/shared/floating-action-button/floating-action-button-view.html"
})

export class FloatingActionButtonComponent {

    constructor() {        
        setTimeout(() => {
            if (document.getElementById("to-top-button") !== null) {
                document.getElementById("to-top-button").addEventListener("click", () => {
                    window.scrollTo(0, 0);
                    console.log("click");
                });
            }
        }, 1);
    }
}
