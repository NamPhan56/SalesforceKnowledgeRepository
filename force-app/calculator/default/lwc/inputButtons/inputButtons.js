import { LightningElement, api} from 'lwc';

export default class InputButtons extends LightningElement {

    equalHandler(){
        const evt = new CustomEvent('sendequal', {});
        this.dispatchEvent(evt);
    }

    clearHandler(){
        const evt = new CustomEvent('sendclear', {});
        this.dispatchEvent(evt);
    }
}