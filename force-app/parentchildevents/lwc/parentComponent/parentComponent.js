import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    //child to parent
    message;

    childToParentHandler(event) {
        this.message = event.detail;
    }


    //parent to child handler
    parentToChildHandler() {
        this.template.querySelector('c-child-component').greet('Hey, This Message Is Sent From Parent!');
    }
}