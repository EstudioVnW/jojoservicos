import React, {Component} from 'react';
import './style.css';

class Header extends Component {
  constructor(props){
		super(props); 
	}
	render(){
		return ( 
			<div className="header">
				<div className="container-topo">
					<div className="topo-right">
						<div className="logout-button" onClick={this.props.handlerOnClick}>
							sair
						</div>
						<img className="image-topo-logo-jojo" src="./logo-jojo.svg" alt="Logo Jojô" />
					</div>
					<div className="container-topo-negocios">
						<div className="paragrafo-topo-negocios" 
							style={{color: this.props.color, fontSize: this.props.fontSize , borderBottom:this.props.borderBottom}}>
							{this.props.title}</div>
							{
								this.props.icone && <img className="image-topo-logo-negocios" src={this.props.icone} alt="Logo Negócios" />
							}
					</div>
				</div>
			</div> )
	}
}

export default Header;
