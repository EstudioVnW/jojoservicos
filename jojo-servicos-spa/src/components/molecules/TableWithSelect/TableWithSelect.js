import React, {Component} from 'react';
import './style.css';

import CellTable from '../../atoms/CallTable/CellTable';
import RowTable from '../../atoms/RowTable/RowTable';
import TableContent from '../../atoms/TableContent/TableContent';
import TableHeader from '../../atoms/TableHeader/TableHeader';
import ColumnName from '../../atoms/ColumnName/ColumnName';
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
		let keys = Object.keys(labelsHeader);
		return( 
		<div class="table" >
			<TableHeader backgroundColor={backgroundColor}>
				{keys && keys.length > 0 && keys.map(item => (
				<ColumnName>{labelsHeader[item]}</ColumnName>
				))}
			</TableHeader>
			<TableContent>
				{ data && data.length > 0 ?
					data.map(item => {
					return (
					<RowTable key={item['key']}>
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
