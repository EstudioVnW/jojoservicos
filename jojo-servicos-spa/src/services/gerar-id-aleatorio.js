var gerarPalavra = require('./gerar-palavra');

function gerarId(){
    var prefixo = '-jojo';
    var token = gerarPalavra(6);
    var timestamp = new Date().getTime();
    return `${prefixo}${timestamp}${token}`;
}

module.exports = gerarId;
