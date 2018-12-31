import React, {Component} from 'react';
import './style.css';

import CellTable from '../../atoms/CallTable/CellTable';
import RowTable from '../../atoms/RowTable/RowTable';
import TableContent from '../../atoms/TableContent/TableContent';
import TableHeader from '../../atoms/TableHeader/TableHeader';
import ColumnName from '../../atoms/ColumnName/ColumnName';
import SelectStatus from '../../atoms/SelectStatus/SelectStatus';
import MensageEmptyList from '../../atoms/MensageEmptyList/MensageEmptyList';

class Table extends Component {
  constructor(props){
		super(props);
		this.handlerOnChange = this.handlerOnChange.bind(this);
	}
	handlerOnChange(id, status){
    this.props.handlerOnChange(id, status);
  }
	render(){
		let { labelsHeader, backgroundColor, data } = this.props;
		let keysLabels = Object.keys(labelsHeader);
		let keys = [...keysLabels];
		keys.shift();
		console.log('keys', keys);
		return( 
		<div className="table" >
			<TableHeader backgroundColor={backgroundColor}>
				{keysLabels && keysLabels.length > 0 && keysLabels.map((item, index) => (
				<ColumnName key={index}>{labelsHeader[item]}</ColumnName>
				))}
			</TableHeader>
			<TableContent>
				{ data && data.length > 0 ?
					data.map(item => {
					return (
					<RowTable key={item['key']}>
						<SelectStatus 
						id={item['key']}
						options={['Pendente', 'Finalizado']} 
						value={item['status']}
						onChange={this.handlerOnChange} />

						{keys && keys.length > 0 && keys.map(key => (
							<CellTable value={item[key]} />
						))}
					</RowTable>
					)
				}) : <MensageEmptyList>Não há registro</MensageEmptyList>
				}
			</TableContent>
		</div> )
	}
}


export default Table;