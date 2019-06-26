import { LightningElement } from 'lwc';

export default class ApiFunction extends LightningElement {

    calculateHour() {
        this.template.querySelector('c-clock').refresh();
    }

}