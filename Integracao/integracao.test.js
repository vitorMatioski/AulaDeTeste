
const Estoque = require('./Estoque');
const CarrinhoDeCompras = require('./CarrinhoDeCompras');

test('Teste de Integração: Adição de Itens ao Carrinho e Atualização do Estoque', () => {
    const estoque = new Estoque();
    estoque.adicionarItem('ProdutoA', 10);
    
    const carrinho = new CarrinhoDeCompras(estoque);

    const adicaoBemSucedida = carrinho.adicionarItem('ProdutoA', 5);

    expect(adicaoBemSucedida).toBe(true);
    expect(carrinho.verificarQuantidadeNoCarrinho('ProdutoA')).toBe(5);
    expect(estoque.verificarQuantidade('ProdutoA')).toBe(5);
});
