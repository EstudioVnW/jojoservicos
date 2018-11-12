import database from './database';

const gravarPedido = (id, obj) => {
  database.ref('atendimentos/'+ id).set(obj);
}

export default {
  gravarPedido
};