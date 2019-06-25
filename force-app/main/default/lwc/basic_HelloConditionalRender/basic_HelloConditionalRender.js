import { LightningElement, track } from 'lwc';

export default class Basic_HelloConditionalRender extends LightningElement {

    @track areDetailsVisible = false;


    handleChange() {
        this.areDetailsVisible = !this.areDetailsVisible;
    }

}