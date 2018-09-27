var gerarPalavra = require('./gerar-palavra');

function gerarId(){
    var prefixo = '-JOJO';
    var token = gerarPalavra(12);
    var timestamp = new Date().getTime();
    return `${prefixo}-${timestamp}-${token}`;
}

module.exports = gerarId;
