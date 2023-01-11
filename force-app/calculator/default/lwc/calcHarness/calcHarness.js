import { LightningElement, track} from 'lwc';

export default class CalcHarness extends LightningElement {

    @track input = "";
    @track result = "result";

    calculate(e){

       let temp;
        try{
            temp = eval(this.input);
            if(temp === 0){
                this.result = "0";
            }
            else{
                this.result = temp;
            }

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

    handleEnterPress(e){
        if(e.key === "Enter"){
            this.calculate();
        }
    }
}