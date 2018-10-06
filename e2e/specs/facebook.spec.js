import FacebookAuthentification from "../pages/FacebookAuthentification";

describe('Testando a autentificação do facebook', () => {

    beforeAll(() => {
        FacebookAuthentification.open();
    })

    it('Deve permitir o login com as certas credenciais', () => {

        FacebookAuthentification.emailInput.sendKeys("thalesalviano@hotmail.com");
        FacebookAuthentification.passworldInput.sendKeys("********");
        FacebookAuthentification.submit();
        expect(FacebookAuthentification.nameUser).toEqual("Thales")
        
    })



})