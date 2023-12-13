const ContaBancaria = require('./contaBancaria.js');


test('Teste de Saque', () => {
    const conta = new ContaBancaria(1000);

    const saqueBemSucedido = conta.sacar(500);

    expect(saqueBemSucedido).toBe(true);
    expect(conta.saldo).toBe(500);
});

test('Teste de Saque com Saldo Insuficiente', () => {
    const conta = new ContaBancaria(200);

    const saqueBemSucedido = conta.sacar(500);

    expect(saqueBemSucedido).toBe(false);
    expect(conta.saldo).toBe(200);
});