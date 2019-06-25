import { LightningElement, track } from 'lwc';

export default class Basic_HelloGetSet extends LightningElement {

    @track firstName = '';
    @track lastName = '';

    get fullName() {
        return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    }

    handleChanges(event){
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }
}