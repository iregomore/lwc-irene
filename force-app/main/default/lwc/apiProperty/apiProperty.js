import { LightningElement, track } from 'lwc';

export default class ApiProperty extends LightningElement {
    @track percentage;
    
    handleChange(event) {
        this.percentage = event.target.value;
    }
}