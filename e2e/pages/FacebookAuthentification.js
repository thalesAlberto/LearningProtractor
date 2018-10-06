import Page from "./page";

class FacebookAuthentification extends Page {

    get emailInput() { return element(by.id('email')) };
    get passworldInput() { return element(by.id('pass')) };
    get buttonSubmit() { return element(by.id('loginbutton')) };
    get nameUser() { return element(by.id('._1vp5')) };

    open() {
        super("https://www.facebook.com/");
    }

    submit() {
        this.buttonSubmit.click();
    }

}

export default new FacebookAuthentification();