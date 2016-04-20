import {Component} from 'angular2/core';
import {FormBuilder} from 'angular2/common';
import {Speaker} from '../speaker';
import {SpeakerService} from './speaker.service';

@Component({
    selector: 'speaker-form',
    styleUrls: ['./app/speaker-form/speaker.component.css'],
    templateUrl: './app/speaker-form/speaker.component.html',
    providers: [SpeakerService]
})

export /**
 * SpeakerFormComponent
 */
class SpeakerFormComponent {
    // public speaker;
    public speakers;
    public createForm;
    
    // constructor() {
    //     this.speaker = new Speaker('name', 'last', 12);
    //     this.speakers = [];        
    // }
        
    constructor(public speakerService: SpeakerService, fb: FormBuilder) {
        this.speakers = this.speakerService.getSpeakerList() || [];
        this.createForm = fb.group({
            firstName: "",
            lastName: ""
        });
    }
    addSpeaker() {
        this.speakerService.addSpeaker(this.createForm.value);
    }
}