/********
 * Navbar
 */

let navbar = document.querySelector("nav");
let headroom = new Headroom(navbar);
headroom.init();

class Gem {
    constructor(type) {
        this.type = type;
    }
}