import { LightningElement, track} from 'lwc';

export default class CalcHarness extends LightningElement {

    @track input = "";
    @track result = "result";

    calculate(e){
        //this.input = this.template.querySelector('#input1').getAttribute("value");
        //this.result = "result";
        let ret = 0;
        let arraystr;
        
        let operations = new Set(["/","*","-","+"]);

        //this.input = this.input.replace(" ", "");

        // for(let i=0; i<this.input.length;i++){

        // }
        //console.log("input: " + this.input + "\n" + "result: " + this.result);

    }

    handleClear(e){
        this.input = "";
        this.result = "";
    }

    handleChange(e){
        this.input = e.detail.value;
    }
}