import {Injectable} from 'angular2/core'
import {Speaker} from '../speaker'

let speakerList = this.speakerList || [];

@Injectable()
export /**
 * SpeakerService
 */
class SpeakerService {    
    addSpeaker(speaker:Speaker) {
        speakerList.push({
            firstName: speaker.firstName, 
            lastName: speaker.lastName, 
            age: 1
        })
    }
    
    getSpeakerList() {
        return speakerList;
    }
}