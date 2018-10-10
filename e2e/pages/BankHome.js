import Page from "./page";

class BankHome extends Page {

    get customerLogin() { element(by.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "btn-lg", " " ))]')) };
    get managerLogin() { element(by.buttonText('Manager Login')).click() };

    open() {
        super.open("http://www.way2automation.com/angularjs-protractor/banking/#/customer");
    }

}

export default new BankHome();