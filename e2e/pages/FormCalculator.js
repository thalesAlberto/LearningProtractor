import Page from "./page"

class FormCalculator extends Page {

    get firstCamp() { return element(by.model('first')) };
    get secondCamp() { return element(by.model('second')) };
    get operatorSelect() { return element(by.model('operator')) };
    get button() { return element(by.id('gobutton')) };
    get result() { return element(by.css('h2[class="ng-binding"]')).getText() };
        
    open() {
        super.open('http://juliemr.github.io/protractor-demo/');
    }
    
    submit() {
        this.button.click();
    }
    
    selectOperator(operator) {
        this.operatorSelect.click();
        return element(by.css("option[value = "+ `${operator}` + "]")).click();
    }
}

export default new FormCalculator();