import {Component} from 'angular2/core';
import {SpeakerService} from '../speaker-form/speaker.service';

@Component({
    selector: 'speakers-list',
    styleUrls: ['./app/speakers-list/speakers-list.component.css'],
    templateUrl: './app/speakers-list/speakers-list.component.html',
    providers: [SpeakerService]
})

export /**
 * SpeakersListComponent
 */
class SpeakersListComponent {
    public speakers;
    
    constructor(private _speakerService :SpeakerService) {
        this.speakers = _speakerService.getSpeakerList();    
    }
}