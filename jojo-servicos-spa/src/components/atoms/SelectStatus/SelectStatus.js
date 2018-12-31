import React, {Component} from 'react';
import './style.css';

class SelectStatus extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: this.props.value,
			fire: false
		};
		this.handlerOnChange = this.handlerOnChange.bind(this);
	}
	handlerOnChange(e){
		this.setState({ selected: e.target.value, fire: true});
	}
	componentDidUpdate(){
		if(this.state.fire){
			setTimeout(()=>{
				this.props.onChange(this.props.id, this.state.selected);
			}, 500);
			this.setState({ fire: false});
		}
	}
	render(){
		let { options } = this.props;
		let { selected } = this.state;
		return( 
			<select name="status" className="select-status" value={selected} onChange={this.handlerOnChange}>
				{ options.map(item => ( <option key={item} value={item} class="select-status--option">{item}</option> ) ) }
			</select> );
	}
}

export default SelectStatus;