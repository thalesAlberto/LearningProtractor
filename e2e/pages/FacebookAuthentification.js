import Page from "./page";

class FacebookAuthentification extends Page {

    get emailInput() { return element(by.id('email')) };
    get passworldInput() { return element(by.id('pass')) };
    get buttonSubmit() { return element(by.id('loginbutton')) };
    get nameUser() { return element(by.id('._1vp5')).getText() };

    open() {
        super.open("https://www.facebook.com/");
    }

    submit() {
        this.buttonSubmit.click();
    }

    login() {
        this.emailInput.sendKeys("thalesalviano@hotmail.com");
        this.passworldInput.sendKeys("thalesetatiana");
        this.submit();
    }

}

export default new FacebookAuthentification();