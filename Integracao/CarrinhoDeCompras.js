class CarrinhoDeCompras {
    constructor(estoque) {
        this.estoque = estoque;
        this.itens = {};
    }

    adicionarItem(nome, quantidade) {
        const estoqueDisponivel = this.estoque.verificarQuantidade(nome);
        
        if (quantidade <= estoqueDisponivel) {
            if (this.itens[nome]) {
                this.itens[nome] += quantidade;
            } else {
                this.itens[nome] = quantidade;
            }
            this.estoque.adicionarItem(nome, -quantidade);
            return true;
        } else {
            return false; 
        }
    }

    verificarQuantidadeNoCarrinho(nome) {
        return this.itens[nome] || 0;
    }
}
module.exports = CarrinhoDeCompras