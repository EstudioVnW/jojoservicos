import React, { Component } from 'react';
import database from '../../services/database';

import OrderPanel from '../molecules/OrderPanel/OrderPanel'

class Business extends Component {
  constructor(props){
    super(props);
    this.state = {
      atendimentosPendentes: [ ],
      atendimentosFinalizados: [ ]
    };
    this.handlerOnChange = this.handlerOnChange.bind(this);
  }

  handlerOnChange(key, status){
    database.ref('atendimentos/' + key)
      .update({'/pedidos/status': status});
  }

  componentDidMount(){
    database.ref('atendimentos')
      .orderByChild('pedidos/tema')
      .equalTo("Encontrar emprego")
      .on('value', (snapshot) => {

      let dados = snapshot.val() || { };
			let arrayDeDados = Object.keys(dados);
			
      let snapshotArray = arrayDeDados.length > 0 && arrayDeDados.map((keyItem)=>{
				
				return {
          key: keyItem,
          status: dados[keyItem].pedidos.status || '---',
          nome: dados[keyItem].cliente.nome || '---',
          email: dados[keyItem].cliente.email || '---',
          whatsapp: dados[keyItem].cliente.whatsapp || '---',
          categoria: dados[keyItem].pedidos.categoria || '---',
          curriculo: dados[keyItem].pedidos.curriculo || '---',
          envio: dados[keyItem].pedidos.envio || '---'
				};
				
      });

      let arrayAtendPendentes = snapshotArray.length > 0 
        && snapshotArray.filter((item) => {
          return item['status'] === 'Pendente';
      });

      let arrayAtendFinalizados = snapshotArray.length > 0 
        && snapshotArray.filter((item) => {
        return item['status'] === 'Finalizado';
      });

      this.setState({
        atendimentosPendentes: arrayAtendPendentes,
        atendimentosFinalizados: arrayAtendFinalizados
      });     
 
    });
  }

  render(){
    const labelsHeader = {status:'Status ▼', nome:'Cliente ▼', whatsapp:'Whatsapp', 
    email:'E-mail', categoria:'Categoria ▼', curriculo:'Currículo', envio:'Envio'};
		const { atendimentosPendentes, atendimentosFinalizados } = this.state;
    const { handlerOnChange } = this;
    console.log('labelsHeader', labelsHeader);
    return (
			<OrderPanel 
				labelsHeader={ labelsHeader }
				atendimentosPendentes={ atendimentosPendentes }
				atendimentosFinalizados={ atendimentosFinalizados }
				handlerOnChange={ handlerOnChange }
			/>
    )
  }}
  
export default Business;