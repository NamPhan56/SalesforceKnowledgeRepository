import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    //used to go from child to parent
    childHandler() {
        const evt = new CustomEvent('sendmessage', {detail: "Hey, This message is sent from child Component"});
        this.dispatchEvent(evt);
    }

    //used to go from parent to child
    message;

    @api greet(message) {
        // Suppose a translating capability is here which translate the message param to local user's language
        this.message = message;
    }
}