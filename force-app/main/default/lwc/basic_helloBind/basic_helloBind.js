import { LightningElement, track } from 'lwc';

export default class Basic_helloBind extends LightningElement {

    @track nameParameter;
    
    handleChange(event) {
        this.nameParameter = event.target.value;
    }
}