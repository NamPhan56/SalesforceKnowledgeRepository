import { LightningElement,track } from 'lwc';
import PICTUREZIPLOC from '@salesforce/resourceUrl/AdminPermissionSets';

export default class AdminPermissionSets extends LightningElement {

    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;

    buttonName = 'Permission Sets'
    titleLink = '';
    pic0 = PICTUREZIPLOC + '/image.png';
    pic1 = PICTUREZIPLOC + '/image (1).png';
    pic2 = PICTUREZIPLOC + '/image (2).png';
    pic3 = PICTUREZIPLOC + '/image (3).png';
    pic4 = PICTUREZIPLOC + '/image (4).png';
    pic5 = PICTUREZIPLOC + '/image (5).png';
    pic6 = PICTUREZIPLOC + '/image (6).png';
    
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen track value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
}