import { LightningElement,track } from 'lwc';
import PICTUREZIPLOC from '@salesforce/resourceUrl/AdminCustomObjectPics';

export default class ModalPopupLWC extends LightningElement {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;

    buttonName = 'Custom Objects'
    titleLink = '';
    pic0 = PICTUREZIPLOC + '/image.png';
    pic1 = PICTUREZIPLOC + '/image (1).png';

    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
}