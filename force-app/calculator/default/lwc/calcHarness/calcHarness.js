import { LightningElement, track} from 'lwc';

export default class CalcHarness extends LightningElement {

    @track input = "";
    @track result = "result";

    calculate(e){
        //this.input = this.template.querySelector('#input1').getAttribute("value");
        //this.result = "result";
        let ret = 0;
        let arraystr;
        let regexPatter = "/^[\/\+\-\*]|[^\/\+\-\*\d]+|[(\/\+\-\*)]{2,}";

        let operations = new Set(["/","*","-","+"]);

        
    }

    handleClear(e){
        this.input = "";
        this.result = "";
    }

    handleInputChange(e){
        this.input = e.detail.value;
    }

    handleButtonPress(e){
        //console.log("parent: " + e.detail);
        this.input += e.detail;
    }
}