import React, { Component } from 'react';
import firebase from '../../services/firebase';

import Table from '../molecules/TableWithSelect/TableWithSelect';

class Business extends Component {
  constructor(props){
    super(props);
    this.state = {
      atendimentosFinalizados: [ ]
    };
    this.database = firebase.database();
  }

  componentDidMount(){
    this.database.ref('atendimentos')
      .orderByChild('pedidos/status')
      .equalTo("Finalizado")
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
				};
				
      });

      this.setState({
        atendimentosFinalizados: snapshotArray
      });     
 
    });
  }

  render(){
    const labelsHeader = {nome:'Cliente ▼', whatsapp:'Whatsapp', 
    email:'E-mail', categoria:'Categoria ▼'};
		const { atendimentosFinalizados } = this.state;
    return (
        <Table  backgroundColor={'rgb(51, 88, 164)'}
							labelsHeader={ labelsHeader } 
							data={ atendimentosFinalizados } />

    )
  }}
  
export default Business;