import { LightningElement, api} from 'lwc';

export default class InputButtons extends LightningElement {



    equalHandler(){
        let evt = new CustomEvent('sendequal', {});
        this.dispatchEvent(evt);
    }

    clearHandler(){
        let evt = new CustomEvent('sendclear', {});
        this.dispatchEvent(evt);
    }

    buttonOnClickHandler(event){
        let value = event.target.label;

        let evt = new CustomEvent('sendbuttonvalue',{"detail": value});
        this.dispatchEvent(evt);
        //console.log(value);
    }
}