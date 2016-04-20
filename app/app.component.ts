import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Speaker} from './speaker';
import {SpeakerFormComponent} from './speaker-form/speaker.component';
import {SpeakersListComponent} from './speakers-list/speakers-list.component';

@Component({
    selector: 'my-app',
    // template: '<h1> <a [routerLink]="[\'SpeakerForm\']">Speakerform</a> <router-outlet></router-outlet></h1>',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/speaker-form', name: 'SpeakerForm', component: SpeakerFormComponent},    
    {path: '/speakers-list', name: 'SpeakersList', component: SpeakersListComponent}    
])

export class AppComponent {
    name = "Name ";
    
    speaker = new Speaker('Oleg', 'LastName', 11);
}
