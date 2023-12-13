class SistemaDeAutenticacao {
    constructor() {
        this.usuarios = {};
    }

    cadastrarUsuario(username, senha) {
        if (!this.usuarios[username]) {
            this.usuarios[username] = { senha };
            return true; 
        } else {
            return false;
        }
    }

    fazerLogin(username, senha) {
        const usuario = this.usuarios[username];
        if (usuario && usuario.senha === senha) {
            return true; 
        } else {
            return false; 
        }
    }

    redefinirSenha(username, novaSenha) {
        if (this.usuarios[username]) {
            this.usuarios[username].senha = novaSenha;
            return true; 
        } else {
            return false; 
        }
    }
}

module.exports = SistemaDeAutenticacao