class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = ContaBancaria;