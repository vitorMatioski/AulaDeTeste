class Estoque {
    constructor() {
        this.itens = {};
    }

    adicionarItem(nome, quantidade) {
        if (this.itens[nome]) {
            this.itens[nome] += quantidade;
        } else {
            this.itens[nome] = quantidade;
        }
    }

    verificarQuantidade(nome) {
        return this.itens[nome] || 0;
    }
}

module.exports = Estoque