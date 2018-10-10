import BankHome from '../pages/BankHome'
import BankCustomerSelect from '../pages/BankCustomerSelect';

describe('Testando se o login e efetuado da maneira correta', () => {

    beforeAll(() => {
        BankHome.open();
    });

    it('Testa se o login esta funcionando normalmente', () => {

        BankCustomerSelect.selectCustomer(1);
        BankCustomerSelect.submit();

    })
    
})