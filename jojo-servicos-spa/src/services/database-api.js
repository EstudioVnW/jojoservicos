import firebase from './firebase';

let database = firebase.database();

const gravarPedido = (id, obj) => {
  database.ref('atendimentos/'+ id + '/pedidos').set(obj);
}

const gravarCliente = (id, obj) => {
  database.ref('atendimentos/'+ id + '/cliente').set(obj);
}

const buscarAtendimentos = () => {
  database.ref('atendimentos').on('value', function(snapshot) {
    console.log("buscarAtendimentos", snapshot.val());
    return
  });
  
}

export default {
  gravarPedido,
  gravarCliente,
  buscarAtendimentos
};