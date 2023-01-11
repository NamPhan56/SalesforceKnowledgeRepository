import { LightningElement, track} from 'lwc';

export default class CalcHarness extends LightningElement {

    @track input = "";
    @track result = "result";

    calculate(e){

       let temp;
        try{
            temp = eval(this.input);
            this.result = temp
        }
        catch(SyntaxError){
            this.result = "There are errors in your formula.";
        }
    }

    handleClear(e){
        this.input = "";
        this.result = "";
    }

    handleInputChange(e){
        this.input = e.detail.value;
    }

    handleButtonPress(e){
        this.input += e.detail;
    }
}