import FormCalculator from '../pages/FormCalculator'

describe('Testando a funcionalidade das operações matemáticas', () => {

    //Abre o browser da aplicação
    beforeAll(() => {
        FormCalculator.open();
    });

    //Setando Valores e preparando para mudança de operação
    beforeEach(() => {
        FormCalculator.firstCamp.sendKeys(12);
        FormCalculator.secondCamp.sendKeys(4);
    });

    it('Deve retornar um valor correto na soma de dois inteiros', () => {
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('16');
    });

    it('Deve retornar um valor correto na subtração de dois inteiros', () => {
        FormCalculator.selectOperator("SUBTRACTION");
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('8');
    });

    it('Deve retornar um valor correto na multiplicação de dois inteiros', () => {
        FormCalculator.selectOperator("MULTIPLICATION");
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('48');
    });

    it('Deve retornar um valor correto na divisão de dois inteiros', () => {
        FormCalculator.selectOperator("DIVISION");
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('3');
    });

    it('Deve retornar um valor correto no resto de divisão de dois inteiros', () => {
        FormCalculator.selectOperator("MODULO");
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('0');
    });

});