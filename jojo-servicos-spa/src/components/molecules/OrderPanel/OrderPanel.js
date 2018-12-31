import React from 'react';
import './style.css';

import Table from '../Table/Table';
import Title from '../../atoms/Title/Title';

const OrderPanel = (props) => {
	console.log('props.labelsHeader', props.labelsHeader);
	return (
		<div className='order-panel'>
			<Title>Novas solicitações:</Title>
			<Table  backgroundColor={props.backgroundColor}
							labelsHeader={ props.labelsHeader } 
							data={ props.atendimentosPendentes }
							handlerOnChange={ props.handlerOnChange } />

			<Title>Processos finalizados:</Title>
			<Table  backgroundColor={props.backgroundColor}
							labelsHeader={ props.labelsHeader } 
							data={ props.atendimentosFinalizados }
							handlerOnChange={ props.handlerOnChange } />
		</div>
	)
}
  
export default OrderPanel;