import { LightningElement} from 'lwc';

export default class CalcHarness extends LightningElement {

    input;

    calculate(i){
        console.log(i);
    }


}