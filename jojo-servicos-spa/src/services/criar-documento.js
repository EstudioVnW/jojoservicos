import gerarId from './gerar-id-aleatorio';

function createDocumento(){
    let documentoId = gerarId();
    const pegarIdDoc = () => documentoId;
    const modificarIdDoc = (id) => { documentoId = id };
    return {
        pegarIdDoc: pegarIdDoc,
        modificarIdDoc: modificarIdDoc
    };
}

export default createDocumento;
