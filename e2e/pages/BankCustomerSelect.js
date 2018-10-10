import Page from "./page";

class BankCustomerSelect extends Page {

    get nameSelectorButton() { return element(by.id('userSelect')).click() }
    get button() { return element(by.buttonText('Login'));}

    selectCustomer(number) {
        console.log(number)
        this.nameSelectorButton.click();
        return element(by.css("option[value=" + `${number}` + "]")).click();
    }

    submit() {
        this.button.click();
    }
}

export default new BankCustomerSelect();