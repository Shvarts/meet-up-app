export /**
 * Speaker
 */
class Speaker {
    public firstName;
    public lastName;
    public age;
    
    constructor(
        firstName: string,
        lastName: string,
        age?: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }
}