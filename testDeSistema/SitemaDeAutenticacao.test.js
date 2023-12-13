const SistemaDeAutenticacao = require('./SistemaDeAutenticacao');

test('Teste de Sistema: Cadastro, Login e Redefinição de Senha', () => {

    const sistemaDeAutenticacao = new SistemaDeAutenticacao();

    const cadastroBemSucedido = sistemaDeAutenticacao.cadastrarUsuario('usuario1', 'senha123');

    const loginBemSucedido = sistemaDeAutenticacao.fazerLogin('usuario1', 'senha123');

    const redefinicaoDeSenhaBemSucedida = sistemaDeAutenticacao.redefinirSenha('usuario1', 'novaSenha456');

    expect(cadastroBemSucedido).toBe(true);
    expect(loginBemSucedido).toBe(true);
    expect(redefinicaoDeSenhaBemSucedida).toBe(true);
});
