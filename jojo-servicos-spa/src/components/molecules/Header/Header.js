import React, {Component} from 'react';
import './style.css';

class Table extends Component {
  constructor(props){
		super(props); 
	}
	render(){
		return ( 
			<div class="container-topo">
				<img class="image-topo-logo-jojo" src="./logo-jojo.svg" alt="Logo Jojô" />
				<div class="container-topo-negocios">
					<div class="paragrafo-topo-negocios">{this.props.title}</div>
					<img class="image-topo-logo-negocios" src="./negocios.png" alt="Logo Negócios" />
				</div>
			</div> )
	}
}


export default Table;