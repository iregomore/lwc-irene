import { LightningElement, track } from 'lwc';

export default class Basic_HelloGetSet extends LightningElement {

    privateFirstName;
    privateLastName;

    @track fullName;

    get firstName() {
        return this.privateFirstName;
    }

    set firstName(value){
        this.privateFirstName = value;
    }

    get lastName() {
        return this.privateLastName;
    }

    set lastName(value){
        this.privateLastName = value;
    }

    handleChanges(){
        this.fullName = this.privateFirstName.toUpperCase() + this.privateLastName.toUpperCase();
    }
}