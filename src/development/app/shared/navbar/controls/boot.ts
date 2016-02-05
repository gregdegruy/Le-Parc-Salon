import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'
import {AppComponent} from './app.component'

@Component({
    selector: 'leparc-nav',
    templateUrl: './src/development/app/shared/navbar/views/navbar.html'
})

export class MainComponent { }

// bootstrap(AppComponent);
bootstrap(MainComponent);