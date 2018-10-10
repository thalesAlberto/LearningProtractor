import FormCalculator from '../pages/FormCalculator'

describe('Testando a funcionalidade das operações matemáticas', () => {

    //Abre o browser da aplicação
    beforeAll(() => {
        FormCalculator.open();
    });

    //Setando Valores e preparando para mudança de operação
    beforeEach(() => {
        FormCalculator.fillForms(15 , 3)
    });

    it('Deve retornar um valor correto na soma de dois inteiros', () => {
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('18');
    });

    it('Deve retornar um valor correto na subtração de dois inteiros', () => {
        FormCalculator.selectOperator("SUBTRACTION");
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('12');
    });

    it('Deve retornar um valor correto na multiplicação de dois inteiros', () => {
        FormCalculator.selectOperator("MULTIPLICATION");
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('45');
    });

    it('Deve retornar um valor correto na divisão de dois inteiros', () => {
        FormCalculator.selectOperator("DIVISION");
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('5');
    });

    it('Deve retornar um valor correto no resto de divisão de dois inteiros', () => {
        FormCalculator.selectOperator("MODULO");
        FormCalculator.submit();
        expect(FormCalculator.result).toEqual('0');
    });

});