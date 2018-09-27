import database from './database';

const gravarPedido = (id, obj) => {
  database.ref('pedidos/'+ id).set(obj);
}

export default {
  gravarPedido
};