import { LightningElement,track } from 'lwc';
import PICTUREZIPLOC from '@salesforce/resourceUrl/AdminProfilePic';

export default class ModalPopupLWC extends LightningElement {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;

    listPict = PICTUREZIPLOC + '/List.png';
    locationPict = PICTUREZIPLOC+ '/Location.png';
    
    buttonName = 'Profiles'
    titleLink = 'https://www.kicksaw.com/blog/salesforce-101-roles-vs-profiles'
    
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