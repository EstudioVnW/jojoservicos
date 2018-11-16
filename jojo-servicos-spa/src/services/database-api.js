import database from './database';

const gravarPedido = (id, obj) => {
  database.ref('atendimentos/'+ id + '/pedidos').set(obj);
}

const gravarCliente = (id, obj) => {
  database.ref('atendimentos/'+ id + '/cliente').set(obj);
}

export default {
  gravarPedido,
  gravarCliente
};